import React from 'react'

const Header: React.FC = () => {
  return (
    <div className='h-[15vh] w-screen p-3 flex flex-row justify-evenly items-center'>
      <div className='text-2xl logo h-max w-[25vw]'>
        <h1>Shashank</h1>
        <span className='text-indigo-600 text-xl ml-10'>Vishwakarma</span>
      </div>
      <ul className='h-max uppercase w-[30vw] header_list hidden md:flex flex-row justify-around items-center text-sm'>
        <li className='hover:text-indigo-600 hover:-translate-y-1 transition cursor-pointer'>Home</li>
        <li className='hover:text-indigo-600 hover:-translate-y-1 transition cursor-pointer'>About Me</li>
        <li className='hover:text-indigo-600 hover:-translate-y-1 transition cursor-pointer'>Projects</li>
      </ul>
      <div className='h-max w-max'>
        <button className='header_list bg-indigo-600 text-white p-2 rounded-full'>Let's Connect</button>
      </div>
    </div>
  )
}

export default Header