/* eslint-disable react/no-unescaped-entities */
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
import pdp from '../image/PDP.png'
import student from '../svg/STUDENT.svg'
import junia from '../image/JUNIA.png'
import commit from '../svg/COMMIT.svg'
import rocket from '../image/ROCKET.png'
import cpp from '../svg/C++.svg'
import js from '../svg/JS.svg'
import bcd from '../image/BCD.png'
import science from '../image/SCIENCES.png'
import react from '../svg/REACT.svg'
import firebase from '../svg/FIREBASE.svg'

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
    width: 450,
    flexDirection: 'column',
    transform: 'translate(0, 15px)',
    marginLeft: 25,
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

function InternShip({ lastRef }) {
  const firstYearRef = useRef([])
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
    for (let i = 20; i < 20 + firstYearRef.current.length; i += 1) {
      anime({
        targets: document.getElementById(i),
        translateX: [0, -20],
        opacity: [1, 0],
        duration: 500,
        easing: 'easeInOutExpo',
      })
      observer.observe(firstYearRef.current[i - 20])
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
            height: 300,
            marginLeft: '10vw',
            marginRight: 100,
            backgroundColor: COLORS.white,
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
              id={20}
              className={20}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <img
                  style={{
                    width: 20,
                    marginRight: 5,
                  }}
                  src={js}
                />
                <div>Langage · JavaScript</div>
              </div>
              <div style={{ color: COLORS.grey, paddingTop: 10 }}>
                Langage de base pour l'utilisation de React.
              </div>
            </div>
            <div
              ref={(el) => {
                firstYearRef.current[1] = el
              }}
              id={21}
              className={21}
            >
              <div style={styles.stepTitle}>
                <img
                  style={{
                    width: 20,
                    marginRight: 5,
                  }}
                  src={react}
                />
                <div>Framework · React</div>
              </div>
              <div style={{ color: COLORS.grey, paddingTop: 10 }}>
                Framework de dévelopement de site web interactif et optimisé.
              </div>
            </div>
            <div
              ref={(el) => {
                firstYearRef.current[2] = el
              }}
              id={22}
              className={22}
            >
              <div style={styles.stepTitle}>
                <img
                  style={{
                    width: 20,
                    marginRight: 5,
                  }}
                  src={firebase}
                />
                <div>Outils · Firebase</div>
              </div>
              <div style={{ color: COLORS.grey, paddingTop: 10 }}>
                Utilisation du stockage et de l'analytics de firebase.
              </div>
            </div>
            <div
              ref={(el) => {
                firstYearRef.current[3] = el
              }}
              style={{
                position: 'relative',
                width: 10,
                height: 10,
              }}
              id={23}
              className={23}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InternShip
