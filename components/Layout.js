import React from 'react'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Dinkbit</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Dinkbit agencia de desarrollo y marketing hará crecer tu empresa mejorando su branding y presencia digital' />
        <meta property='og:title' content='Conoce dinkbit y las mejores prácticas de diseño y desarrollo en nuestro blog ' />
        <meta property='og:site_name' content='Dinkbit Blog' />

      </Head>
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout
