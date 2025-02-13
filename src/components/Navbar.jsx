import React, {useEffect, useState} from 'react';
// to navigate between pages
import {Link} from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close} from '../assets';



const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between item-center max-w-7xl mx-auto">
        <Link
          to="/" 
          className="flex items-center gap-2" 
          onClick={() => 
            {setActive(""); 
            window.scrollTo(0,0)
          //keep track of where we are on the page
        }} >

          {/* Logo */}
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          {/* Logo text */}
          <p className="text-white text-[18px] font-bold cursor-pointer">Sabith Fariq <span className='sm:block hidden text-[14px]'>| Personal Portfoio</span></p>
          
        
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) => (
            <li>
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))

          }
        </ul>

      </div>

    </nav>
  )
}

export default Navbar