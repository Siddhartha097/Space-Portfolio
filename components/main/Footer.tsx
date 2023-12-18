import React from 'react'
import { RxDiscordLogo, RxGithubLogo, RxInstagramLogo, RxTwitterLogo, RxLinkedinLogo } from 'react-icons/rx';

import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full h-full bg-transparent shadow-lg text-gray-200 p-[15px]'>
        <div className='w-full flex flex-col items-center justify-center m-auto'>
            <div className='flex flex-row w-full h-full items-center justify-around flex-wrap'>
                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'>Community</div>
                    <p className='flex flex-row items-center cursor-pointer my-[15px]'>
                        <FaYoutube />
                        <span className='text-[15px] ml-[6px]'>Youtube</span>
                    </p>
                    <p className='flex flex-row items-center cursor-pointer my-[15px]'>
                        <RxGithubLogo />
                        <span className='text-[15px] ml-[6px]'>Discod</span>
                    </p>
                    <p className='flex flex-row items-center cursor-pointer my-[15px]'>
                        <RxDiscordLogo />
                        <span className='text-[15px] ml-[6px]'>Github</span>
                    </p>
                </div>

                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'>Social Media</div>
                    <p className='flex flex-row items-center cursor-pointer my-[15px]'>
                        <RxInstagramLogo />
                        <span className='text-[15px] ml-[6px]'>Instagram</span>
                    </p>
                    <p className='flex flex-row items-center cursor-pointer my-[15px]'>
                        <RxTwitterLogo />
                        <span className='text-[15px] ml-[6px]'>Twitter</span>
                    </p>
                    <p className='flex flex-row items-center cursor-pointer my-[15px]'>
                        <RxLinkedinLogo />
                        <span className='text-[15px] ml-[6px]'>Linkedin</span>
                    </p>
                </div>

                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'>About</div>
                    <p className='flex flex-row items-center cursor-pointer my-[15px]'>
                        <span className='text-[15px] ml-[6px]'>Hire Me</span>
                    </p>
                    <p className='flex flex-row items-center cursor-pointer my-[15px]'>
                        <span className='text-[15px] ml-[6px]'>Learn About Me</span>
                    </p>
                    <p className='flex flex-row items-center cursor-pointer my-[15px]'>
                        <span className='text-[15px] ml-[6px]'>sidbanerjee26@gmail.com</span>
                    </p>
                </div>

                <div className='mb-[20px] text-[15px] text-center'>
                    &copy;Siddhartha 2023 Inc. All rights reserved
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer