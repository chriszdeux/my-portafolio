import { useState } from "react"
import { animations } from "../utils/animations"

export const useShowComponent = () => {
  const [showComponent, setShowComponent] = useState(false)
  const [animation, setAnimation] = useState('')
  const { fade_right, fade_left, fade_in, fade_out   } = animations
  const handleShowComponent = () => {
    if(showComponent) {
      setAnimation(fade_out)
      setTimeout(() => {
        setShowComponent(false)
      }, 300);
    } else {
      setAnimation(fade_in)
      setTimeout(() => {
        setShowComponent(true)
      }, 300);
      
    }
  }
  // debugger
  return { showComponent, handleShowComponent, animation }
}