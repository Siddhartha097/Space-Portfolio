'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/20/solid'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'

const SkillText = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <motion.div
        variants={slideInFromTop}
        className='Welcome-box py-[10px] px-[8px] border-[#7042f88b] opacity-[0.9]'
      >
        <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
        <h1 className='Welcome-text text-[13px]'>
          Think Better with Next.js 14
        </h1>
      </motion.div>

      <motion.div
        className='text-white text-[30px] font-medium mt-[10px] mb-[15px] text-center'
        variants={slideInFromLeft(0.5)}
      >
        Making apps with modern technologies
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 text-center mt-[10px] mb-10'
      >
        Never miss a task, deadline or idea
      </motion.div>
    </div>
  )
}

export default SkillText