/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable import/order */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/extensions */
/* eslint-disable prefer-const */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useRef } from 'react'
import { COLORS, SIZE } from '../../export/style'
import pdp from '../../image/PDP.png'
import student from '../../svg/STUDENT.svg'
import junia from '../../image/JUNIA.png'
import rubika from '../../image/RUBIKA.png'

import commit from '../../svg/COMMIT.svg'
import rocket from '../../image/ROCKET.png'
import cpp from '../../svg/C++.svg'
import js from '../../svg/JS.svg'
import bcd from '../../image/BCD.png'
import science from '../../image/SCIENCES.png'
import anime from 'animejs/lib/anime.es.js'
// import FirstYear from '../../components/firstYear'
import SecondYear from '../../components/secondYear'
import FirstYear from '../../components/firstYear'
import InternShip from '../../components/interShip'
import Mouse from '../../components/mouse'
import RubYear from '../../components/rubikaYear'

function Tree() {
  const bcdRef = useRef()
  const lastSecondYearRef = useRef()

  const rubikaRef = useRef()
  const lastFirstYearRef = useRef()
  const firstFirstYearRef = useRef()

  const lastIntershipRef = useRef()

  const mouseRef = useRef()

  function InterObs(animTarget, refToListen) {
    const Observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          anime({
            targets: animTarget,
            translateX: [-20, 0],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeInOutExpo',
          })
        } else {
          anime({
            targets: animTarget,
            translateX: [0, -20],
            opacity: [1, 0],
            duration: 500,
            easing: 'easeInOutExpo',
          })
        }
      }
    })
    Observer.observe(refToListen)
  }

  useEffect(() => {
    InterObs(lastSecondYearRef.current, bcdRef.current)
    InterObs(lastFirstYearRef.current, rubikaRef.current)
    // InterObs(lastIntershipRef.current, firstFirstYearRef.current)
  }, [])

  const styles = {
    pdpZone: {
      display: 'flex',
      flexDirection: 'row',
      paddingBottom: 40,
      width: 750,
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
    bigStep: {
      backgroundColor: COLORS.white,
      width: 750,
      height: 220,
      borderRadius: '35px',
    },
  }

  return (
    <div
      style={{
        width: '100%',
        paddingTop: 80,
        backgroundColor: COLORS.lightBlack,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      }}
    >
      <Mouse target={bcdRef} ref={mouseRef} />

      <div
        style={{
          width: '70%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            ...styles.pdpZone,
          }}
        >
          <img src={pdp} style={styles.pdp} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: 450,
            }}
          >
            <div
              style={{
                fontFamily: 'SFProMedium',
                fontSize: SIZE.xl * 2.5,
                lineHeight: 0.9,
                paddingBottom: 20,
              }}
            >
              Plus qu'un <br />
              étudiant.
            </div>
            <div
              style={{
                fontFamily: 'SFProMedium',
                color: COLORS.grey,
                fontSize: SIZE.xl,
                lineHeight: 0.9,
                width: 370,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </div>
          </div>
        </div>
        <div style={styles.bigStep}>
          <div
            style={{
              display: 'flex',
              padding: 10,
              flexDirection: 'row',
              alignItems: 'flex-start',
              alignContent: 'space-between',
              justifyContent: 'space-between',
              color: COLORS.black,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  padding: 15,
                  fontSize: SIZE.m * 0.9,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    paddingBottom: 10,
                  }}
                >
                  <img
                    src={student}
                    style={{
                      width: 20,
                      marginRight: 5,
                    }}
                  />
                  <div style={{ fontFamily: 'SFProBold' }}>
                    Grande école d’ingénieurs · ISEN Lille
                  </div>
                </div>
                <div style={{ fontFamily: 'SFProBold', color: COLORS.grey }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Purus viverra accumsan in
                  nisl nisi scelerisque eu ultrices.
                </div>
              </div>
            </div>
            <div
              style={{
                borderRadius: '32.5px',
                backgroundImage:
                  'linear-gradient(336deg, rgba(147,245,236,1) 0%, rgba(167,123,243,1) 100%)',
                width: '200px',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
              }}
            >
              <img src={junia} style={{ height: '125px', padding: 100 }} />
            </div>
          </div>
        </div>
        <SecondYear lastRef={lastSecondYearRef} />
        <div ref={bcdRef} style={styles.bigStep}>
          <div
            style={{
              display: 'flex',
              padding: 10,
              flexDirection: 'row',
              alignItems: 'flex-start',
              alignContent: 'space-between',
              justifyContent: 'space-between',
              color: COLORS.black,
            }}
          >
            <div
              style={{
                borderRadius: '32.5px',
                backgroundColor: COLORS.lightBlack,
                backgroundImage:
                  'linear-gradient(336deg, rgba(147,245,236,1) 0%, rgba(167,123,243,1) 100%)',
                minWidth: '200px',
                minHeight: '200px',
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={bcd}
                style={{
                  width: 175,
                  padding: 30,
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  padding: 15,
                  fontSize: SIZE.m * 0.9,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    paddingBottom: 10,
                  }}
                >
                  <img
                    src={student}
                    style={{
                      width: 20,
                      marginRight: 5,
                    }}
                  />
                  <div style={{ fontFamily: 'SFProBold' }}>
                    Stage · BetterCallDave
                  </div>
                </div>
                <div style={{ fontFamily: 'SFProBold', color: COLORS.grey }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Purus viverra accumsan in
                  nisl nisi scelerisque eu ultrices.
                </div>
              </div>
            </div>
          </div>
        </div>
        <InternShip lastRef={lastIntershipRef} />
        <FirstYear firstRef={firstFirstYearRef} lastRef={lastFirstYearRef} />
        <div ref={rubikaRef} style={styles.bigStep}>
          <div
            style={{
              display: 'flex',
              padding: 10,
              flexDirection: 'row',
              alignItems: 'flex-start',
              alignContent: 'space-between',
              justifyContent: 'space-between',
              color: COLORS.black,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  padding: 15,
                  fontSize: SIZE.m * 0.9,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    paddingBottom: 10,
                  }}
                >
                  <img
                    src={student}
                    style={{
                      width: 20,
                      marginRight: 5,
                    }}
                  />
                  <div style={{ fontFamily: 'SFProBold' }}>
                    École game design · RUBIKA{' '}
                  </div>
                </div>
                <div style={{ fontFamily: 'SFProBold', color: COLORS.grey }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Purus viverra accumsan in
                  nisl nisi scelerisque eu ultrices.
                </div>
              </div>
            </div>
            <div
              style={{
                borderRadius: '32.5px',
                backgroundImage:
                  'linear-gradient(336deg, rgba(147,245,236,1) 0%, rgba(167,123,243,1) 100%)',
                width: '200px',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
              }}
            >
              <img src={rubika} style={{ width: '150px', padding: 100 }} />
            </div>
          </div>
        </div>
        <RubYear />
      </div>
    </div>
  )
}

export default Tree
