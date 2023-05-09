import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { live } from '../assets';
import { cards } from "../constants";

import { SectionWrapper } from '../hoc';

import { fadeIn } from '../utils/motion';
import { textVariant } from '../utils/motion';
import { c } from 'maath/dist/index-43782085.esm';
import { Path } from 'three';

const ReplaceBackground = ({ index, name, description, tags, video, source_code_link, live_project_link}) => {
  return (
    <motion.div varients={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-tertiary p-5  rounded-2xl sm:flex-row  w-full "
      >
        <div className='relative w-full h-[230px] '>
          <video 
            src={video}
            alt={name}
            className='w-full h-full object-cover
            rounded-2xl'
            autoPlay muted loop
          />
         
</div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p key={tag.name} className='{`text-[14px] ${tag.color}`}'>
                #{tag.name}
              </p>
            ))}
        </div>
        
       
        
      </div>
      <div className='w-full rounded-3xl overflow-hidden border-dashed border-4 border-black dark:border-white'>
          
            <div className='flex flex-col justify-center items-center text-center px-8 py-8 sm:py-16 dark:bg-gray-800 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700'>
              <p className='text-[13px] font-semibold text-black dark:text-white text-center opacity-100 mx-4 select-none'>Paste the link here</p>
            
          </div>
        </div>

       
        
     </motion.div>
    

    
    
    
  );
  
  
}

const Cards = () => {
  return (
    <>
      <div className='mt-20 flex flex-wrap gap-7'>
        {cards.map((cards, index) => (
          <ReplaceBackground key={`cards-${index}`} index={index} {...cards} />
        ))}
      </div>
      
    </>
  );
};

export default SectionWrapper(Cards, "");