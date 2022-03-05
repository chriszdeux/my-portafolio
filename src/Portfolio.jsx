import React from 'react'
import { About } from './components/about/About'
import { Contact } from './components/contact/Contact'
import { Divider } from './components/divider/Divider'
import { Header } from './components/header/Header'
import { Interested } from './components/interested/Interested'
import { Main } from './components/main/Main'
import { Pages } from './components/pages/Pages'
import { Projects } from './components/projects/Projects'
import { Skills } from './components/skills/Skills'
import { TopButton } from './components/top-button/TopButton'
import { DataContext } from './context/context'
import { SourceOfTheTruth, sourceOfTruth } from './context/sourceOfTruth'

export const Portfolio = () => {
  const sourceOfTruth = SourceOfTheTruth()
  return (
    <DataContext.Provider value={ sourceOfTruth }>
      <Pages />
    </DataContext.Provider>
  )
}
