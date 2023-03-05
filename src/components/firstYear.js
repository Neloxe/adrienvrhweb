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
import pdp from '../image/PDP.png'
import student from '../svg/STUDENT.svg'
import junia from '../image/JUNIA.png'
import commit from '../image/COMMIT.png'
import rocket from '../image/ROCKET.png'
import c from '../svg/C.svg'
import js from '../svg/JS.svg'
import html from '../svg/HTML.svg'
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
    transform: 'translate(-151px, 0)',
  },
  stepText: {
    fontFamily: 'SFProBold',
    fontSize: SIZE.m * 0.9,
    display: 'flex',
    width: 450,
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

function FirstYear({ firstRef, lastRef }) {
  const firstYearRef = useRef([])
  const mouseRef = useRef()

  useEffect(() => {
    firstRef = firstYearRef.current[0]
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
    for (let i = 10; i < 10 + firstYearRef.current.length; i += 1) {
      anime({
        targets: document.getElementById(i),
        translateX: [0, -20],
        opacity: [1, 0],
        duration: 500,
        easing: 'easeInOutExpo',
      })
      observer.observe(firstYearRef.current[i - 10])
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
            height: 1100,
            marginLeft: 100,
            marginRight: 100,
            backgroundColor: COLORS.white,
          }}
        />
      </div>
      <div
        style={{
          flexDirection: 'column',
          height: 1100,
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
              firstYearRef.current[0] = el
            }}
            id={10}
            className={10}
            style={{
              ...styles.stepText,
            }}
          >
            <div>Première année · CIR</div>
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
                firstYearRef.current[1] = el
              }}
              id={11}
              className={11}
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
                  src={c}
                />
                <div>Langage · C</div>
              </div>
              <div style={{ color: COLORS.grey, paddingTop: 10 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Purus viverra accumsan in nisl nisi scelerisque eu ultrices.{' '}
              </div>
            </div>
            <div
              ref={(el) => {
                firstYearRef.current[2] = el
              }}
              id={12}
              className={12}
            >
              <div style={styles.stepTitle}>
                <img
                  style={{
                    width: 20,
                    marginRight: 5,
                  }}
                  src={php}
                />
                <div>Langage · PHP</div>
              </div>
              <div style={{ color: COLORS.grey, paddingTop: 10 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Purus viverra accumsan in nisl nisi scelerisque eu ultrices.{' '}
              </div>
            </div>
            <div
              ref={(el) => {
                firstYearRef.current[3] = el
              }}
              id={13}
              className={13}
            >
              <div style={styles.stepTitle}>
                <img
                  style={{
                    width: 20,
                    marginRight: 5,
                  }}
                  src={html}
                />
                <div>Langage · HTML</div>
              </div>
              <div style={{ color: COLORS.grey, paddingTop: 10 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Purus viverra accumsan in nisl nisi scelerisque eu ultrices.{' '}
              </div>
            </div>
            <div
              ref={(el) => {
                firstYearRef.current[4] = el
              }}
              id={14}
              className={14}
            >
              <div style={styles.stepTitle}>
                <img
                  style={{
                    width: 20,
                    marginRight: 5,
                  }}
                  src={css}
                />
                <div>Langage · CSS</div>
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
                firstYearRef.current[5] = el
              }}
              id={15}
              className={15}
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
            <div ref={lastRef} id={16} className={16}>
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

export default FirstYear
