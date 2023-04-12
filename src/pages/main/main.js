/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import '../../App.css'
import Lottie from 'lottie-react'
import Head from '../../components/header'
import { COLORS } from '../../export/style'
import Chapter from '../../components/chapter'
import Home from './home'
import Tree from './tree'
import Project from './project'
import phone from '../../lottie/PHONE.json'
import Contact from './contact'

import { ReactComponent as Bio } from '../../svg/BIO.svg'
import { ReactComponent as Projets } from '../../svg/PROJETS.svg'
import { ReactComponent as ContactIcon } from '../../svg/CONTACT.svg'

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

function Main() {
  useEffect(() => {
    document.title = 'Adrien Verhaeghe'
  }, [])
  return (
    <div style={styles.app}>
      {window.innerWidth > 1000 ? (
        <div>
          <Head />
          <Home />
          <Chapter id="bio" text="Bio">
            <Bio
              style={{ height: 20, paddingLeft: 7.5, paddingRight: 7.5 }}
              fill={COLORS.white}
            />
          </Chapter>
          <Tree />
          <Chapter id="project" text="Application · Frame It">
            <Projets
              style={{ height: 20, paddingLeft: 7.5, paddingRight: 7.5 }}
              fill={COLORS.white}
            />
          </Chapter>
          <Project />
          <Chapter id="contact" text="Contact">
            <ContactIcon
              style={{ height: 20, paddingLeft: 7.5, paddingRight: 7.5 }}
              fill={COLORS.white}
            />
          </Chapter>
          <Contact />
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            backgroundColor: COLORS.lightBlack,
            fontFamily: 'SFProBold',
            textAlign: 'center',
          }}
        >
          <Lottie style={{ width: 100 }} animationData={phone} />
          <div>
            En cours de développement <br /> sur mobile...
          </div>
        </div>
      )}
    </div>
  )
}

export default Main
