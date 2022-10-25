import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import PricingCards from '../components/pricing/Pricing'
import HeroImage from '../components/heroImage/HeroImage'

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='PRICING.' text='Choose your trip.' />
            <PricingCards />
            <Footer />
        </div>
    )
}

export default Pricing