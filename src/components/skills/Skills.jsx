import React, { useEffect, useState } from 'react'
import { animations } from '../../utils/animations'
import { skillsData } from '../../utils/skillsData'

export const Skills = () => {
  const { fade_in, fade_out } = animations
  // const [animation, setAnimation] = useState(fade_in);

  return (
    <section className='skills'>
      <ul className='skill_list'>
        {
          skillsData.map(item => (
            <li key={ item.name } className={ `${ fade_in }` } style={{ animationDelay: `${ item.delay }` }}>
              <span style={{ color: `${ item.color }` }}>{ item.icon }</span>
              { item.name }
            </li>
          ))
        }
      </ul>
    </section>
  )
}
