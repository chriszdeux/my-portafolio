import React from 'react'

export const InfoProject = ({item}) => {
  const { name, cover_image, description } = item
  return (
    <div className='project_content'>
      
      <div className='project_info'>
        <h2>{ name }</h2>
        <p>{ description }</p>
      </div>
      <figure className='project_screenshot'>
        <img src={ cover_image } alt={ name } />
      </figure>
    </div>
  )
}
