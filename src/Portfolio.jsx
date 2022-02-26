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
      <Divider text="Projects"/>
      <Projects />
      <Divider text="Skills"/>
      <Skills />
      <Divider text="About Me"/>
      <About />
      <Divider text="Interested"/>
      <Interested />
      <Divider text="Contact Me"/>
      <Contact />
    </>
  )
}
