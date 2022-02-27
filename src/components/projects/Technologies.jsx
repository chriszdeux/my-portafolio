import React from 'react'
import { icons } from '../../utils/icons'

export const Technologies = ({ item }) => {
  const { technologies, link, repository } = item
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
        <div>
          <a href={ link } target="_blank" rel="noreferrer">
          { icons.live_icon }
          </a>
        </div>
        <div>
          <a href={ repository } target="_blank" rel="noreferrer">
          { icons.github_icon }
          </a>
        </div>
      </div>
    </div>
  )
}
