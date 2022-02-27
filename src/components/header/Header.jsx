import React from 'react'
import { icons } from '../../utils/icons'

export const Header = () => {
  return (
    <header className='header'>
      <h2>Portafolio</h2>
      <div className='menu'>
        { icons.menu_icon }
      </div>
    </header>
  )
}
