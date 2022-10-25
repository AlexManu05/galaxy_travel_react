import React from 'react'
import Footer from '../components/footer/Footer'
import HeroImage from '../components/heroImage/HeroImage'
import Navbar from '../components/navbar/Navbar'
import Form from '../components/form/Form'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='CONTACT.' text='Contact GLX Travel' />
            <Form />
            <Footer/>
        </div>
    )
}

export default Contact