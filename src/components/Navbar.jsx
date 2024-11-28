import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-4xl font-bold hidden md:inline hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-700'>Gowsikan T</div>
        <div className='space-x-6'>
          <a href="#home" className='hover:text-green-500'>Home</a>
          <a href="#about" className='hover:text-green-500'>About Me</a>
          <a href="#service" className='hover:text-green-500'>Services</a>
          <a href="#project" className='hover:text-green-500'>Projects</a>
          <a href="#contact" className='hover:text-green-500'>Contact</a>
        </div>
        <button className='bg-gradient-to-r from-green-600 to-green-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
      </div>
    </nav>
  )
}

export default Navbar