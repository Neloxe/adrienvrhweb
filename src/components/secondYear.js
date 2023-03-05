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
import commit from '../image/COMMIT.png'
import rocket from '../image/ROCKET.png'
import cpp from '../svg/C++.svg'
import js from '../svg/JS.svg'
import bcd from '../image/BCD.png'
import science from '../image/SCIENCES.png'
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
    transform: 'translate(-151px, 0)',
  },
  stepText: {
    fontFamily: 'SFProBold',
    fontSize: SIZE.m * 0.9,
    width: 450,
    display: 'flex',
    flexDirection: 'column',
    transform: 'translate(0, 11px)',
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

function SecondYear({ lastRef }) {
  const secondYearRef = useRef([])
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
    for (let i = 0; i < secondYearRef.current.length; i += 1) {
      anime({
        targets: document.getElementById(i),
        translateX: [0, -20],
        opacity: [1, 0],
        duration: 500,
        easing: 'easeInOutExpo',
      })
      observer.observe(secondYearRef.current[i])
    }
    anime({
      targets: lastRef.current,
      translateX: [0, -20],
      opacity: [1, 0],
      duration: 500,
      easing: 'easeInOutExpo',
    })
    observer.observe(lastRef.current)
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
            height: 800,
            marginLeft: 100,
            marginRight: 100,
            backgroundColor: COLORS.white,
            // backgroundImage:
            //   'linear-gradient(336deg, rgba(147,245,236,1) 0%, rgba(167,123,243,1) 100%)',
          }}
        />
      </div>
      <div
        style={{
          flexDirection: 'column',
          height: 800,
        }}
      >
        <div
          style={{
            ...styles.step,
          }}
        >
          <div
            style={{
              ...styles.stepIconBorder,
            }}
          >
            <img
              style={{
                width: 40,
              }}
              src={commit}
            />
          </div>
          <div
            ref={(el) => {
              secondYearRef.current[0] = el
            }}
            id={0}
            className={0}
            style={{
              ...styles.stepText,
            }}
          >
            <div>Deuxième année · CIR</div>
            <div style={{ color: COLORS.grey, paddingTop: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
              viverra accumsan in nisl nisi scelerisque eu ultrices.{' '}
            </div>
          </div>
        </div>
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
                secondYearRef.current[1] = el
              }}
              id={1}
              className={1}
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
                  src={cpp}
                />
                <div>Langage · C++</div>
              </div>
              <div style={{ color: COLORS.grey, paddingTop: 10 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Purus viverra accumsan in nisl nisi scelerisque eu ultrices.{' '}
              </div>
            </div>
            <div
              ref={(el) => {
                secondYearRef.current[2] = el
              }}
              id={2}
              className={2}
            >
              <div style={styles.stepTitle}>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Purus viverra accumsan in nisl nisi scelerisque eu ultrices.{' '}
              </div>
            </div>
          </div>
        </div>
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
              src={science}
            />
          </div>
          <div style={{ ...styles.stepText }}>
            <div
              ref={(el) => {
                secondYearRef.current[3] = el
              }}
              id={3}
              className={3}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <div>Mathématiques</div>
              </div>
              <div style={{ color: COLORS.grey, paddingTop: 10 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Purus viverra accumsan in nisl nisi scelerisque eu ultrices.{' '}
              </div>
            </div>
            <div ref={lastRef} id={4} className={4}>
              <div style={styles.stepTitle}>
                <div>Physique</div>
              </div>
              <div style={{ color: COLORS.grey, paddingTop: 10 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Purus viverra accumsan in nisl nisi scelerisque eu ultrices.{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondYear
