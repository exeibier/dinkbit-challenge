import React from 'react'
import Head from 'next/head'

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>Dinkbit</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                {children}
            </div> 
        </>
    )
}

export default Layout