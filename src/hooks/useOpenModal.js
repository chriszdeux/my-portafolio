import { useState } from "react"
import { animations } from "../utils/animations"

export const useOpenModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [animation, setAnimation] = useState('')
  const { fade_in, fade_out } = animations

  const handleIsOpen = () => {
    if(isOpen) {
      setAnimation(fade_out)
      setTimeout(() => {
        setIsOpen(!isOpen)
        
      }, 800);
    } else {
      setAnimation(fade_in)
      setTimeout(() => {
        setIsOpen(!isOpen)
        
      }, 800);
    }
  }

  return { isOpen, handleIsOpen, animation }
}