import React from 'react'

export const Divider = ({ text }) => {
  return (
    <div className='divider'>
      <div className='section'>
        <h2>{ text }</h2>
        <div className='block-1'></div>
        <div className='block-2'></div>
      </div>
      <div className='group_blocks'>
        <div className='block-3'></div>
        <div className='block-4'></div>
        <div className='block-5'></div>
        <div className='block-6'></div>
        <div className='block-7'></div>
        <div className='block-8'></div>
      </div>
    </div>
  )
}
