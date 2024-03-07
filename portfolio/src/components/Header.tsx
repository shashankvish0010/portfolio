import React, { useState } from 'react'
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import {motion} from 'framer-motion'

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const scrollToSection = (sectionId: string) => {
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
  return (
    <>
      <div className='relative h-[15vh] w-screen p-3 flex flex-row md:justify-evenly justify-between px-10 items-center'>
        <div className='md:text-2xl text-xl logo h-max w-[25vw]'>
          <h1>Shashank <span className='text-indigo-600'>Vishwakarma</span></h1>
        </div>
        <ul className='h-max uppercase w-[30vw] header_list hidden md:flex flex-row justify-around items-center text-sm'>
          <li onClick={() => scrollToSection('home')} className='hover:text-indigo-600 hover:-translate-y-1 transition cursor-pointer'>Home</li>
          <li onClick={() => scrollToSection('about')} className='hover:text-indigo-600 hover:-translate-y-1 transition cursor-pointer'>About Me</li>
          <li onClick={() => scrollToSection('skills')} className='hover:text-indigo-600 hover:-translate-y-1 transition cursor-pointer'>Skills</li>
          <li onClick={() => scrollToSection('projects')} className='hover:text-indigo-600 hover:-translate-y-1 transition cursor-pointer'>Projects</li>
        </ul>
        <div className='md:block hidden h-max w-max'>
          <button onClick={() => scrollToSection('connect')} className='header_list bg-indigo-600 text-white p-2 rounded-full'>Let's Connect</button>
        </div>

        {
          open == true ?
            <motion.div initial={{opacity:0}} animate={{opacity:1,rotate:90}} transition={{behaviour: "smooth"}}
            onClick={() => setOpen(!open)} className='md:hidden block h-max w-max'>
              <Icon icon="oui:cross" height={'2rem'} color='indigo' />
            </motion.div>
            :
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{behaviour: "smooth"}}
            onClick={() => setOpen(!open)} className='md:hidden block h-max w-max'>
              <Icon icon="quill:hamburger" height={'2rem'} color='indigo' />
            </motion.div>
        }

      </div>
      {
        open == true ? 
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{behaviour: "smooth"}}
        className='absolute md:hidden block h-max w-screen bg-indigo-600 items-center p-3'>
        <ul className='h-[25vh] text-white uppercase header_list md:hidden flex flex-col justify-around text-sm'>
          <li onClick={() => scrollToSection('home')} className='cursor-pointer'>Home</li>
          <li onClick={() => scrollToSection('about')} className='cursor-pointer'>About Me</li>
          <li onClick={() => scrollToSection('skills')} className='cursor-pointer'>Skills</li>
          <li onClick={() => scrollToSection('projects')} className='cursor-pointer'>Projects</li>
        </ul>
      </motion.div>
      : null
      }
    </>
  )
}

export default Header