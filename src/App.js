import React, { useEffect } from 'react'
import './App.css'
import Head from './components/header'
import { COLORS } from './export/style'
import bio from './svg/BIO.svg'
import projets from './svg/PROJETS.svg'
import Chapter from './components/chapter'
import Home from './pages/main/home'
import Tree from './pages/main/tree'
import Project from './pages/main/project'

const styles = {
  app: {
    color: COLORS.white,
    height: '100vh',
  },
  global: {
    get: 'fjke',
    backgroundColor: COLORS.black,
  },
}

function App() {
  useEffect(() => {
    document.title = 'Adrien Verhaeghe'
  }, [])
  return (
    <div style={styles.app}>
      <div>
        <Head />
        <Home />
        <Chapter text="Bio" logo={bio} />
        <Tree />
        <Chapter text="Projets" logo={projets} />
        <Project />
      </div>
    </div>
  )
}

export default App
