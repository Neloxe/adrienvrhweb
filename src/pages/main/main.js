import React, { useEffect } from 'react'
import '../../App.css'
import Head from '../../components/header'
import { COLORS, phone } from '../../export/style'
import Chapter from '../../components/chapter'
import Home from './home'
import Tree from './tree'
import Project from './project'
import Contact from './contact'

import { ReactComponent as Student } from '../../svg/STUDENT2.svg'
import { ReactComponent as BioIcon } from '../../svg/BIO.svg'
import { ReactComponent as Projets } from '../../svg/PROJETS.svg'
import { ReactComponent as ContactIcon } from '../../svg/CONTACT.svg'
import Bio from './bio'

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
      <div>
        <Head />
        <Home />
        <Chapter id="bio" text="Bio">
          <BioIcon
            style={{
              height: 35,
              width: 35,
              paddingLeft: 7.5,
              paddingRight: 7.5,
            }}
            fill={COLORS.white}
          />
        </Chapter>

        <Bio />

        <Chapter id="project" text="Mes projets">
          <Projets
            style={{
              height: 35,
              width: 35,
              paddingLeft: 7.5,
              paddingRight: 7.5,
            }}
            fill={COLORS.white}
          />
        </Chapter>
        <Project />
        <Chapter id="contact" text="Contact">
          <ContactIcon
            style={{
              height: 35,
              width: 35,
              paddingLeft: 7.5,
              paddingRight: 7.5,
            }}
            fill={COLORS.white}
          />
        </Chapter>
        <Contact />
        {!phone && (
          <>
            <Chapter id="cursus" text="Cursus">
              <Student
                style={{
                  height: 35,
                  width: 35,
                  paddingLeft: 7.5,
                  paddingRight: 7.5,
                }}
                fill={COLORS.white}
              />
            </Chapter>
            <Tree />
          </>
        )}
      </div>
      {/* <div
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
      </div> */}
    </div>
  )
}

export default Main
