import React, { useRef } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { aboutMeData } from '../../utils/aboutData'
import { animations } from '../../utils/animations'

export const Interested = () => {
  const { hobbies } = aboutMeData
  const { fade_in, fade_out } = animations

  const sectionRef = useRef(null)
  const isVisible = useIntersectionObserver(sectionRef)
  return (
    <section className={`interested ${ isVisible ? fade_in : fade_out }`} ref={ sectionRef }>
      <figure className='interested_background'>
        <img src="" alt="" />
      </figure>
      <ul className='interested_list'>
        {
          hobbies.map(item => (
            <li key={ item.hobbie }>
              { item.hobbie }
              {
                item?.list_hobbie &&
                <ul className='list_hobbies'>
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
    </section>
  )
}
