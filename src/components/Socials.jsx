import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

import { fadeIn, textVariant } from '../utils/motion';

const Socials = () => {

  
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resume.pdf';
                alink.click();
            })
        })
    }
    return (
        <div>
         

        </div>

                
    );
};
  

export default SectionWrapper(Socials,"");
