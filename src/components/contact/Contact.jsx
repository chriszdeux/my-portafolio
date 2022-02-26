import React from 'react'
import { icons } from '../../utils/icons'

export const Contact = () => {
  return (
    <section>
       <ul>
         <li>{ icons.linkedin_icon }</li>
       </ul>
       <form action="">
         <input type="text" name="name" placeholder='name'/>
         <input type="email" name="email" placeholder='welcome@welcome.com'/>
         <input type="text" name="subject" placeholder='subject'/>
         <input type="text" name="message" placeholder='message'/>
       </form>
       <button>Send</button>
    </section>
  )
}
