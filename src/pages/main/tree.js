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
import { COLORS, SIZE, phone } from '../../export/style'
import pdp from '../../image/PDP.jpg'
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
      zIndex: 10,
      width: 750,
    },
    pdp: {
      border: 'solid',
      borderWidth: 5,
      borderRadius: 50,
      marginRight: 30,
      width: 300,
      zIndex: 10,
      height: 300,
    },
    step: {
      paddingTop: 30,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      zIndex: 10,

      paddingLeft: 20,
      transform: 'translate(-152px, 0)',
    },
    stepText: {
      fontFamily: 'SFProBold',
      fontSize: SIZE.m * 0.9,
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      transform: 'translate(0, 15px)',
      marginLeft: 25,
    },
    stepIconBorder: {
      backgroundColor: COLORS.lightBlack,
      borderRadius: 1000,
      display: 'flex',
      zIndex: 10,
      padding: 10,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
    },
    stepTitle: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      zIndex: 10,

      paddingTop: 20,
    },
    bigStep: {
      backgroundColor: COLORS.white,
      width: 750,
      zIndex: 10,
      height: 190,
      borderRadius: '35px',
      cursor: 'pointer',
    },
  }

  return (
    <div
      style={{
        width: '100%',
        paddingTop: 80,
        zIndex: 10,
        backgroundColor: COLORS.lightBlack,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      }}
    >
      <div
        style={{
          width: '70%',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 10,
          alignItems: 'center',
        }}
      >
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
                height: 200,
                marginLeft: phone ? 0 : '10vw',
                marginRight: phone ? 0 : 100,
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 45.65%)', // backgroundColor: COLORS.white,
              }}
            />
          </div>
          <div
            style={{
              flexDirection: 'column',
            }}
          />
        </div>
        <div
          style={styles.bigStep}
          onClick={() => {
            window.open('https://www.junia.com/fr/')
          }}
        >
          <div
            style={{
              display: 'flex',
              padding: 10,
              flexDirection: phone ? 'column' : 'row',
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
                  JUNIA est l'école des transitions qui contribue aux grands
                  enjeux : nourrir la planète, développer la transformation
                  numérique et industrielle, accélérer la transition énergétique
                  et urbaine, renforcer les technologies de la santé et du
                  bien-vivre.
                </div>
              </div>
            </div>
            <div
              style={{
                borderRadius: '32.5px',
                backgroundImage:
                  'linear-gradient(336deg, rgba(147,245,236,1) 0%, rgba(167,123,243,1) 100%)',
                width: '200px',
                height: '170px',
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
        <div
          ref={bcdRef}
          style={styles.bigStep}
          onClick={() => {
            window.open('https://bettercalldave.io/')
          }}
        >
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
                minHeight: '170px',
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
                  BetterCallDave est une jeune entreprise reconnue dans le
                  domaine des logiciels intégrant de la musique, ils conçoivent
                  des interfaces connectées pensées pour l’utilisateur. Durant
                  ce stage très formateur, j'ai appris à utiliser de nombreuses
                  nouvelles technologies et de nombreux supports.
                </div>
              </div>
            </div>
          </div>
        </div>
        <InternShip lastRef={lastIntershipRef} />
        <FirstYear firstRef={firstFirstYearRef} lastRef={lastFirstYearRef} />
        <div
          ref={rubikaRef}
          style={styles.bigStep}
          onClick={() => {
            window.open('https://rubika-edu.com/ecole/#classements')
          }}
        >
          <div
            style={{
              display: 'flex',
              padding: 10,
              flexDirection: 'row',
              zIndex: 10,
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
                zIndex: 10,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  padding: 15,
                  zIndex: 10,
                  fontSize: SIZE.m * 0.9,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    zIndex: 10,
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
                      zIndex: 10,
                    }}
                  />
                  <div style={{ fontFamily: 'SFProBold', zIndex: 10 }}>
                    École game design · RUBIKA{' '}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: 'SFProBold',
                    color: COLORS.grey,
                    zIndex: 10,
                  }}
                >
                  RUBIKA est née du regroupement de trois écoles pionnières de
                  la création numérique : l’Institut Supérieur de Design,
                  Supinfocom et Supinfogame. Ces écoles se sont distinguées par
                  la mise en place d’une pédagogie au plus proche des besoins
                  des entreprises.
                </div>
              </div>
            </div>
            <div
              style={{
                borderRadius: '32.5px',
                backgroundImage:
                  'linear-gradient(336deg, rgba(147,245,236,1) 0%, rgba(167,123,243,1) 100%)',
                width: '200px',
                height: '170px',
                display: 'flex',
                alignItems: 'center',
                zIndex: 10,
                alignContent: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={rubika}
                style={{ width: '150px', padding: 100, zIndex: 10 }}
              />
            </div>
          </div>
        </div>
        <RubYear />
      </div>
    </div>
  )
}

export default Tree
