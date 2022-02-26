import React from 'react'
import { aboutMeData } from '../../utils/aboutData'

export const About = () => {
  const { about_me, my_skills } = aboutMeData
  return (
    <section>
      <p>{ about_me }</p>
      <h2>I've worked with this technologies</h2>
      <ul>
        {
          my_skills.map(item => (
            <li key={ item.skill }>{ item.skill } { 
              item?.list && 
              <ul>
                {
                  item.list.map(item => (
                    <li key={ item }>{ item }</li>
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
