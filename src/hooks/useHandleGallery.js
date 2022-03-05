import { useState } from "react"

export const useHandleGallery = () => {
  const [galleryData, setGalleryData] = useState([])
  
  const handleGallery = (gallery) => {
    setGalleryData(gallery)
  }


  return { galleryData, handleGallery }
}