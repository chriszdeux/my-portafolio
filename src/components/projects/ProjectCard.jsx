import React from 'react'
import { animations } from '../../utils/animations'
import { icons } from '../../utils/icons'
import { InfoProject } from './InfoProject'
import { Technologies } from './Technologies'

export const ProjectCard = ({ item }) => {
  const { fade_in } = animations
  return (
    <article className={`project_card ${ fade_in }`} style={{ animationDelay: `${ item.delay }` }}>
      <InfoProject item={ item }/>
      <Technologies item={ item }/>
    </article>
  )
}
