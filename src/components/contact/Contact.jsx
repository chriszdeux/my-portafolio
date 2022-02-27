import React from 'react'
import { icons } from '../../utils/icons'

export const Contact = () => {
  return (
    <section className='contact'>
       {/* <h2>Or</h2> */}
       <form action="" className='contact_form'>
         <input className='name' type="text" name="name" placeholder='name'/>
         <input className='emal' type="email" name="email" placeholder='welcome@welcome.com'/>
         <input className='subject' type="text" name="subject" placeholder='subject'/>
         <textarea className='message' name="message"></textarea>
       </form>
       <button className='btn btn_primary'>Send</button>
       <ul className='contact_list'>
         <li>{ icons.linkedin_icon }</li>
       </ul>
    </section>
  )
}
