import React from 'react'
import { BsInstagram, BsFacebook, BsLinkedin } from 'react-icons/bs';


export const Footer = () => {
  return (
    <div className="
    py-8  w-full 
    flex justify-center items-center
    gap-8
    ">
        <span><BsInstagram className='w-8 h-8 text-lightk cursor-pointer
        hover:text-primaryDark hover:translate-y-[-3px] transition-all duration-150 ease
        ' /></span>
        <span><BsFacebook className='w-8 h-8 text-light cursor-pointer
        hover:text-primaryDark hover:translate-y-[-3px] transition-all duration-150 ease
        ' /></span>
        <span><BsLinkedin className='w-8 h-8 text-light cursor-pointer
        hover:text-primaryDark hover:translate-y-[-3px] transition-all duration-150 ease
        ' /></span>
    </div>
  )
}
