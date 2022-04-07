import React from 'react'
import { animations } from '../../utils/animations';
import { icons } from '../../utils/icons'
const photo = `https://firebasestorage.googleapis.com/v0/b/proyects-screenshots.appspot.com/o/portafolio%2FChrisprofile.jpg?alt=media&token=1f23a321-bd18-4740-8ee4-3f5dc9dd77a5`;
const background = 'https://firebasestorage.googleapis.com/v0/b/proyects-screenshots.appspot.com/o/portafolio%2Fbackground.png?alt=media&token=372a6377-5612-425d-9716-cab7df1e35e0'
const background2 = 'https://firebasestorage.googleapis.com/v0/b/proyects-screenshots.appspot.com/o/portafolio%2Fbackground3.png?alt=media&token=daec90f1-0b6b-40cf-861e-4ef07b6a221e';
const profile = `https://firebasestorage.googleapis.com/v0/b/proyects-screenshots.appspot.com/o/portafolio%2Fprofile.png?alt=media&token=b34f7935-bc89-4ee1-a0d6-519f2f509ea1`
export const Main = () => {
  const { fade_left, fade_in, fade_right } = animations
  return (
    <main className='main' id='main'>
      <figure className={`profile_picture ${ fade_left }`}>
        <img src={ photo } alt="profile" />
        <img src={ photo } alt="profile" />
      </figure>
      
      <div className='main_content'>
        <h2 className={`${ fade_in }`} style={{ animationDelay: '.3s' }}>Hi, my name is Chris</h2>
        <h1 className={`${ fade_in }`} style={{ animationDelay: '.6s' }}> 
          React front-end Developer
        <span className={` react-icon ${ fade_in }`} style={{ animationDelay: '.6s' }}>
          {
            icons.react_icon
          }
        </span>
         </h1>
        
        <h3 className={`${ fade_in }`} style={{ animationDelay: '.9s' }}>Welcome to my Portfolio and feel free to review it and see what I can offer to your team</h3>
      </div>

      <figure className={`background_image $`}>
        <img className='background-2' src={ background } alt="background" />
        <img className={`${fade_right}`} src={ background } alt="background" />
      </figure>
    </main>
  )
}
