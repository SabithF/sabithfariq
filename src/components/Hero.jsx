import {motion} from 'framer-motion';
import {styles} from '../styles';
import {ComputersCanvas} from './canvas';
import Spline from '@splinetool/react-spline';



const Hero = () => {
  return (
    <section className='h-screen w-full  flex flex-col justify-center items-center  relative overflow-hidden'>
      {/* Line */}
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col  gap-5 translate-y-[-230px] z-10`}>
        {/* Ball and line */}

        {/* <div className="flex flex-col justify-center items-center mt-5">
          
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
           
            <div className="w-1 sm:h-80 h-40  
            violet-gradient"/>
        </div> */}
        
        <div className=''>
          {/* <h1 className={`${styles.hero} font-montserrat text-center`} >
            Hi, I'm <span className='text-[#ad241c] text-[50px] '>Sabith
              </span>
          </h1> */}
          <p className={`${styles.heroSubText} sm:mt-0 -mt-5 font-light text-center`} >
          Let's turn <span className='text-white font-zain font-bold text-[40px] sm:text-[60px]'>Ideas</span>  into <span className='text-white font-zain font-bold text-[40px] sm:text-[60px]'>Reality</span> <br className='sm:block hidden '/>
          {/* <span className='text-white-100'>WEb deve | UI/UX | Digital Marketing</span> */}
          </p>
        </div>
      </div>

      {/* <ComputersCanvas/> */}
      
      {/* Spline 3D model container */}
      
      <div className="absolute inset-0 z-0 -top-20">
        <Spline scene="https://prod.spline.design/MvkbT0NwsPz8fBw4/scene.splinecode" />
      </div> 
     

   
  


      {/* Navigation tool */}
      <div className="absolute bottom-5 w-full flex justify-center items-center">
      <a href="#about">
      <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex 
      justify-center items-start p-2">
        {/* Dancing ball */}
        <motion.div
          animate={{ y: [0, 24, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
          className="w-3 h-3 rounded-full bg-[#915eff] mb-1"
        />
      </div>

      
      </a>
    </div>

    </section>
  )
}

export default Hero



