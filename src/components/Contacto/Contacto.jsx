import './contacto.css'
import { useFormik } from 'formik'
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

const Message = () => {
  return (
    <div className="message">
      <h2>Mensaje enviado</h2>
    </div>
  )
}

const Contacto = () => {
  const [send, setSend] = useState(false)
  const form = useRef()
  const formik = useFormik({
    initialValues: {
      asunto: '',
      nombre: '',
      email: '',
      mensaje: ''
    },
    onSubmit: (values) => {
      emailjs.sendForm('service_a2owugw', 'template_2aistke', form.current, 'ez3QVxlfAB8gURWDh')
        .then((result) => {
          console.log(form.current)
          setSend(true)
        }, (error) => {
          console.log(error.text)
        })
        .catch(error => console.log(error))
      formik.resetForm()
      setTimeout(() => {
        setSend(false)
      }, 2000)
    }
  })
  return (
    <section id="contacto">
      <h5>Escribenos para conocer nuestras ofertas</h5>
      <h2>Contacto</h2>
      <form action="" onReset={formik.handleReset} onSubmit={formik.handleSubmit} className="formulario" ref={form}>
        <label htmlFor="asunto">
          <span>Asunto</span>
          <input
            type="text"
            id="asunto"
            name="asunto"
            placeholder="Ingrese el asunto a tratar"
            onChange={formik.handleChange}
            value={formik.values.asunto}
            required
          />
        </label>

        <label htmlFor="nombre">
          <span>Nombres</span>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Nombres y Apellidos"
            onChange={formik.handleChange}
            value={formik.values.nombre}
            required
          />
        </label>

        <label htmlFor="email">
          <span>Email</span>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            placeholder="Email@example.com"
            value={formik.values.email}
            required
          />
        </label>

        <label htmlFor="mensaje">
          <span>Mensaje</span>
          <textarea
            name="mensaje"
            id="mensaje"
            cols="30"
            rows="10"
            onChange={formik.handleChange}
            value={formik.values.mensaje}
            required
          >
          </textarea>
        </label>
        <input type="submit" className="btn-mini"></input>
      </form>
      {send ? <Message /> : null}
    </section>
  )
}

export default Contacto
