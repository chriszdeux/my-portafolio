import React, { useContext } from 'react'
import { DataContext } from '../../context/context'
import { icons } from '../../utils/icons'

export const Technologies = ({ item }) => {
  const { technologies, link, repository } = item

  const { name, cover_image, description, gallery } = item
  const { myGalleryData:{
    handleGallery
  }, openModal: { handleIsOpen } } = useContext(DataContext)

  const handleOpenGallery = () => {
    handleGallery(gallery)
    setTimeout(() => {
      handleIsOpen()
    }, 300);
  }


  return (
    <div className='project_technologies'>
      <ul className='technologies_list'>
        {
          technologies.map(item => (
            <li key={ item.name }>
              <span style={{ color: `${item.color}` }}> { item.icon } </span>
              { item.name }
            </li>
          ))
        }
      </ul>
      <div className='project_links'>
        
          <div onClick={ handleOpenGallery }>
            { icons.gallery_icon }
          </div>
          <a href={ link } target="_blank" rel="noreferrer">
          { icons.live_icon }
          </a>
                 <a href={ repository } target="_blank" rel="noreferrer">
          { icons.github_icon }
          </a>
      
      </div>
    </div>
  )
}
