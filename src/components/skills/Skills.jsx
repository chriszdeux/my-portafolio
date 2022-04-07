import React, { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { animations } from '../../utils/animations'
import { skillsData } from '../../utils/skillsData'

export const Skills = () => {
  const { fade_in, fade_out } = animations
  // const [animation, setAnimation] = useState(fade_in);
  const [handleAnimation, setHandleAnimation] = useState(fade_in)
  const sectionRef = useRef(null)
  const isVisible = useIntersectionObserver(sectionRef)
  return (
    
    <section className={` skills ${ fade_in }`} ref={ sectionRef }>
      {
        <ul className='skill_list'>
          {
            skillsData.map(item => (
              item.learned && 
              <li key={ item.name } className={ `${ isVisible ? fade_in : fade_out }` } >
                <span style={{ color: `${ item.color }` }}>{ item.icon }</span>
                { item.name }
              </li>
            ))
          }
        </ul>
      }
    </section>
  )
}
