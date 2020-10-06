import React from 'react'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Dinkbit</title>
        <link rel='icon' href='/favicon.ico' />
        <script src='https://www.google.com/recaptcha/api.js' async defer />
      </Head>
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout
