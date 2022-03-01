import React from 'react'
import { About } from './components/about/About'
import { Contact } from './components/contact/Contact'
import { Divider } from './components/divider/Divider'
import { Header } from './components/header/Header'
import { Interested } from './components/interested/Interested'
import { Main } from './components/main/Main'
import { Projects } from './components/projects/Projects'
import { Skills } from './components/skills/Skills'

export const Portfolio = () => {
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
      <Divider values="Interested" id="interested"/>
      <Interested />
      <Divider values="Contact Me" id="contact"/>
      <Contact />
    </>
  )
}
