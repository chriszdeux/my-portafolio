import React, { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { aboutMeData } from '../../utils/aboutData'
import { animations } from '../../utils/animations'

export const About = () => {
  const { about_me, my_skills, hobbies } = aboutMeData
  
  const { fade_in, fade_out } = animations
  const [aboutMe, setAboutMe] = useState([])
  useEffect(() => {
    setAboutMe( about_me.split('. ') )
  }, [  ])
  const sectionRef = useRef(null)
  const isVisible = useIntersectionObserver(sectionRef)
  // debugger
  return (
    <section className={` about ${ isVisible ? fade_in : fade_out } `} ref={ sectionRef }>
      {/* {
        aboutMe.map(item => (
          <p>{ item }</p>
        ))
      } */}
      <p>{ about_me }</p>
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
      
    </section>
  )
}
