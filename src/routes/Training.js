import React from 'react'
import Footer from '../components/footer/Footer'
import HeroImage from '../components/heroImage/HeroImage'
import Navbar from '../components/navbar/Navbar'
import TrainingSection from '../components/training/Training'

const Training = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='TRAINING.' text='Pre-Flight & In-Flight Training.' />
            <TrainingSection />
            <Footer />
        </div>
    )
}

export default Training