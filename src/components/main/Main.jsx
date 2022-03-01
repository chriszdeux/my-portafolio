import React from 'react'
import { animations } from '../../utils/animations';
import { icons } from '../../utils/icons'
const photo = `https://firebasestorage.googleapis.com/v0/b/proyects-screenshots.appspot.com/o/portafolio%2FChrisprofile.jpg?alt=media&token=1f23a321-bd18-4740-8ee4-3f5dc9dd77a5`;

export const Main = () => {
  const { fade_left, fade_in } = animations
  return (
    <main className='main' id='main'>
      <figure className={`profile_picture ${ fade_left }`}>
        <img src={ photo } alt="profile" />
        <img src={ photo } alt="profile" />
      </figure>
      <div className='main_content'>
        <h2 className={`${ fade_in }`} style={{ animationDelay: '.3s' }}>Hi, my name is Chris</h2>
        <h1 className={`${ fade_in }`} style={{ animationDelay: '.6s' }}>React front-end Developer</h1>
        <h2 className={`${ fade_in }`} style={{ animationDelay: '.9s' }}>Welcome to my Portfolio and feel free to review it and see what I can offer to your team</h2>
        <div>
          {
            icons.react_icon
          }
        </div>
      </div>
    </main>
  )
}
