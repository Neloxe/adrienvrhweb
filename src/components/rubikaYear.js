/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/extensions */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useRef } from 'react'
import anime from 'animejs/lib/anime.es.js'
import { COLORS, SIZE } from '../export/style'
import projets from '../svg/PROJETS.svg'
import bio from '../svg/BIO.svg'
import contact from '../svg/CONTACT.svg'
import rotate from '../svg/ROTATE.svg'
import pdp from '../image/PDP.jpg'
import student from '../svg/STUDENT.svg'
import junia from '../image/JUNIA.png'
import commit from '../svg/COMMIT.svg'
import rocket from '../image/ROCKET.png'
import csharp from '../svg/CSHARP.svg'
import unity from '../svg/UNITY.svg'
import photon from '../svg/PHOTON.svg'
import css from '../svg/CSS.svg'
import php from '../svg/PHP.svg'

import bcd from '../image/BCD.png'
import science from '../image/SCIENCES.png'
import Mouse from './mouse'
// import anime from 'animejs/lib/anime.es.js'

const styles = {
  pdpZone: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 40,
  },
  pdp: {
    border: 'solid',
    borderWidth: 5,
    borderRadius: 50,
    marginRight: 30,
    width: 300,
    height: 300,
  },
  step: {
    paddingTop: 30,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 20,
    transform: 'translate(-152px, 0)',
  },
  stepText: {
    fontFamily: 'SFProBold',
    fontSize: SIZE.m * 0.9,
    display: 'flex',
    flexDirection: 'column',
    transform: 'translate(0, -5px)',
    marginLeft: 25,
    width: 450,
  },
  stepIconBorder: {
    backgroundColor: COLORS.lightBlack,
    borderRadius: 1000,
    display: 'flex',
    padding: 10,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  stepTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
}

function RubYear() {
  const firstYearRef = useRef([])
  const mouseRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          anime({
            targets: document.getElementById(entry.target.className - 1),
            translateX: [-20, 0],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeInOutExpo',
          })
        } else {
          anime({
            targets: document.getElementById(entry.target.className - 1),
            translateX: [0, -20],
            opacity: [1, 0],
            duration: 500,
            easing: 'easeInOutExpo',
          })
        }
      }
    })
    for (let i = 30; i < 30 + firstYearRef.current.length; i += 1) {
      anime({
        targets: document.getElementById(i),
        translateX: [0, -20],
        opacity: [1, 0],
        duration: 500,
        easing: 'easeInOutExpo',
      })
      observer.observe(firstYearRef.current[i - 30])
    }
  }, [])

  return (
    <div
      style={{
        width: '75%',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <div
          style={{
            width: 2,
            height: 400,
            marginLeft: '10vw',
            marginRight: 100,
            background:
              'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.7329525560224089) 24%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%)',
            // backgroundColor: COLORS.white,
          }}
        />
      </div>
      <div
        style={{
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            ...styles.step,
            transform: 'translate(-146px, 0)',
          }}
        >
          <div
            style={{
              ...styles.stepIconBorder,
            }}
          >
            <img
              style={{
                width: 30,
              }}
              src={rocket}
            />
          </div>
          <div style={{ ...styles.stepText }}>
            <div
              ref={(el) => {
                firstYearRef.current[0] = el
              }}
              id={30}
              className={30}
            >
              <div style={{ ...styles.stepTitle }}>
                <img
                  style={{
                    width: 20,
                    marginRight: 5,
                  }}
                  src={unity}
                />
                <div>Logiciel · Unity</div>
              </div>
              <div style={{ color: COLORS.grey, paddingTop: 10 }}>
                Unity est un moteur de jeu multiplateforme développé par Unity
                Technologies. Il est l'un des plus répandus dans l'industrie du
                jeu vidéo.
              </div>
            </div>
            <div
              ref={(el) => {
                firstYearRef.current[1] = el
              }}
              id={31}
              className={31}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingTop: 10,
                }}
              >
                <img
                  style={{
                    width: 20,
                    marginRight: 5,
                  }}
                  src={csharp}
                />
                <div>Langage · C#</div>
              </div>
              <div style={{ color: COLORS.grey, paddingTop: 10 }}>
                Langage indissociable de Unity.
              </div>
            </div>
            <div
              ref={(el) => {
                firstYearRef.current[2] = el
              }}
              id={32}
              className={32}
            >
              <div style={styles.stepTitle}>
                <img
                  style={{
                    width: 20,
                    marginRight: 5,
                  }}
                  src={photon}
                />
                <div>Outils · Photon</div>
              </div>
              <div style={{ color: COLORS.grey, paddingTop: 10 }}>
                Photon est le service multijoueur multiplateforme standard et le
                premier service multijoueur mondial pour les jeux Unity.
              </div>
            </div>
            <div
              ref={(el) => {
                firstYearRef.current[3] = el
              }}
              style={{ position: 'relative', width: 20, height: 20 }}
              id={33}
              className={33}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RubYear
