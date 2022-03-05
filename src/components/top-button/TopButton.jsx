import React from 'react'
import { icons } from '../../utils/icons'
import { scrollTop } from '../../utils/scrollTop'

export const TopButton = () => {
  const { top_icon } = icons
  
  return (
    <div className='top_button'>
      <div className='layer' onClick={ scrollTop }>
        {
          top_icon
        }
      </div>
      <div className='layer-2'></div>
      <div className='layer-3'></div>
    </div>
  )
}
