import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon, image }) => {
  return (
    
    <Tilt className="xs:w-[250px] items-center justify-start w-auto">
      
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
          className=' rounded-[20px]
            min-h-[280px] flex
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
       <div className="w-full flex flex-1 flex-col sm:flex-row justify-center items-center sm:items-start px-12 mt-12">
        <div className="w-full max-w-[850px]  rounded-3xl flex flex-col-reverse md:flex-row justify-end relative md:h-40 lg:h-48">
          <div className="sm:flex-1  sm:inline-block">
          <div className="w-full rounded-3xl overflow-hidden border-dashed border-4 border-black dark:border-white">
                              <div className="flex flex-col justify-center items-center text-center px-8 py-8 sm:py-16 dark:bg-gray-800 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
                                <p className="text-base font-medium text-gray-600 dark:text-gray-400 text-center opacity-100 mx-4 select-none">Click, paste, or drop a file here to start.</p>
                                <input type="file" className="absolute top-0 bottom-0 left-0 right-0 hidden" accept="image/png,image/jpeg,image/webp"/>
                                </div>
                                </div> 
                            </div>
                            
                            </div>
                            
                            </div>
                            
        
                            
      <div className='flex mt-3 mb-3 gap-1 items-center justify-center text-black dark:text-white '>
        
        <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' stroke='currentColor' width='32' height='32'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M17 13l-5 5m0 0l-5-5m5 5V6'></path>
        </svg>
        <p className='text-[18px] font-bold text-black dark:text-white'>Or try with an example</p>
      </div>
      
     
     
      <div className='mt-3 mb-3 flex flex-wrap gap-10 items-center justify-center '>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}

      </div>
    </>
  )
}

export default About; 