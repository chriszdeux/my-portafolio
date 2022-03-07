import React, { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useShowComponent } from '../../hooks/useShowComponent'
import { aboutMeData } from '../../utils/aboutData'
import { animations } from '../../utils/animations'

export const About = () => {
  const { about_me, my_skills, hobbies, learning, short_version } = aboutMeData
  
  const { fade_in, fade_out, fade_left, fade_right } = animations
  const [aboutMe, setAboutMe] = useState([])
  useEffect(() => {
    setAboutMe( about_me.split('. ') )
  }, [  ])
  const sectionRef = useRef(null)
  const isVisible = useIntersectionObserver(sectionRef)
  const { showComponent, handleShowComponent } = useShowComponent()
  // debugger
  return (
    <section className={` about ${ isVisible ? fade_in : fade_out } `} ref={ sectionRef }>
     <h3 onClick={ handleShowComponent } className={ fade_in }>
      {
        showComponent
        ? 'Short version'
        : 'Complete Version'
      }
    </h3>

      {
        showComponent
          ? <p className={ fade_left }>{ about_me }</p>
          : <p className={ fade_right }>{ short_version }</p>
      }

      <div className='about_content'>
      <div>
        <h2>I've worked with this technologies</h2>
        <ul className='my_skills'>
          {
            my_skills.map(item => (
              <li key={ item.skill } >{ item.skill } { 
                item?.list && 
                <ul className='sub_skill'>
                  {
                    item.list.map(item => (
                      <li key={ item }> / { item }</li>
                    ))
                  }
                </ul>
                }</li>
            ))
          }
        </ul>
      </div>
      <div>
      <h2>My interested</h2>
        <ul className='my_skills'>
          {
            hobbies.map(item => (
              <li key={ item.hobbie }>
                { item.hobbie }
                {
                  item?.list_hobbie &&
                  <ul className='sub_skill'>
                    {
                      item.list_hobbie.map(item => (
                        <li key={ item }> / { item }</li>
                      ))
                    }
                  </ul>
                }
              </li>
            ))
          }
        </ul>

      </div>
      </div>
      <div className='learning'>
        <h2>Technologies I'm learning</h2>
        <ul className='learning_list'>
          {
            learning.map(item => (
              <li key={ item.technology }>
                { item.icon }
                <span>{ item.technology }</span>
              </li>
            ))
          }
        </ul>

      </div>
      
    </section>
  )
}
