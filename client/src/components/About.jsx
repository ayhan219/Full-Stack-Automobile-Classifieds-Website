import React from 'react'

const About = () => {
  return (
    <div className='w-full h-[50vh] bg-white flex justify-center flex-col pt-48 items-center'>
          <div className='text-[#1F2B59] text-5xl font-extrabold text-center'>
                <h2>How Does It Work?</h2>
            </div>
        <div className='w-[70%] h-[80vh] '>
          
            <div className='w-full h-[80%] flex pt-32'>
                <div className='w-full h-full '>
                   <img className='w-full h-44 object-contain' src="https://carvago.com/images/how-it-works-1-2x.webp" alt="" />
                   <h3 className='text-[#1F2B59] text-3xl font-bold'>Choose anywhere in Europe</h3>
                   <p className='text-[#31406F]'>No more compromises! With us, you have an unrivaled selection of cars in one place.</p>
                </div>
                <div className='w-full h-full'>
                <img className='w-full h-44 object-contain' src="https://carvago.com/images/how-it-works-2-2x.webp" alt="" />
                   <h3 className='text-[#1F2B59] text-3xl font-bold'>Choose anywhere in Europe</h3>
                   <p className='text-[#31406F]'>No more compromises! With us, you have an unrivaled selection of cars in one place.</p>
                   </div>
                   <div className='w-full h-full'>
                <img className='w-full h-44 object-contain' src="https://carvago.com/images/how-it-works-3-2x.webp" alt="" />
                   <h3 className='text-[#1F2B59] text-3xl font-bold'>Choose anywhere in Europe</h3>
                   <p className='text-[#31406F]'>No more compromises! With us, you have an unrivaled selection of cars in one place.</p>
                   </div>
            </div>
        </div>
    </div>
  )
}

export default About