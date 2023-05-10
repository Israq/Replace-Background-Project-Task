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
    
      <div className="w-full flex flex-1 flex-col sm:flex-row justify-center items-center sm:items-start px-12">
        <div className="w-full max-w-[850px] bg-zinc-100 dark:bg-zinc-800 rounded-3xl flex flex-col-reverse md:flex-row justify-end relative md:h-40 lg:h-48">
          <div className="sm:flex-1 hidden sm:inline-block">
            <div className="p-8 flex flex-col gap-4 text-zinc-800 dark:text-zinc-200 justify-center h-full">
              <h1 className="flex gap-4 text-3xl font-bold items-center w-full">
                <div className="hidden lg:inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.875rem" height="1.875rem">
                    <path fill="none" d="M0 0H24V24H0z">
                      </path>
                      <path fill="currentcolor" d="M20 3c.552 0 1 .448 1 1v1.757l-2 2V5H5v8.1l4-4 4.328 4.329-1.327 1.327-.006 4.239 4.246.006 1.33-1.33L18.899 19H19v-2.758l2-2V20c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h16zm1.778 4.808l1.414 1.414L15.414 17l-1.416-.002.002-1.412 7.778-7.778zM15.5 7c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5S14 9.328 14 8.5 14.672 7 15.5 7z">
                        </path>
                        </svg>
                        </div>Replace background</h1>
                        <h2 className="text-left text-base font-medium">Teleport anything, anywhere with AI</h2>
                        </div>
                        </div>
                        <div className="overflow-hidden flex-1 rounded-3xl">
                          <video className="w-full h-40 md:h-full object-cover rounded-3xl" autoPlay muted loop >
                            <source src="https://static.clipdrop.co/web/homepage/tools/ReplaceBackground.webm#t=0.1" type="video/webm"/>
                            <source src="https://static.clipdrop.co/web/homepage/tools/ReplaceBackground.mp4#t=0.1" type="video/mp4"/>
                            </video>
                            </div>
                            
                            </div>
                            
                            </div>
                            
        
                            
        
       
        
      
      

       
        
 
    

    
    
    
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

export default Cards;