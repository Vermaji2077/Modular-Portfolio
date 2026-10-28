import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black px-5 lg:px-28 py-3 lg:py-6 flex items-center justify-between mt-16'>
      <img className='invert h-10 lg:h-[72px] object-contain' src="/assets/logo.png" alt="Logo" />

      <div className='text-white lg:font-semibold lg:text-sm font-normal text-[10px] text-right lg:space-y-3'>
        <p>© Nishant Verma</p>
      </div>
    </div>
  )
}
