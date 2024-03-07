import React from 'react'

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    if(sectionId){
      const section = document.getElementById(sectionId);
      if(section){
        section.scrollIntoView({behavior: 'smooth'})
      }
    }
  }
  return (
    <div className='h-[15vh] w-screen p-3 flex flex-row justify-evenly items-center'>
      <div className='text-2xl logo h-max w-[25vw]'>
        <h1>Shashank <span className='text-indigo-600'>Vishwakarma</span></h1>
      </div>
      <ul className='h-max uppercase w-[30vw] header_list hidden md:flex flex-row justify-around items-center text-sm'>
        <li onClick={()=>scrollToSection('home')} className='hover:text-indigo-600 hover:-translate-y-1 transition cursor-pointer'>Home</li>
        <li onClick={()=>scrollToSection('about')} className='hover:text-indigo-600 hover:-translate-y-1 transition cursor-pointer'>About Me</li>
        <li onClick={()=>scrollToSection('skills')} className='hover:text-indigo-600 hover:-translate-y-1 transition cursor-pointer'>Skills</li>
        <li  className='hover:text-indigo-600 hover:-translate-y-1 transition cursor-pointer'>Projects</li>
      </ul>
      <div className='h-max w-max'>
        <button onClick={()=>scrollToSection('connect')} className='header_list bg-indigo-600 text-white p-2 rounded-full'>Let's Connect</button>
      </div>
    </div>
  )
}

export default Header