import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h1>
      <div className='w-full h-full flex flex-col md:flex-row gap-10 px-10'>
        <ProjectCard 
          src='/NextWebsite.png'
          title='Open AI Summerizer'
          link='https://open-ai-sunmerizer.vercel.app/'
          desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea adipisci ipsam incidunt reprehenderit, dolores ratione quidem placeat molestias cumque repellat rerum obcaecati deleniti vel porro? Aliquid rerum molestiae alias dolorem.' 
        />
        <ProjectCard 
          src='/CardImage.png'
          link='https://restaurant-web-one.vercel.app/'
          title='Restaurant Website'
          desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea adipisci ipsam incidunt reprehenderit, dolores ratione quidem placeat molestias cumque repellat rerum obcaecati deleniti vel porro? Aliquid rerum molestiae alias dolorem.' 
        />
        <ProjectCard 
          src='/SpaceWebsite.png'
          link='https://space-portfolio-vert.vercel.app/'
          title='Space Themed Website'
          desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea adipisci ipsam incidunt reprehenderit, dolores ratione quidem placeat molestias cumque repellat rerum obcaecati deleniti vel porro? Aliquid rerum molestiae alias dolorem.' 
        />
        
      </div>
    </div>
  )
}

export default Projects