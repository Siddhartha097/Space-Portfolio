import Image from 'next/image';
import React from 'react'

interface Props  {
    src: string;
    title: string;
    desc: string;
    link: string;
} 

const ProjectCard = ({ src, title, desc, link }: Props) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2a0e61]'>
        <Image 
            src={src}
            alt={title}
            height={1000}
            width={1000}
            className='w-full object-contain'  
        />

        <div className='relative p-4 cursor-pointer'>
            <a href={link} className='text-white text-2xl font-semibold'>{title}</a>
            <p className='mt-2 text-gray-300'>{desc}</p>
        </div>
    </div>
  )
}

export default ProjectCard