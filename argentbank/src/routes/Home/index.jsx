/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import HeroImage from '../../components/HeroImage'
import './style.css'
import Feature from '../../components/Feature'
import ChatIcon from '../../assets/images/icon-chat.png'
import MoneyIcon from '../../assets/images/icon-money.png'
import SecurityIcon from '../../assets/images/icon-security.png'

const Home = () => {
  return (
    <>
        <HeroImage />
        <section className='features'>
            <h2 className='sr-only'>Features</h2>
            <Feature
                icon={ChatIcon}
                title={`You are our #1 priority`}
                text={`Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.`}
            />
            <Feature
                icon={MoneyIcon}
                title={`More savings means higher rates`}
                text={`The more you save with us, the higher your interest rate will be!`}
            />
            <Feature
                icon={SecurityIcon}
                title={`Security you can trust`}
                text={`We use top of the line encryption to make sure your data and money is always safe.`}
            />
        </section>
    </>
  )
}

export default Home