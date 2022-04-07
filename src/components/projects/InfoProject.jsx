import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/context'
import { useShowComponent } from '../../hooks/useShowComponent'
import { animations } from '../../utils/animations'
import { GalleryModal } from '../modal/GalleryModal'

export const InfoProject = ({item}) => {
 
  const { name, cover_image, description, gallery, work_in_progress } = item
 

  return (
    <>
    <div className='project_content'>
      
      <figure className='project_screenshot' >
        <img  src={ cover_image } alt={ name } />
      </figure>
      <div className='project_info'>
        <h2>{ name }</h2>
        <p>{ description }</p>
        {
          work_in_progress &&
          <h3>( Work in progress )</h3>
        }
        {/* <h3 onClick={ handleOpenGallery }>Gallery</h3> */}
      </div>
    </div>
    </>
  )
}
