import React from 'react'
// import training from '../../src/assets/training.svg';
// import development from '../../src/assets/development.svg';
// import web from '../../src/assets/web.svg';
import ServicesRendered from './ServicesRendered';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FontAwesomeIcon } from "react-icons/fa";

// import './services.css'

const Services = () => {
  return (
    <div className='services'>
      <h1> Our Services</h1>
      <div className='topRendered'>
        <ServicesRendered myImage={<i class="fas fa-utensils"></i>} text={'Healthy Food'} smallText={'We use only the healthiest methods to cook our foods. Routine cleanups have also been set up for our equipments, utensils, furnitures and co.'} />
        <ServicesRendered myImage={<i class="fas fa-cart-plus"></i>} text={'Online Order'} smallText={'You can now get your meals delivered to your doorstep by placing your orders directly on our website or our mobile application.'} />
        <ServicesRendered myImage={<i class="fas fa-user-tie"></i>} text={'Chief Chef'} smallText={'We hire only the best chefs in Africa. All of whom undergo a 6 months training under our chief chef, who is non other than Mr. Dayo D1.'} />
        <ServicesRendered myImage={<i class="fas fa-headset"></i>} text={'Active Customer Care'} smallText={'Any issues? We will resolve them as soon as they appear with our hardworking Customer support team who are made available to you 24/7'} />
      </div>
    </div>
  )
}

export default Services