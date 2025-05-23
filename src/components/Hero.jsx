import {motion} from 'framer-motion';
import {styles} from '../styles';
import {ComputersCanvas} from './canvas';


const Hero = () => {
  return (
    <section className='relative w-full h-screen
    mx-auto'>
      {/* Line */}
      <div className={`${styles.paddingX} absolute inset-0
      top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        {/* Ball and line */}
        <div className="flex flex-col justify-center items-center mt-5">
          {/* the ball */}
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            {/* line */}
            <div className="w-1 sm:h-80 h-40  
            violet-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className='text-[#ad241c] font-rocksalt'>Sabith
              </span>
          </h1>
          <p className={`${styles.heroSubText}`}>
          Transforming Ideas into Reality <br className='sm:block hidden '/>
          <span className='text-white-100'>WEb deve | UI/UX | Digital Marketing</span>
          </p>
        </div>
      </div>

      <ComputersCanvas/>

      {/* Navigation tool */}
      <div className="absolute xs:bottom-10 bottom-30 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary felx 
          justify-center items-start p-2">
            {/* Dancing ball */}
            <motion.div
              animate={{y: [0, 24, 0]}}
              transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop'}}
              className="w-3 h-3 rounded-full bg-[#915eff] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero