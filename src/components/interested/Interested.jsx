import React from 'react'
import { aboutMeData } from '../../utils/aboutData'

export const Interested = () => {
  const { hobbies } = aboutMeData
  return (
    <section className='interested'>
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
