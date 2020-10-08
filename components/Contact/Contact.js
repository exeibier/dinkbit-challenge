import React, { useRef, useState } from 'react'

import styles from '../../styles/Contact.module.scss'
import Fade from 'react-reveal/Fade'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import ReCAPTCHA from 'react-google-recaptcha'
const Contact = () => {
  const [submitted, messageSubmited] = useState(null)
  const reRef = useRef(<ReCAPTCHA />)
  const formik = useFormik({
    initialValues: {
      completeName: '',
      email: '',
      phone: '',
      country: '',
      message: ''
    },
    validationSchema: Yup.object({
      completeName: Yup.string().required(' nombre obligatorio'),
      email: Yup.string().email('El email no es valido').required('Email obligatorio'),
      phone: Yup.string().required('Teléfono obligatorio'),
      country: Yup.string().required('País obligatorio'),
      message: Yup.string().required('Mensaje obligatorio')

    }),
    onSubmit: async (val) => {
      try {
        const token = await reRef.current.executeAsync()
        reRef.current.reset()
        const response = await fetch('../api/createForm',
          {
            method: 'post',
            body: JSON.stringify({
              completeName: val.completeName,
              email: val.email,
              phone: val.phone,
              country: val.country,
              message: val.message,
              token: token
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        const json = await response.json()
        console.log('Success:', json)
        messageSubmited('!Gracias por contactarnos!')
        setTimeout(() => {
          messageSubmited(null)
        }, 5000)
      } catch (error) {
        console.error('Error:', error)
      }
    }

  })
  const showMessage = () => {
    return (
      <div className={styles.submitted}>
        <p>{submitted} </p>
      </div>
    )
  }
  return (
    <div className={styles.contact_container}>
      <div className='container'>
        <h2>Te queremos escuchar</h2>
        <h3> Si tienes dudas, comentarios, propuestas, proyectos o quieres trabajar con nosotros escribenos.</h3>
        <div className={`${styles.contact_form} px-lg-4 px-0`}>
          <Fade top>

            <form
              onSubmit={formik.handleSubmit}
            >
              <div className='form-row'>
                <div className='form-group col-lg-6'>
                  {formik.errors.completeName
                    ? <label htmlFor='inputName' className='alert alert-danger'>{formik.errors.completeName}</label>
                    : <label htmlFor='inputName'>Nombre y Apellido</label>}
                  <input
                    type='text'
                    className='form-control'
                    value={formik.values.completeName}
                    placeholder='Escribe tu nombre completo'

                    name='completeName'
                    onChange={formik.handleChange}
                  />
                </div>
                <div className='form-group col-md-6'>
                  {formik.errors.email
                    ? <label htmlFor='inputEmail' className='alert alert-danger'>{formik.errors.email}</label>
                    : <label htmlFor='inputEmail'>Correo electrónico</label>}

                  <input
                    type='email'
                    className='form-control'
                    value={formik.values.email}
                    name='email'
                    placeholder='Ingresa tu correo electrónico'
                    onChange={formik.handleChange}

                  />
                </div>
              </div>
              <div className='form-row'>
                <div className='form-group col-lg-6'>
                  {formik.errors.phone
                    ? <label htmlFor='inputTel' className='alert alert-danger'>{formik.errors.phone}</label>
                    : <label htmlFor='inputTel'>Télefono</label>}
                  <input
                    type='tel'
                    className='form-control'
                    value={formik.values.phone}
                    name='phone'
                    placeholder='Ingresa tu número teléfonico'
                    onChange={formik.handleChange}

                  />
                </div>
                <div className='form-group col-md-6'>
                  {formik.errors.country
                    ? <label htmlFor='country' className='alert alert-danger'>{formik.errors.country}</label>
                    : <label htmlFor='country'>País</label>}
                  <input
                    type='text'
                    className='form-control'
                    value={formik.values.country}
                    name='country'
                    placeholder='Ingresa tu país'
                    onChange={formik.handleChange}

                  />
                </div>
              </div>
              <div className='form-group'>
                {formik.errors.message
                  ? <label htmlFor='inputMessage' className='alert alert-danger'>{formik.errors.message}</label>
                  : <label htmlFor='inputMessage'>Mensaje</label>}
                <textarea
                  className='form-control'
                  name='message'
                  value={formik.values.message}
                  rows='4'
                  placeholder='Cuentanos de tu proyecto o coméntanos tus dudas'
                  onChange={formik.handleChange}

                />
              </div>
              <div className={styles.captcha_box}>
                <ReCAPTCHA
                  sitekey='6LdOf9QZAAAAAEphczlJtUbP_uLJ-BjchZQU0efe' size='invisible' ref={reRef}
                />
              </div>
              <div className={styles.contact_button}>
                <input name='submit' type='submit' value='Enviar' className='btn btn-primary' />
              </div>
              {submitted && showMessage()}
            </form>
          </Fade>

        </div>
        <div className={styles.terms}>
          <p>Al dar click en el botón enviar aceptas nuestra <a href='https://dinkbit.com/aviso-de-privacidad'>Política de privacidad</a></p>
        </div>
      </div>
    </div>
  )
}

export default Contact
