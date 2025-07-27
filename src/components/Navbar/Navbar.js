'use client';
import React, {useState, useRef, useEffect} from 'react';
import {MenuIcon, MoveUpRight, Newspaper} from "lucide-react";
import MobileMenu from './MobileMenu';
import Logo from '../Logo/Logo';
import Link from 'next/link';
import AOS from 'aos';
import { useRouter } from 'next/navigation';

function Navbar() {
    const buttonRef = useRef(null);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const route = useRouter();
    const handleShowMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    }

    useEffect(()=>{
        AOS.init();
    }, [])
  return (
    <>
        {/* Navbar */}
        <header className="sticky top-0 px-5 py-4 bg-primary w-full  z-40">
            <nav className='flex  mx-auto max-w-[1200px] gap-4 items-center justify-between text-white'>
                <Logo/>

                <div ref={buttonRef} className='cursor-pointer md:hidden' onClick={handleShowMobileMenu}>
                    <MenuIcon className=" h-6 w-6 text-white cursor-pointer" />
                </div>

                <div className="flex items-center gap-8">
                    <p   className="text-sm text-white animate-pulse">Welcome, How can we assist you today?</p>
                    <div className='md:flex items-center gap-4 hidden'>
                        <Link href='/' className="text-white hover:text-secondary-red transition-colors">Home</Link>
                        <Link href='/about' className="text-white hover:text-secondary-red transition-colors">About Us</Link>
                        <Link href='/services' className="text-white hover:text-secondary-red transition-colors">Services</Link>
                        <Link href='/contact' className="text-white hover:text-secondary-red transition-colors">Contact Us</Link>
                        <Link href='/blog' className="text-white hover:text-secondary-red transition-colors">Blog</Link>
                    </div>
                    
                </div>
                <div className="flex items-center space-x-2">
                    <Newspaper className="h-6 w-6 text-white" />
                    <button onClick={()=>route.push('/blog')} className="hover:bg-black/50 transition-colors text-white cursor-pointer p-2 bg-black rounded-full">
                        <MoveUpRight className="h-4 w-4 text-white" />
                    </button>
                </div>
            </nav>

            <MobileMenu buttonRef={buttonRef} setShowMenu={setShowMobileMenu} showMenu={showMobileMenu} />
        </header>
    </>
  )
}

export default Navbar