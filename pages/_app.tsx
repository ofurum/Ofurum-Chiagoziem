import React from 'react';
import '../styles/globals.css'
import Navbar from "./component/navbar"
import type { AppProps } from 'next/app'
import Footer from "./component/footer"
import Contact from "./component/contactme"
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <React.Fragment>
        <Navbar />
        <div className="md-876:p-24 md:px-10 max-w-[1440px] bg-header-matte-black text-white">
         <Component {...pageProps} />
        </div>
        <Contact />
        <Footer/>
    </React.Fragment>
   
  )
 
}

export default MyApp
