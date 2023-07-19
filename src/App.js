/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import './App.css'
import Lottie from 'lottie-react'
import {
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import Head from './components/header'
import { COLORS } from './export/style'
import Chapter from './components/chapter'
import Home from './pages/main/home'
import Tree from './pages/main/tree'
import Project from './pages/main/project'
import phone from './lottie/PHONE.json'
import Contact from './pages/main/contact'
import { ReactComponent as Bio } from './svg/BIO.svg'
import { ReactComponent as Projets } from './svg/PROJETS.svg'
import { ReactComponent as ContactIcon } from './svg/CONTACT.svg'
import Main from './pages/main/main'
import Error from './pages/main/error'
import ParticlesComponent from './components/particles'
import CGUPage from './pages/main/cgu-frame'

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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<Error />}>
      <Route index path="/" element={<Main />} />
      <Route index path="frame-cgu" element={<CGUPage />} />
    </Route>
  )
)

function App() {
  useEffect(() => {
    document.title = 'Adrien Verhaeghe'
  }, [])
  return (
    <div style={styles.app}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
