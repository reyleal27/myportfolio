'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from "react-icons/fa";
const socials = [
    {
        title: "linkedin",
        href: "https://www.linkedin.com/in/reylealdev",
        icon: <FaLinkedin/>
    },
     {
        title: "github",
        href: "https://github.com/reyleal27",
        icon: <FaGithubSquare/>
    },
]

const Navbar = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
  return (  
     <div className="w-full h-[65px] fixed top-0 shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full m-auto px-[10px] flex items-center justify-between">
        
        <a href="/" className="flex flex-row h-auto w-auto items-center">
          <Image src="/Vincent.png" alt="logo" width={30} height={30} className="rounded-full hover:animate-spin" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 ml-2 cursor-pointer hover:animate-bounce text-2xl">Vincent</span>
        </a>

        {/* Navbar Links (For Desktop) */}
        <div className="w-auto h-auto hidden md:flex flex-row items-center justify-center">
          <div className="flex items-center justify-between border w-[250px] md:w-[350px] lg:w-[400px] border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] gap-6 rounded-full text-gray-200">
            <a href="/about" className="cursor-pointer hover:text-purple-400">About Me</a>
            <a href="/#skills" className="cursor-pointer hover:text-purple-400">Skills</a>
            <a href="/projects" className="cursor-pointer hover:text-purple-400">Projects</a>
          </div>
              </div>
              
                <div className="md:flex gap-3 items-center hidden justify-center mt-4">
            {socials.map((item, index) => (
              <Link href={item.href} key={index} className="text-white text-4xl hover:text-purple-600 rounded-full" target='_blank'  rel="noopener noreferrer">
                {item.icon}
              </Link>
            ))}
          </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#000000] p-4 absolute top-[65px] left-0 w-full text-slate-100`}>
        <div className="flex flex-col items-center gap-4">
          <a href="/about" className="cursor-pointer hover:text-purple-400">About Me</a>
          <a href="/#skills" className="cursor-pointer hover:text-purple-400">Skills</a>
          <a href="/projects" className="cursor-pointer hover:text-purple-400">Projects</a>
          
          {/* Social Icons for Mobile */}
          <div className="flex gap-3 items-center justify-center mt-4">
            {socials.map((item, index) => (
              <Link href={item.href} key={index} className="text-white text-4xl  hover:text-purple-600">
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default  Navbar