import React from 'react'
import { aboutMeData } from '../../utils/aboutData'

export const About = () => {
  const { about_me, my_skills } = aboutMeData
  return (
    <section className='about'>
      <p>{ about_me }</p>
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
    </section>
  )
}
