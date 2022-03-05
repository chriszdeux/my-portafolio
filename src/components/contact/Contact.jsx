import React, { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { animations } from '../../utils/animations';
import { sendMail } from '../../utils/email';
import { icons } from '../../utils/icons'

export const Contact = () => {
  const [sent, setSent] = useState(false);
  const [text, setText] = useState('')
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
    })
    const { fade_in, fade_out } = animations

    const sectionRef = useRef(null)
    const isVisible = useIntersectionObserver(sectionRef)

  const { name, email, subject, message } = inputValues

  
  useEffect(() => {
    if(sent) {
      
    }
  }, [ sent ])

  const handleSend = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSent(true)
    sendMail(inputValues)
    setInputValues({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    }, 1000);
    // setTimeout(() => {
    //   reset()
    // }, 1000);
  }

  const handleOnChange = (e) => {
    setInputValues( {
      ...inputValues,
      [e.target.name]:e.target.value
    } )
  }


  return (
    <section className={`contact ${ isVisible ? fade_in : fade_out}`} ref={ sectionRef }>
       {/* <h2>Or</h2> */}
         {
           sent 
           ? <h1>sent...</h1>
           :
            <form action="" className={`contact_form `} onSubmit={handleSend}>
              <input className='name' type="text" name="name" onChange={ handleOnChange } values={ name } placeholder='name' autoComplete='off' />
              <input className='email' type="email" name="email" onChange={ handleOnChange } values={ email } placeholder='welcome@welcome.com' autoComplete='off' />
              <input className='subject' type="text" name="subject" onChange={ handleOnChange } values={ subject } placeholder='subject' autoComplete='off' />
              <textarea className='message' name="message" value={ message } onChange={ handleOnChange }></textarea>
            </form>
         }
         <button className='btn btn_primary' type='submit' onClick={handleSend}>Send</button>

    </section>
  )
}
