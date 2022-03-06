import React, { useContext } from 'react'
import { DataContext } from '../../context/context'
import { About } from '../about/About'
import { Contact } from '../contact/Contact'
import { Sent } from '../contact/Sent'
import { Divider } from '../divider/Divider'
import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'
import { Main } from '../main/Main'
import { GalleryModal } from '../modal/GalleryModal'
import { Projects } from '../projects/Projects'
import { Skills } from '../skills/Skills'
import { TopButton } from '../top-button/TopButton'

export const Pages = () => {
  const { openModal:{
    isOpen, handleIsOpen, animation
  }, myGalleryData: { galleryData } } = useContext(DataContext)

  return (
    <>
      <Header />
      <Main />
      <Divider values="Projects" id="projects"/>
      <Projects />
      <Divider values="Skills" id="skills"/>
      <Skills />
      <Divider values="About Me" id="about"/>
      <About />
      {/* <Divider values="Interested" id="interested"/>
      <Interested /> */}
      <Divider values="Contact Me" id="contact"/>
      <Contact />
      <Footer />
      {/* <Sent /> */}
      <TopButton />
      {
        isOpen && 
        <GalleryModal values={{ handleIsOpen, galleryData, animation }}/>
      }
    </>
  )
}
