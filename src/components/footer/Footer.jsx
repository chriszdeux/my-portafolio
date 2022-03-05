import React from 'react'
import { aboutMeData } from '../../utils/aboutData'

export const Footer = () => {
  const { contact } = aboutMeData
  return (
    <div className='footer'>
      <ul className='footer_list'>
        {
          contact.map(item => (
            <li 
              key={item.color}
            style={{
              color: `${ item.color }`
            }}>
              <a href={ item.link } target="_blank" rel='noreferrer' >
                { item.icon }
              </a>
              {/* <span>{ item.name }</span> */}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
