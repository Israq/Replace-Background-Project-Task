import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon, image }) => {
  return (
    
    <Tilt className="xs:w-[250px] w-full">
      
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full  p-[1px] rounded-[20px] shadow-card'
      >
        
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 4450
          }}
          className='bg-tertiary rounded-[20px]
          py-1  min-h-[280px] flex
          justify-evenly items-center flex-col'
        >
          <img src={image}
          className='w-full h-full object-cover
          rounded-2xl' />
        </div>

      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      
      <div className='flex mt-3 mb-3 gap-1 items-center justify-center text-black dark:text-white '>
        <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' stroke='currentColor' width='32' height='32'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M17 13l-5 5m0 0l-5-5m5 5V6'></path>
        </svg>
        <p className='text-[18px] font-bold text-black dark:text-white'>Or try with an example</p>
      </div>
      

     
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper( About, "about")