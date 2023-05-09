import { motion } from 'framer-motion';
import { styles } from '../styles'; 
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';
import { textVariant } from '../utils/motion';
import { testimonials } from '../constants';



const Feedbacks = () => {
  return (
   
    <div className="bg-black-200  rounded-3xl   h-screen">
    <div className="bg-tranparent">
        <div className="container flex flex-col justify-center  mx-auto ">
            <h2 className="text-5xl justify-center font-bold">
                Frequently Asked Questions
            </h2>
            <p className="mt-4 mb-8 text-gray-600">
                React Interview Questions And Answers
            </p>
            <div className="space-y-4">
                <details className="w-full rounded-lg ">
                    <summary className="px-4 py-6">
                        What is React? 
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-300">
                        React is a front-end JavaScript library
                        developed by Facebook in 2011. 
                    </p>
                </details>
                <details className="w-full rounded-lg">
                    <summary className="px-4 py-6">
                    What is Props and how to use it give some example?
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                    Props is the shorthand for Properties in React.
                    </p>
                </details>
                <details className="w-full rounded-lg ">
                    <summary className="px-4 py-6">
                    How to install tailwind css in react js ?
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                    What are synthetic events in React?
                    </p>
                    
                </details>
            </div>
        </div>
    </div>
</div>
);
}

    
  


export default SectionWrapper(Feedbacks,"");