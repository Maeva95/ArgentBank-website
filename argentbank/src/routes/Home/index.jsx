/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import HeroImage from '../../components/HeroImage'
import '../Home/style.css'
import Feature from '../../components/Feature'
import ChatIcon from '../../assets/images/icon-chat.webp'
import ChatIconMedium from '../../assets/images/icon-chat_720.webp'
import MoneyIcon from '../../assets/images/icon-money.webp'
import MoneyIconMedium from '../../assets/images/icon-money_720.webp'
import SecurityIcon from '../../assets/images/icon-security.webp'
import SecurityIconMedium from '../../assets/images/icon-security_720.webp'


const Home = () => {
    return (
        <main>
            <HeroImage />
            <section className='features'>
                <h2 className='sr-only'>Features</h2>
                <Feature
                    icon={ChatIcon}
                    iconMedium={ChatIconMedium}
                    title={`You are our #1 priority`}
                    text={`Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.`}
                />
                <Feature
                    icon={MoneyIcon}
                    iconMedium={MoneyIconMedium}
                    title={`More savings means higher rates`}
                    text={`The more you save with us, the higher your interest rate will be!`}
                />
                <Feature
                    icon={SecurityIcon}
                    iconMedium={SecurityIconMedium}
                    title={`Security you can trust`}
                    text={`We use top of the line encryption to make sure your data and money is always safe.`}
                />
            </section>
        </main>
    )
}

export default Home