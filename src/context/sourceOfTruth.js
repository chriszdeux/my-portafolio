import { useHandleGallery } from "../hooks/useHandleGallery"
import { useOpenModal } from "../hooks/useOpenModal"


export const SourceOfTheTruth = () => {
  const openModal = useOpenModal()
  const myGalleryData = useHandleGallery()

   const sourceOfTruth = {
    openModal,
    myGalleryData
  }

  return sourceOfTruth
}