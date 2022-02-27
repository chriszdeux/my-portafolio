import React from 'react'
import { icons } from '../../utils/icons'
import { projects } from '../../utils/projectsData';
import { ProjectCard } from './ProjectCard';
export const Projects = () => {
  return (
    <section className='projects'>
      {
        projects.map(item => (
          <ProjectCard key={ item.id } item={ item }/>
        ))
      }
    </section>
  )
}
