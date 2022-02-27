import React from 'react'

export const InfoProject = ({item}) => {
  const { name, cover_image, description } = item
  return (
    <div className='project_content'>
      
      <figure className='project_screenshot'>
        <img src={ cover_image } alt={ name } />
      </figure>
      <div className='project_info'>
        <h2>{ name }</h2>
        <p>{ description }</p>
      </div>
    </div>
  )
}
