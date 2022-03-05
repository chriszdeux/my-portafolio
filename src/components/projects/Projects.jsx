import React, { useRef } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { animations } from '../../utils/animations';
import { icons } from '../../utils/icons'
import { projects } from '../../utils/projectsData';
import { ProjectCard } from './ProjectCard';
export const Projects = () => {
  const { fade_in, fade_out } = animations
  const sectionRef = useRef(null)
  const isVisible = useIntersectionObserver(sectionRef)
  return (
    <section className={`projects ${ isVisible ? fade_in : fade_out }`} ref={ sectionRef }>
      {
        projects.map(item => (
          <ProjectCard key={ item.id } item={ item }/>
        ))
      }
    </section>
  )
}
