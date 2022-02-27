import React from 'react'
import { icons } from '../../utils/icons'
import { InfoProject } from './InfoProject'
import { Technologies } from './Technologies'

export const ProjectCard = ({ item }) => {
  return (
    <article className='project_card'>
      <InfoProject item={ item }/>
      <Technologies item={ item }/>
    </article>
  )
}
