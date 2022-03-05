import React, { useState } from 'react';
import { animations } from '../../utils/animations';
import { icons } from '../../utils/icons';


export const GalleryModal = ({ values }) => {
  const { handleIsOpen, galleryData, animation:modal_animation } = values
  // debugger
  const [currenScreenshot, setCurrenScreenshot] = useState(0)
  // debugger
  const { fade_in, fade_out, fade_right } = animations
  const [animation, setAnimation] = useState('')
  const { left_icon, right_icon, close_icon } = icons
  // debugger
  const handleNextScreenshot = (  ) => {
    if( currenScreenshot === galleryData.length - 1 ) {
      setCurrenScreenshot(0)
    setAnimation(fade_in)
    setTimeout(() => {
      setAnimation('')
      
    }, 1000);
    } else {
      setCurrenScreenshot(currenScreenshot + 1)
      setAnimation(fade_in)
      setTimeout(() => {
        setAnimation('')
        
      }, 1000)
    }

  }

  const handlePrevScreenshot = (  ) => {
    if( currenScreenshot === 0 ) {
      setCurrenScreenshot(galleryData.length - 1)
    setAnimation(fade_in)
    setTimeout(() => {
      setAnimation('')
      
    }, 700);
    } else {
      setCurrenScreenshot(currenScreenshot - 1)
      setAnimation(fade_in)
      setTimeout(() => {
        setAnimation('')
        
      }, 700)
    }

  }

  return (
    <div className={`gallery_modal ${ modal_animation }`}>
      <div className='close' onClick={ handleIsOpen }>{ close_icon }</div>
      <figure className='current_img'>
        <img className={`${ animation } back-image`} src={ galleryData[currenScreenshot].image } alt={ galleryData[currenScreenshot].image } />
        <img className={`${ animation }`} src={ galleryData[currenScreenshot].image } alt={ galleryData[currenScreenshot].image } />
      </figure>
      <div className='gallery_controls'>
        <div onClick={ handlePrevScreenshot }> { left_icon }</div>
        <div onClick={ handleNextScreenshot }>{ right_icon }</div>
      </div>
      <div className='layout'></div>
    </div>
  )
}
