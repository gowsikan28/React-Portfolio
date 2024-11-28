import React from 'react'
import HeroImage from '../assets/Gowsikan.jfif'

const Hero = () => {
  return (
    <div className='bg-antiquewhite text-black text-center py-16'>
      <img src={HeroImage} alt=""
        className='mx-auto mb-8 w-48 h-60 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105 '/>
      <h1 className='text-4xl font-bold'>
        I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700'>Gowsikan</span>
        , Full-Stack Developer
      </h1>
      <p className='mt-4 text-lg text-gray-900'>
        I specialize in building modern and responsive web applications.
      </p>
      <div className='mt-8 space-x-4'>
        <button
          className='bg-gradient-to-r from-green-700 to-green-600 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
        <button
          className='bg-gradient-to-r from-violet-700 to-blue-600 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
      </div>

    </div>
  )
}

export default Hero