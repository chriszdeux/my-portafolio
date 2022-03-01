import React from 'react'
import { animations } from '../../utils/animations'

export const Divider = (text) => {
  const { values, id } = text
  // debugger
  const { fade_in } = animations
  return (
    <div className={ `divider ${ fade_in }` } style={{ animationDelay: '1s' }} id={ id }>
      <div className='section'>
        <h2>{ values }</h2>
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
        <div className='block-9'></div>
        <div className='block-10'></div>
      </div>
    </div>
  )
}
