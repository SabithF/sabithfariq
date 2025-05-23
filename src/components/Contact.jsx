import {useState, useRef} from 'react';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  // Loading 
  const [loading, setLoading] = useState(false);

  // Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Email JS
    emailjs.send(
      'service_74u2zia',
      'template_pggx4lc',
      {
        from_name: form.name,
        to_name: 'Sabith Fariq',
        from_email: form.email,
        to_email: 'sabithfariq@gmail.com',
        message: form.message,
      },
      'j2Jq4Aba-VrOu772f'

    )
    .then(() =>{
      setLoading(false);
      alert('Thank you. I will get back to you soon.');
      setForm({
        name: '',
        email: '',
        message: '',
      });

    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong.');
    }
    )
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse 
    flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Talk to me</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">
            {/* Name */}
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Name</span>
                <input type="text" 
                      name="name" 
                      value={form.name} 
                      onChange={handleChange} 
                      placeholder="What's your name?" 
                      className='bg-tertiary py-4 px-6 
                              placeholder:text-secondary 
                              text-white rounded-lg outlined-none border-none font-medium' />

              </label>
              {/* Email */}
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Email</span>
                <input type="email" 
                      name="email" 
                      value={form.email} 
                      onChange={handleChange} 
                      placeholder="What's your email?" 
                      className='bg-tertiary py-4 px-6 
                              placeholder:text-secondary 
                              text-white rounded-lg outlined-none border-none font-medium' />

              </label>
              {/* Message */}
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Message</span>
                <textarea 
                      rows="7" 
                      name="message" 
                      value={form.message} 
                      onChange={handleChange} 
                      placeholder="Type your message here..." 
                      className='bg-tertiary py-4 px-6 
                              placeholder:text-secondary 
                              text-white rounded-lg outlined-none border-none font-medium' />

              </label>
              <button
                type="submit"
                className='bg-tertiary py-4 px-8 outline-none text-white font-bold shadow-md shadow-primary rounded-xl' >
                  {loading ? 'Submitting...' : 'Submit'}
              </button>
        </form>
      </motion.div> 
      {/* Earth model */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <EarthCanvas />
          </motion.div>
      </div>
  )
}

export default SectionWrapper(Contact, "contact");