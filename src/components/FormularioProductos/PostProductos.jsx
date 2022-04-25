import { useState, useRef } from "react";
import { useFormik,Field } from "formik";
import axios from "axios";

const PostProductos = () => {
  const form = useRef();
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      image: "",
    },
    onSubmit: (values) => {
      console.log(values);
      axios
        .post(
          "http://localhost:4000/api",
          values,
          { headers: { "Content-Type": "multipart/form-data" } }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      formik.resetForm();
    },
  });


  
  return (
    <section>
      <h5>Seccion del administrador</h5>
      <h2>Aqui podras agregar nuevos productos</h2>
      <form className="formulario" onSubmit={formik.handleSubmit} ref={form}>
        <label htmlFor="title">
          <span>Title</span>
          <input
            type="text"
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            required
          />
        </label>
        <label htmlFor="price">
          <span>Price</span>
          <input
            type="text"
            id="price"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            required
          />
        </label>
        <label htmlFor="description">
          <span>Description</span>
          <input
            type="text"
            id="description"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
            required
          />
        </label>
        <label htmlFor="image">
          <span>Imagen</span>
          <input
            type="file"
            id="image"
            name="image"
            onChange={e => setFieldValue("image", e.target.files[0])}
            value={formik.values.image}
            required
          />
        </label>
        <input type="submit" className=" btn-mini" />
      </form>
    </section>
  );
};

export default PostProductos;
