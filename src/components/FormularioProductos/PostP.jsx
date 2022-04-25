import { useState, useEffect } from "react";
import { useFormik,Field,Formik,Form } from "formik";
import axios from "axios";

const PostP = () => {
  const productos = {
    title : "",
    description : "",
    price : "",
    image : "",
  };
  const postData=async (data) => {
    const url = "http://localhost:4000/api";
    const form = new FormData()
    for (let key in data) {
      form.append(key, data[key])
    }
    console.log(form)
    return await axios.post(url, form, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
  }
  
  return (
    <section>
      <h5>Seccion del administrador</h5>
      <h2>Aqui podras agregar nuevos productos</h2>
      <Formik 
        initialValues={productos}
        onSubmit={async(values,actions) => {
          console.log(values);
          const res = await postData(values);
          
          console.log(res);
          actions.resetForm();
        }}
      >
        {( { setFieldValue, isSubmitting, handleSubmit}) => (
          <Form onSubmit={handleSubmit} className="formulario" >
          <label htmlFor="title">
          <span>Title</span>
          <Field
            name="title"
            onChange={(e) => { setFieldValue("title",e.target.value)}}
          />
        </label>
        <label htmlFor="price">
          <span>Price</span>
          <Field
            name="price"
            onChange={(e) => { setFieldValue("price",e.target.value)}}
          />
        </label>
        <label htmlFor="description">
          <span>Description</span>
          <Field
            name="description"
            onChange={(e) => { setFieldValue("description",e.target.value)}}
          />
        </label>
        <label htmlFor="image">
          <span>Imagen</span>
          <input
            type="file"
            name="image"
            onChange={e => setFieldValue("image", e.target.files[0])}
          />
        </label>
        <input type="submit" className=" btn-mini" />
          </Form>
        ) }
      </Formik>
    </section>
  );
};

export default PostP;
