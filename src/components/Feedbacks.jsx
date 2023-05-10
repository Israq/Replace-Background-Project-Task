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
            <h2 className="text-5xl justify-center text-center mt-14 mb-10 sm:mb-20 font-bold">
                Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
                <details className="w-full rounded-lg ">
                    <summary className="px-4 py-6">
                    HOW TO TELEPORT SOMEONE ANYWHERE?
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-300">
                    Our free online background changer can teleport anybody, anywhere. Take an image of yourself and describe where you want to be. ClipDrop AI will remove the original background and create a new background that match your description.

Pro-tip : You can use our mobile ClipDrop app to take a picture on your phone, and instantly change the background of your image.
                    </p>
                </details>
                <details className="w-full rounded-lg">
                    <summary className="px-4 py-6">
                    HOW CAN I CREATE PRO COMPOSITIONS WITHOUT A STUDIO?
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                    You don't need a photo studio anymore. With ClipDrop photo background changer, you can replace photo backgrounds instantly. You don't even need a photo editing software to remove the background and place your own background instead. You can directly create all the scenes of your dreams, and change background by just describing it in plain English!
                    </p>
                </details>
                <details className="w-full rounded-lg ">
                    <summary className="px-4 py-6">
                    DO YOU HAVE AN APP TO CHANGE IMAGE BACKGROUND?
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                    Yes, the ClipDrop AI technology needed to change image background is available on our mobile application.
                    </p>
                    
                </details>
                <details className="w-full rounded-lg ">
                    <summary className="px-4 py-6">
                    HOW TO CREATE MULTIPLE VERSIONS OF A PICTURE BACKGROUND?
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                    Our app replace image background and gives you four background image alternatives. It's a great way to create different backgrounds for the same picture. Drop here a picture with a prompt, and we will create multiples versions of what you want, download your favorite results and if you need regenerate new versions with the same description or with a new universe.

Pro-tips : you can use our api to integrate this to your tools
                    </p>
                    
                </details>
                <details className="w-full rounded-lg ">
                    <summary className="px-4 py-6">
                    HOW CAN I REMOVE ORIGINAL IMAGE BACKGROUND WITHOUT COMPLEX EDITOR?

                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                    With our background changer, changing photo backgrounds has never been that easy.

You can change photo background online without any image retouch knowledge. Just drop your original image, and we will detect the subject and apply the background that you want.
                    </p>
                    
                </details>
                <details className="w-full rounded-lg ">
                    <summary className="px-4 py-6">
                    WHAT ELSE CLIPDROP CAN DO?
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                    ClipDrop AI technology, is able to remove backgrounds (background removal) or background transparent, remove unwanted objects, change background color, add backgrounds and of course change backgrounds or add background images.
                    </p>
                    
                </details>
            </div>
        </div>
    </div>
</div>
);
}

    
  


export default SectionWrapper(Feedbacks,"");