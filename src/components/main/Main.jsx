import React from 'react'
import { icons } from '../../utils/icons'
const photo = `https://firebasestorage.googleapis.com/v0/b/proyects-screenshots.appspot.com/o/portafolio%2FChrisprofile.jpg?alt=media&token=1f23a321-bd18-4740-8ee4-3f5dc9dd77a5`
export const Main = () => {
  return (
    <main>
      <figure>
        <img src={ photo } alt="profile" />
      </figure>
      <div>
        <h2>Hi, my name is Chris</h2>
        <h1>React front-end Developer</h1>
        <h2>Welcome to my Portfolio and feel free to review it and see what I can offer to your team</h2>
        {
          icons.react_icon
        }
      </div>
    </main>
  )
}
