import React, {useEffect, useState} from 'react';
// to navigate between pages
import {Link} from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close} from '../assets';



const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 `}>
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
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Sabith Fariq &nbsp; 
            <span className='sm:block hidden text-[14px]'>
            | Personal Portfolio</span>
          </p>
          
        
        </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((Link) => (
              <li key={Link.id}
                  className={`${active === Link.title ? "text-white" : "text-secondary"}
                  hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={()=> setActive(Link.title)}>
                <a href={`#${Link.id}`}>{Link.title}</a>
              </li>
            ))

            }
          </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer">
          <img 
          // if toggle is true, show close icon, else show menu icon
            src={toggle ? close : menu} 
            alt="menu" 
            className='w-[28px] h-[28px]'
            onClick={() => setToggle(!toggle)} />

            {/* Menu */}
            <div className={`${!toggle ? 'hidden' 
            : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] 
            z-10 rounded-xl`}>
              
              <ul className="list-none flex justify-center items-start flex-col gap-4">
              {navLinks.map((Link) => (
                <li key={Link.id}
                    className={`${active === Link.title 
                      ? "text-white" 
                      : "text-secondary"}
                    font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={()=> {
                      setToggle(!toggle);
                      setActive(Link.title);
                    }}>
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))

              }
          </ul>
            </div>
        </div>



      </div>

    </nav>
  )
}

export default Navbar