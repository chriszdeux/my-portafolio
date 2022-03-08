import React, { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { animations } from '../../utils/animations';
import { sendMail } from '../../utils/email';
import { icons } from '../../utils/icons'
import { Sent } from './Sent';

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
  const [validation, setValidation] = useState(false)

  const handleValidation = () => {
    if(name.length > 2 && email.includes('@') && message.length > 15) {
      setValidation(true)
    }
  }
  
  useEffect(() => {
    handleValidation()
  }, [ inputValues ])

  const handleSend = (e) => {
    setValidation(false)
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
           ? <Sent setSent={ setSent }/>
           :
            <form action="" className={`contact_form `} onSubmit={handleSend}>
              <input className='name' type="text" name="name" onChange={ handleOnChange } values={ name } placeholder='name (require)' autoComplete='off'  required/>
              <input className='email' type="email" name="email" onChange={ handleOnChange } values={ email } placeholder='welcome@welcome.com (require)' autoComplete='off'  required/>
              <input className='subject' type="text" name="subject" onChange={ handleOnChange } values={ subject } placeholder='subject ' autoComplete='off'  required/>
              <textarea className='message' name="message" value={ message } onChange={ handleOnChange } required></textarea>
              {
                !validation
                ? <p>Message at least 20 characters</p>
                : <button className={`btn btn_primary ${ fade_in }`} type='submit' onClick={handleSend}>Send</button>
                
              }
            </form>
         }

    </section>
  )
}
