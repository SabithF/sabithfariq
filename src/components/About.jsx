import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { services }  from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { p, section } from 'framer-motion/client'
import {SectionWrapper} from '../hoc'

const ServiceCard = ({index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className= "w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        {/* titlt option */}
        <div 
          options={{
            max:25,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12
          min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title} 
            className='w-16 h-16 object-contain' />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

        </div>


        
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          About Me </h2>

      </motion.div>
      <motion.p 
        variants={fadeIn("","", 0.1,1)}
        className='mt-4 text-secondary text-[17px] 
        max-w-auto leading-[30px]'
        >
          I am a software engineer with a passion for web development and design. I have experience in building web applications using modern web technologies. I am proficient in React, Node.js, Express, and MongoDB. I am also familiar with Python, Django, and Flask. I am a quick learner and I am always looking to learn new technologies and improve my skills. I am passionate about building high-quality web applications that are user-friendly and accessible. I am also interested in UI/UX design and I enjoy creating visually appealing and intuitive user interfaces. I am a team player and I work well with others. I am a good communicator and I am able to work effectively in a fast-paced environment. I am a problem solver and I am able to think creatively and come up with innovative solutions to complex problems. I am a hard worker and I am dedicated to delivering high-quality work on time. I am looking for new opportunities to work on exciting projects and collaborate with talented individuals
        
      </motion.p>

      {/* cards */}

      <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about")