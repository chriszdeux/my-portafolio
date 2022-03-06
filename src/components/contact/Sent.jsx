import React, { useEffect, useState } from 'react'
import { animations } from '../../utils/animations'
import { icons } from '../../utils/icons'

export const Sent = ({ setSent }) => {
  const{ loading_icon, mail_sent_icon, mail_icon } = icons
  const { fade_in, fade_out, fade_up } = animations
  const [isSent, setIsSent] = useState(false)
  const [fadeAnimaton, setFadeAnimaton] = useState('')
  useEffect(() => {

    setTimeout(() => {
     
      setIsSent(true)
     
      setTimeout(() => {
        setSent(false)
      }, 3000);
      setTimeout(() => {
        setFadeAnimaton(fade_out)
      }, 2000);
    }, 4000);
  }, [  ])

  // debugger
  return (
    <div className={`mail_screen ${ fadeAnimaton }`}>
      <div className='mail_content'>
        {
          !isSent
            ? <div className={`${ fade_in } loading`} >{ loading_icon }</div>
            : <div className={`${ fade_up }`}>{ mail_sent_icon }</div>
        }
        <h2>Sending mail</h2>
      </div>
    </div>
  )
}
