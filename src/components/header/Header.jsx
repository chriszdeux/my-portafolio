import React, { useEffect } from 'react'
import { useShowComponent } from '../../hooks/useShowComponent'
import { animations } from '../../utils/animations'
import { icons } from '../../utils/icons'
import { DeskMenu } from './DeskMenu'
import { MobileMenu } from './MobileMenu'

export const Header = () => {
  const { showComponent, handleShowComponent, animation } = useShowComponent();
  const { fade_in, fade_right } = animations

  // useEffect(() => {

  // }, [ showComponent ])
  return (
    <header className='header'>
      <h2>Portfolio</h2>
      <div className={`menu ${ !showComponent ? fade_in : fade_right }`} onClick={ handleShowComponent }>
        {
          !showComponent
            ?  icons.menu_icon
            : icons.close_icon
        }
      </div>
      <DeskMenu />
      {
        showComponent && 
        <MobileMenu animation={ animation }/>
      }
    </header>
  )
}
