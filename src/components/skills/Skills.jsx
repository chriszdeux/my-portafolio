import React from 'react'
import { skillsData } from '../../utils/skillsData'

export const Skills = () => {
  return (
    <section className='skills'>
      <ul className='skill_list'>
        {
          skillsData.map(item => (
            <li key={ item.name }>
              <span style={{ color: `${ item.color }` }}>{ item.icon }</span>
              { item.name }
            </li>
          ))
        }
      </ul>
    </section>
  )
}
