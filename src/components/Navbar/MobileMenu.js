'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Contact2Icon, MailIcon, Dot, HomeIcon, InfoIcon, MenuIcon, MoveUpRight, Newspaper, ToolCaseIcon } from "lucide-react";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { FaBlog, FaWhatsapp } from "react-icons/fa6";

const MobileMenu = ({showMenu, setShowMenu, buttonRef})=>{
  const menuRef = useRef(null);

  const handleHideMenuOption = ()=>{
    setTimeout(()=>{
      setShowMenu(false)
    }, 3000)
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };

  }, [setShowMenu, menuRef, buttonRef]);

  return(
    <motion.div initial={{ opacity: 0 , y:-100}} animate={{ opacity: showMenu ? 1 : 0 , y:showMenu?0:-100}}  className={`absolute z-[40] w-full h-full top-[100%] left-0 bg-black/80 ${showMenu ? 'block' : 'hidden'}`}>
      <div ref={menuRef} className="flex shadow-md flex-col gap-4 py-4 bg-white w-full px-5">
        <Link onClick={handleHideMenuOption} href={'/'} className="flex items-center gap-2">
          <HomeIcon size={24} className="h-6 w-6 text-primary" />
          <span className="">Home</span>
        </Link>

        <Link onClick={handleHideMenuOption} href={'/about'} className="flex items-center gap-2">
          <InfoIcon size={24} className="h-6 w-6 text-primary" />
          <span className="">About Us</span>
        </Link>

        <Link onClick={handleHideMenuOption} href={'/services'} className="flex items-center gap-2">
          <ToolCaseIcon size={24} className="h-6 w-6 text-primary" />
          <span className="">Services</span>
        </Link>

        <Link onClick={handleHideMenuOption} href={'/contact'} className="flex items-center gap-2">
          <Contact2Icon size={24} className="h-6 w-6 text-primary" />
          <span className="">Contact Us</span>
        </Link>

        <Link onClick={handleHideMenuOption} href={'/team'} className="flex items-center gap-2">
          <FaBlog size={24} className="h-6 w-6 text-primary" />
          <span className="">Blog</span>
        </Link>

        <hr className="my-4 border-t border-gray-200" />

        <div className="w-full overflow-x-auto flex items-center justify-between">
          <Link className="text-sm" onClick={handleHideMenuOption} href='mailto:info@risteelroofing.com'> <MailIcon size={24} className='text-primary'/> info@risteelroofing.com</Link>
          <Link className='text-sm' onClick={handleHideMenuOption} href='https://wa.me/265889397498'> <FaWhatsapp size={24} className='text-primary'/> +265 981 56 78 68</Link>
        </div>

      </div>
    </motion.div>
  )
}

export default MobileMenu;