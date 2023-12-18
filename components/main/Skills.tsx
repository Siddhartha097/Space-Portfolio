import { Backend_skill, Frontend_skill, Full_stack, Other_skill } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
  return (
    <section
        className='flex flex-col justify-center items-center gap-4 h-full relative overflow-hidden py-20'
        id='skills' 
        style={{transform: 'scale(0.9)'}}
    >
        <SkillText />
        <div className='flex flex-row justify-around flex-wrap items-center mt-4 gap-5'>
            {Frontend_skill.map((image, idx) => (
                <SkillDataProvider 
                    key={idx}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={idx}
                />
            ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap items-center mt-4 gap-5'>
            {Backend_skill.map((image, idx) => (
                <SkillDataProvider 
                    key={idx}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={idx}
                />
            ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap items-center mt-4 gap-5'>
            {Full_stack.map((image, idx) => (
                <SkillDataProvider 
                    key={idx}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={idx}
                />
            ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap items-center mt-4 gap-5'>
            {Other_skill.map((image, idx) => (
                <SkillDataProvider 
                    key={idx}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={idx}
                />
            ))}
        </div>

        <div className='w-full h-full absolute'>
            <div  className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
                <video 
                    className='w-full h-auto'
                    preload='false'
                    loop
                    muted
                    autoPlay
                    playsInline
                    src='/cards-video.webm'
                />
            </div>
        </div>
    </section>
  )
}

export default Skills