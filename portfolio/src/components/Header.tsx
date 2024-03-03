import React from 'react'

const Header: React.FC = () => {
  return (
    <div className='h-[15vh] w-screen p-3 flex flex-row justify-evenly items-center'>
      <div className='logo h-max w-max'>
        <h1 className='text-2xl'>Shashank <span className='text-indigo-600'>Vishwakarma</span></h1>
      </div>
      <ul className='h-max w-[30vw] header_list hidden md:flex flex-row justify-between items-center text-base'>
        <li>Home</li>
        <li>About Me</li>
        <li>Projects</li>
      </ul>
      <div className='h-max w-max'>
        <button className='header_list bg-indigo-600 text-white p-2 rounded-full'>Let's Connect</button>
      </div>
    </div>
  )
}

export default Header