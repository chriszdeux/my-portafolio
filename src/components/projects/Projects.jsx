import React from 'react'
import { icons } from '../../utils/icons'

export const Projects = () => {
  return (
    <section>
      <article>
        <div>
          <figure>
            <img src="" alt="" />
          </figure>
          <div>
            <h2>Project</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat possimus deserunt voluptas veritatis amet labore.</p>
          </div>
        </div>

        <div>
          <ul>
            <li>technology</li>
          </ul>
          <div>
            <div>
              { icons.live_icon }
            </div>
            <div>
              { icons.github_icon }
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
