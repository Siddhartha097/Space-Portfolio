import { Socials } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[70px] fixed top-0 left-0 shadow-lg shdaow-[#2a06e1]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
        <div className='h-full w-full flex flex-row items-center justify-between m-auto px-[10px]'>
            <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
                <Image
                    src={'/NavLogo.png'}
                    alt='logo'
                    width={75}
                    height={75}
                    className='cursor-pointer hover:animate-slowspin'
                />

                <span className='font-bold ml-[10px] hidden text-gray-400 md:block'>
                    Siddhartha
                </span>
            </a>

            <div className='w-[300px] md:w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
                <div className='flex text-[10px] md:text-[15px] w-full h-auto items-center justify-between border border-[#7042f861] bg-[#00300145e] mr-[15px] px-[10px] md:px-[20px] py-[10px] rounded-full text-gray-200'>
                    <a href="#about-me" className='cursor-pointer'>About Me</a>
                    <a href="#skills" className='cursor-pointer'>Skills</a>
                    <a href="#projects" className='cursor-pointer'>Projects</a>
                </div>
            </div>

            <div className='flex flex-row gap-4'>
                {Socials.map(social => (
                    <Image
                        src={social.src}
                        alt={social.name}
                        key={social.name}
                        width={25}
                        height={25}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Navbar