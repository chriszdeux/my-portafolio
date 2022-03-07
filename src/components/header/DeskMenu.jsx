import React from 'react'
import { scrollTop } from '../../utils/scrollTop'
import { icons } from '../../utils/icons'
const resume = 'https://firebasestorage.googleapis.com/v0/b/proyects-screenshots.appspot.com/o/christian_meza_resume.pdf?alt=media&token=b7dec780-2951-4f52-ad9c-47d27d8d864b' 
export const DeskMenu = () => {
  
  return (
    <nav className="navbar_desk">
      <ul className='desk_menu'>
        <li><a href="#main" onClick={ scrollTop }>Main</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a href="#">
            Resume
          </a>
            <a href={ resume } target="_blank" rel="noreferrer">
          { icons.link_icon }
          </a>
        <a href={ resume } download>
        { icons.download_icon }
        </a>
        </li>
      </ul>
    </nav>
  )
}
