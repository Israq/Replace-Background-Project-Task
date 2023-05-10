import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { styles } from '../styles';

import { technologies } from "../constants";

const Rewards = () => {
  return (
   <section id="rewards" className="max-w-8xl px-6 flex flex-wrap w-full max-widht justify-between gap-10 mt-8">
    <div className="flex-1 flex flex-wrap min-w-[250px] flex-col gap-1 items-center justify-start text;black dark:text-white">
      <div className="flex justify-center items-center gap-4">
        <div className="w-auto flex flex-col gap-1 justify-center items-center text-center">
          <h2  className={styles.sectionHeadText}>
            15M
          </h2>
            <p className={styles.sectionSubText}>Users</p>

        </div>

      </div>
    </div>
    <div className="flex-1 flex flex-wrap min-w-[250px] flex-col gap-1 items-center justify-start text;black dark:text-white">
      <div className="flex justify-center items-center gap-4">
        <div className="w-auto flex flex-col gap-1 justify-center items-center text-center">
          
         </div>
          <svg height={45} viewBox="0 0 20 36"
          fill="none" className="opacity-50" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.2818 0.500016C18.5644 0.500016 16.4554 0.849468 14.9972 1.63669C14.268 2.02982 13.6907 2.53428 13.367 3.19371C13.1242 3.68784 13.0318 4.25853 13.0883 4.83479C13.0888 4.84184 13.0874 4.84888 13.0883 4.85593C12.5315 5.26786 12.0025 5.71971 11.5013 6.20253C11.6195 5.28849 11.5386 4.39564 11.2868 3.61454C10.6553 1.65782 8.90835 0.243525 6.91144 0.542209C6.8899 0.541269 6.86835 0.541269 6.84681 0.542209C6.60503 0.603269 6.41593 0.788802 6.35369 1.02599C5.82849 2.88555 5.64609 4.86632 5.94627 6.60227C6.22442 8.21148 6.97895 9.65488 8.34825 10.3692C7.74932 11.4683 7.2471 12.6285 6.89 13.8413C6.60418 12.9629 6.14792 12.2165 5.5385 11.6736C4.81701 11.0306 3.89396 10.6737 2.96469 10.6215C2.03542 10.5698 1.07931 10.8249 0.26255 11.4421C0.0590719 11.6041 -0.0323594 11.8653 0.0265197 12.1156C0.425326 13.8883 1.08075 15.505 2.08569 16.7027C3.09013 17.9009 4.48951 18.681 6.18198 18.681C6.18198 19.9699 6.34475 21.232 6.65404 22.4475C6.30647 22.1774 5.9426 21.9247 5.56007 21.7528C5.14211 21.5654 4.69639 21.4381 4.2516 21.3954C2.91824 21.2676 1.50252 21.8054 0.219531 22.9736C-0.0260721 23.1967 -0.0710771 23.5616 0.112289 23.8364C1.07747 25.2413 2.19058 26.586 3.67286 27.3925C5.10439 28.1713 6.89919 28.3657 8.97038 27.6029C9.50802 28.4066 10.1333 29.1651 10.7935 29.8753C9.75028 29.5103 8.74388 29.3656 7.79071 29.4756C5.84503 29.6996 4.2766 31.0819 3.47994 33.3896C3.37174 33.7141 3.5283 34.0669 3.84428 34.2101C5.49606 34.9509 7.24821 35.5685 9.0565 35.4939C10.8379 35.4201 12.6352 34.623 14.2041 32.7583C15.4825 33.6024 16.8583 34.2999 18.3004 34.7992C18.4747 34.8622 18.6667 34.8546 18.8347 34.7776C19.0028 34.7011 19.1325 34.5616 19.1952 34.3906C19.2579 34.2196 19.2488 34.0313 19.1694 33.8669C19.0899 33.7025 18.9472 33.5761 18.7725 33.516C16.8818 32.8612 15.1219 31.8491 13.5607 30.57C14.9793 29.5381 16.3232 28.222 17.1208 26.5508C17.9395 24.8364 18.1315 22.7486 17.2496 20.4485C17.1323 20.1516 16.8192 19.9759 16.4989 20.0276C16.4477 20.0361 16.3969 20.0501 16.3491 20.0694C13.8591 21.1441 12.0637 22.7589 11.3087 24.6569C10.8529 25.802 10.8127 27.0487 11.2014 28.2553C8.96135 25.5725 7.55519 22.2244 7.55519 18.681C7.57674 18.6749 7.59828 18.6678 7.61935 18.6598C9.36108 18.4729 11.3231 18.138 13.003 17.1868C14.683 16.2357 16.0699 14.6194 16.4774 12.1366C16.5081 11.9544 16.4612 11.7679 16.3477 11.6209C16.2342 11.4734 16.0638 11.3785 15.8771 11.3579C13.2166 11.0643 10.9645 11.4715 9.35686 12.6204C9.03848 12.8478 8.75889 13.1366 8.49893 13.4203C9.55746 10.4297 11.4414 7.76793 13.8826 5.95021C16.2917 6.89572 18.4141 6.6045 19.8666 5.5923C21.3785 4.53876 22.1727 2.79099 21.9683 1.08931C21.9247 0.75066 21.6294 0.49766 21.2818 0.500016Z" fill="currentcolor"></path>
          </svg>
          <h2  className={styles.sectionHeadText}>
            1st
              </h2>
            
            <svg height={45} viewBox="0 0 22 36"
          fill="none" className="opacity-50" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.718174 0.500016C3.43563 0.500016 5.54456 0.849468 7.00281 1.63669C7.73196 2.02982 8.30933 2.53428 8.63302 3.19371C8.87575 3.68784 8.96815 4.25853 8.91165 4.83479C8.91117 4.84184 8.91261 4.84888 8.91165 4.85593C9.46845 5.26786 9.99748 5.71971 10.4987 6.20253C10.3805 5.28849 10.4614 4.39564 10.7132 3.61454C11.3447 1.65782 13.0916 0.243525 15.0886 0.542209C15.1101 0.541269 15.1316 0.541269 15.1532 0.542209C15.395 0.603269 15.5841 0.788802 15.6463 1.02599C16.1715 2.88555 16.3539 4.86632 16.0537 6.60227C15.7756 8.21148 15.021 9.65488 13.6518 10.3692C14.2507 11.4683 14.7529 12.6285 15.11 13.8413C15.3958 12.9629 15.8521 12.2165 16.4615 11.6736C17.183 11.0306 18.106 10.6737 19.0353 10.6215C19.9646 10.5698 20.9207 10.8249 21.7374 11.4421C21.9409 11.6041 22.0324 11.8653 21.9735 12.1156C21.5747 13.8883 20.9192 15.505 19.9143 16.7027C18.9099 17.9009 17.5105 18.681 15.818 18.681C15.818 19.9699 15.6552 21.232 15.346 22.4475C15.6935 22.1774 16.0574 21.9247 16.4399 21.7528C16.8579 21.5654 17.3036 21.4381 17.7484 21.3954C19.0818 21.2676 20.4975 21.8054 21.7805 22.9736C22.0261 23.1967 22.0711 23.5616 21.8877 23.8364C20.9225 25.2413 19.8094 26.586 18.3271 27.3925C16.8956 28.1713 15.1008 28.3657 13.0296 27.6029C12.492 28.4066 11.8667 29.1651 11.2065 29.8753C12.2497 29.5103 13.2561 29.3656 14.2093 29.4756C16.155 29.6996 17.7234 31.0819 18.5201 33.3896C18.6283 33.7141 18.4717 34.0669 18.1557 34.2101C16.5039 34.9509 14.7518 35.5685 12.9435 35.4939C11.1621 35.4201 9.3648 34.623 7.79587 32.7583C6.51755 33.6024 5.14166 34.2999 3.69959 34.7992C3.52532 34.8622 3.33333 34.8546 3.16529 34.7776C2.99724 34.7011 2.8675 34.5616 2.80478 34.3906C2.74207 34.2196 2.75116 34.0313 2.83064 33.8669C2.91011 33.7025 3.05278 33.5761 3.22753 33.516C5.11818 32.8612 6.87806 31.8491 8.43926 30.57C7.02072 29.5381 5.67682 28.222 4.87918 26.5508C4.0605 24.8364 3.86852 22.7486 4.75039 20.4485C4.86769 20.1516 5.1808 19.9759 5.50109 20.0276C5.55232 20.0361 5.60306 20.0501 5.65094 20.0694C8.14093 21.1441 9.93635 22.7589 10.6913 24.6569C11.1471 25.802 11.1873 27.0487 10.7986 28.2553C13.0386 25.5725 14.4448 22.2244 14.4448 18.681C14.4233 18.6749 14.4017 18.6678 14.3807 18.6598C12.6389 18.4729 10.6769 18.138 8.99697 17.1868C7.31701 16.2357 5.93009 14.6194 5.52257 12.1366C5.49193 11.9544 5.53885 11.7679 5.65231 11.6209C5.76578 11.4734 5.93622 11.3785 6.12293 11.3579C8.78339 11.0643 11.0355 11.4715 12.6431 12.6204C12.9615 12.8478 13.2411 13.1366 13.5011 13.4203C12.4425 10.4297 10.5586 7.76793 8.11739 5.95021C5.7083 6.89572 3.58588 6.6045 2.13339 5.5923C0.621462 4.53876 -0.172739 2.79099 0.0316944 1.08931C0.0752621 0.75066 0.370586 0.49766 0.718174 0.500016Z" fill="currentcolor"></path>
          
          </svg>
          
        </div>
        <p className={styles.sectionSubText}>Product of the day</p>
        <p className={styles.sectionSubText}>Product Hunt, Dec. 23rd 2022

</p>



      
     
    </div>
    <div className="flex-1 flex flex-wrap min-w-[250px] flex-col gap-1 items-center justify-start text;black dark:text-white">
      <div className="flex justify-center items-center gap-4">
        <div className="w-auto flex flex-col gap-1 justify-center items-center text-center">
          <h2  className={styles.sectionHeadText}>
            100M
          </h2>
            <p className={styles.sectionSubText}>Images processed</p>

        </div>

      </div>
    </div>
    <div className="w-full mb-6 flex flex-col items-center justify-center mt-16">
      <div className="max-w-[850px] w-full py-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 uppercase text-center mb-12">Use-cases</h2>
        <div className="flex gap-3 flex-col h-[700px] md:h-[900px]">
          <div className="flex flex-col gap-6">
            <div className="flex gap-3 flex-wrap flex-row justify-center">
              <button className="transition-all select-none h-10 flex items-center justify-center rounded-xl text-sm font-semibold gap-1.5 disabled:text-gray-500 dark:disabled:text-gray-500 bg-primary-200 text-primary-700 hover:bg-primary-300 disabled:bg-gray-300 dark:bg-primary-700 dark:text-primary-200 dark:hover:bg-primary-600 dark:disabled:bg-gray-700 py-3 px-5">Photographers</button>
              <button className="transition-all select-none h-10 flex items-center justify-center rounded-xl text-sm font-semibold gap-1.5 disabled:text-gray-500 dark:disabled:text-gray-500 bg-primary-200 text-primary-700 hover:bg-primary-300 disabled:bg-gray-300 dark:bg-primary-700 dark:text-primary-200 dark:hover:bg-primary-600 dark:disabled:bg-gray-700 py-3 px-5">Creative Agency</button>

              <button className="transition-all select-none h-10 flex items-center justify-center rounded-xl text-sm font-semibold gap-1.5 disabled:text-gray-500 dark:disabled:text-gray-500 bg-primary-200 text-primary-700 hover:bg-primary-300 disabled:bg-gray-300 dark:bg-primary-700 dark:text-primary-200 dark:hover:bg-primary-600 dark:disabled:bg-gray-700 py-3 px-5">Pack Shot</button>
              <button className="transition-all select-none h-10 flex items-center justify-center rounded-xl text-sm font-semibold gap-1.5 disabled:text-gray-500 dark:disabled:text-gray-500 bg-primary-200 text-primary-700 hover:bg-primary-300 disabled:bg-gray-300 dark:bg-primary-700 dark:text-primary-200 dark:hover:bg-primary-600 dark:disabled:bg-gray-700 py-3 px-5">Selfie</button>

            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-col flex-wrap">
            <div className="w-full h-full -translate-x-0 duration-700" translate="X(-0%)">
              <div className="h-full flex flex-col justify-start">
                <p className="text-base font-medium text-gray-600 dark:text-gray-400 text-center my-8 mx-2" >Teleport your models anywhere, in one click. You don't need Photoshop to make impressive shoots anymore.</p>
                <div className="self-center h-[250px] md:h-[500px] w-[250px] md:w-[500px]">
                  <img src="https://static.clipdrop.co/web/replace-background/use-cases/Photo.jpg" className="position: absolute; object-fit: contain; border-radius: 0.75rem; opacity: 1;"/>
                </div>
                <p className="text-base font-medium text-gray-600 dark:text-gray-400 my-6 text-center mt-2 mb-6 italic px-6">A blurry desert background</p>
                 <div className="flex flex-wrap gap-6 w-full justify-center item-center px-6">
                <button className="h-14 w-14 md:h-24 md:w-24 overflow-hidden rounded-lg transition-all duration-100 border-solid border-primary-500 hover:border-2 hover:saturate-150 border-4 saturate-150 ">
                <div>
                  <img loading:lazy   className="color:transparent; width:100%; height:auto; width:64; decoding:async; data-nimg:1; " src="https://static.clipdrop.co/web/replace-background/use-cases/Photo.jpg"/>
                </div>
                </button>
                <button className="h-14 w-14 md:h-24 md:w-24 overflow-hidden rounded-lg transition-all duration-100 border-solid border-primary-500 hover:border-2 hover:saturate-150 border-4 saturate-150">
                <div>
                  <img loading:lazy   className="color:transparent; width:100%; height:auto; width:64; decoding:async; data-nimg:1; " src="https://static.clipdrop.co/web/replace-background/use-cases/Photo_2.jpg"/>
                </div>
                </button>
                <button className="h-14 w-14 md:h-24 md:w-24 overflow-hidden rounded-lg transition-all duration-100 border-solid border-primary-500 hover:border-2 hover:saturate-150 border-4 saturate-150">
                <div>
                  <img loading:lazy   className="color:transparent; width:100%; height:auto; width:64; decoding:async; data-nimg:1; " src="https://static.clipdrop.co/web/replace-background/use-cases/Photo_3.jpg"/>
                </div>
                </button>
                <button className="h-14 w-14 md:h-24 md:w-24 overflow-hidden rounded-lg transition-all duration-100 border-solid border-primary-500 hover:border-2 hover:saturate-150 border-4 saturate-150">
                <div>
                  <img loading:lazy   className="color:transparent; width:100%; height:auto; width:64; decoding:async; data-nimg:1; " src="https://static.clipdrop.co/web/replace-background/use-cases/Photo_2.jpg"/>
                </div>
                </button>
                
                 </div>
              </div>
            </div>
            <div className="w-full h-full transition-transform duration-700 -translate-x-0">
              <div className="h-full flex flex-col justify-start">
                <p className="text-base font-medium text-gray-600 dark:text-gray-400 text-center my-8 mx-2">
                Create as many concepts as you want for your products or your clients.  Your only limit is your imagination. 
                </p>
                <div className="self-center h-[250px] md:h-[500px] w-[250px] md:w-[500px]">
                    <img className="position: absolute; object-fit: contain; border-radius: 0.75rem; opacity: 1" src="https://static.clipdrop.co/web/replace-background/use-cases/Concept.jpg"
                    />
                </div>
                 <p className="text-base font-medium text-gray-600 dark:text-gray-400 my-6 text-center mt-2 mb-6 italic px-6">Original</p>
                    <div className="flex flex-wrap gap-6 w-full justify-center item-center px-6">
                      <button className="h-14 w-14 md:h-24 md:w-24 overflow-hidden rounded-lg transition-all duration-100 border-solid border-primary-500 hover:border-2 hover:saturate-150 border-4 saturate-150">
                        <div>
                        <img loading:lazy   className="color:transparent; width:100%; height:auto; width:64; decoding:async; data-nimg:1; " src="https://static.clipdrop.co/web/replace-background/use-cases/Concept.jpg"/>
                        </div>
                      </button>
                      <button className="h-14 w-14 md:h-24 md:w-24 overflow-hidden rounded-lg transition-all duration-100 border-solid border-primary-500 hover:border-2 hover:saturate-150 border-4 saturate-150">
                        <div>
                        <img loading:lazy   className="color:transparent; width:100%; height:auto; width:64; decoding:async; data-nimg:1; " src="https://static.clipdrop.co/web/replace-background/use-cases/Concept.jpg"/>
                        </div>
                      </button>
                      <button className="h-14 w-14 md:h-24 md:w-24 overflow-hidden rounded-lg transition-all duration-100 border-solid border-primary-500 hover:border-2 hover:saturate-150 border-4 saturate-150">
                        <div>
                        <img loading:lazy   className="color:transparent; width:100%; height:auto; width:64; decoding:async; data-nimg:1; " src="https://static.clipdrop.co/web/replace-background/use-cases/Concept.jpg"/>
                        </div>
                      </button>
                      <button className="h-14 w-14 md:h-24 md:w-24 overflow-hidden rounded-lg transition-all duration-100 border-solid border-primary-500 hover:border-2 hover:saturate-150 border-4 saturate-150">
                        <div>
                        <img loading:lazy   className="color:transparent; width:100%; height:auto; width:64; decoding:async; data-nimg:1; " src="https://static.clipdrop.co/web/replace-background/use-cases/Concept.jpg"/>
                        </div>
                      </button>
                    </div>
                 
              </div>
            </div>
            <div className="w-full h-full transition-transform duration-700 -translate-x-0">
              <div className="h-full flex flex-col justify-start">
                <p className="text-base font-medium text-gray-600 dark:text-gray-400 text-center my-8 mx-2">
                Create as many concepts as you want for your products or your clients.  Your only limit is your imagination. 
                </p>
                <div className="self-center h-[250px] md:h-[500px] w-[250px] md:w-[500px]">
                    <img className="position: absolute; object-fit: contain; border-radius: 0.75rem; opacity: 1" src="https://static.clipdrop.co/web/replace-background/use-cases/Concept.jpg"
                    />
                </div>
                 <p className="text-base font-medium text-gray-600 dark:text-gray-400 my-6 text-center mt-2 mb-6 italic px-6">Original</p>
                    <div className="flex flex-wrap gap-6 w-full justify-center item-center px-6">
                      <button className="h-14 w-14 md:h-24 md:w-24 overflow-hidden rounded-lg transition-all duration-100 border-solid border-primary-500 hover:border-2 hover:saturate-150 border-4 saturate-150">
                        <div>
                        <img loading:lazy   className="color:transparent; width:100%; height:auto; width:64; decoding:async; data-nimg:1; " src="https://static.clipdrop.co/web/replace-background/use-cases/Concept.jpg"/>
                        </div>
                      </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
</section>   
  
   
  )
}

export default  Rewards;