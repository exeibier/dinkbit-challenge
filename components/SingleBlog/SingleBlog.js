import React from 'react'

import styles from '../../styles/SingleBlog.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
const SingleBlog = () => {
  return (
    <div className={styles.single_blog_container}>
      <div className='container'>
        <div className={styles.single_blog}>
          <div className={styles.single_back}>
            <a href='blog'> regresar al blog </a>
          </div>
          <div className={styles.single_title}>
            <h2>5 acciones para que las redes sociales de tu empresa den resultado</h2>
          </div>
          <div className={`${styles.single_socials_wrapper} d-flex justify-content-between`}>
            <div className={styles.single_date}>
              <p>27 marzo, 2020</p>
            </div>
            <div className={styles.single_socials}>
              <a href='#'>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href='#'>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href='#'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
          <div className={styles.single_img}>
            <img src='https://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg' />
          </div>
          <div className={styles.single_content}>
            <p>
                La presencia en redes sociales nunca había sido tan necesaria como hoy. De un día para otro,
                negocios de diferentes giros empresariales supieron que el futuro si se encontraba
                en internet yen que si querían que sus empresas sobrevivieran había que renovarse o morir.
            </p>
            <p>
                El cambio digital tardó en llegar, y algunas empresas se enfrentaron a una realidad que no
                quisieron ver antes: Internet se volvió la herramienta más importante para las empresas,
                ya sea para dar a conocer sus productos yservicios, aumentar sus ventas, cautivar a nuevos clientes, retener a sus usuarios,
                o simplemente para tener presencia a través de contenido.
            </p>
            <p>
                Según la Asociación Mexicana de Internet, en 2019, 8 de cada 10 empresas en el país tienen un perfil en redes sociales,
                siendo los preferidas Facebook, Instagram, Linkedin y Youtube. Este es unporcentaje significativo, pero la verdadera
                pregunta es: ¿Sus esfuerzos en realidad tendrán resultados?
            </p>
            <p>
                Si eres dueño de una Pyme y tus resultados en redes sociales no son los que esperabas,
                no desesperes, aquí te presentamos algunas recomendaciones:
            </p>
            <p className='font-weight-bold'>
               1. Elige siempreelmejor canal:
            </p>
            <p>
                Así como tu producto tieneuna personalidad, cada plataforma tiene la suya. Las redes
                sociale sy plataformas son universos en los que conviven millones de personas con gustos, comportamientos e intereses diferentes.
                El lenguaje utilizado, así como el material que se comparte es propio de cada uno de estos universos. Así, descybrimos
                que, por ejemplo, Facebook es el canal ideal para mantener una comunicaciñon más
                cercana e informal con tus clientes, ¡Aprovecha esto!; Twitter es rápido, asi que si decides usarlo, asegúrate de captar la atención de tus
                seguidores. YouTube es excelente para mostrar un tutorial en el que brille tu producto.
                Estudia bien a tu público y elige el mejor canal, este es siempre el primer paso.
            </p>
            <p className='font-weight-bold'>
              2. Conoce a tu Público objetivo:
            </p>
            <p>
                Para quién va dirigido tu producto, ¿mamás, profesotes, empresarios, viajeros,
                fashionistas? la clave es que las redes sociales te ayudarán a hablarle a tus clientes. Si
                tu producto o servicio es muy específico, es primordial conocer bien el público al que
                quieres atrapar para enviar mensajes poderosos y, por lo tanto, efectivos.
            </p>
            <p className='font-weight-bold'>
              3.¡Atención al cliente!
            </p>
            <p>
              Si además de tener unfran producto tienes una buena atención al clientw ¡Felicidades! la
              fidelidad y compromiso de tus clientes se vera reflejada. Ten por seguro que un liente satisfecho te buscará nuevamente para comprar.
            </p>
            <p className='font-weight-bold'>
              4. ¡Dale vida y personalidad a tu marca!
            </p>
            <p>
              la validad de tus productos es primordial para la venta del mismo, pero la personalidad
              de tu marca es igual de importante. Crea clientes identificados y comprometidos con tus
              productos gracias a la filosofía de la qiedotes a tu negocio. la visión de tu empresa es
              la clave para crear comunidad, ésta cuidará de tus productos.
            </p>
            <p className='font-weight-bold'>
              5. Contrato a un experto:
            </p>
            <p>
              Si las redes sociales son o se convertirán en tu principal motor de venta y promoción, no
              hay mejor inversión queuna agencia de marketing. Su conocimiento en social media,
              desarrollo de contenido y estrategia de pauta se convertirán en una inversión y no un
              gasto.
            </p>
            <p>
              Si crees que puedes obtener todos los beneficios para tu negocio sin hacer una inversión
              "sólo porque son redes sociales y todos tenemos Facebook" podría serun error que te
              costará tiempo, diner y, sobre todo, CLIENTES.
            </p>
            <p>
              Con estos tips esperamos que fortalezcas tu marca, logres una mayor atracción de
              clientes y encuentres liz en el camino de la prospección... sea cual sea la plataforma que
              elijas.
            </p>
          </div>
          <div className={`${styles.single_author_wrapper} d-lg-flex`}>
            <div className={styles.single_author}>
              <img src='HOME/Equipo/rafael.svg' />
            </div>

            <div className={styles.single_author_info}>
              <div className={styles.single_author_name}>
                <p>Luz E.</p>
              </div>
              <div className={styles.single_author_job}>
                <p>Key Account Manager</p>
              </div>
              <div className={styles.single_author_text}>
                <p>
                  Con estos tips esperamos que fortalezcas tu marca, logres una mayor atracción de
                  clientes y encuentres liz en el camino de la prospección... sea cual sea la plataforma que
                  elijas.
                </p>
              </div>
              <div className={`${styles.single_author_quote} font-italic`}>
                <p>"Honor your mistakes as hidden intention" <br /> Brian Eno</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SingleBlog
