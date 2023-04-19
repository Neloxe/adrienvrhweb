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
      console.log(entries.length)
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
      height: 190,
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
      {/* <Mouse target={bcdRef} ref={mouseRef} /> */}

      <div
        style={{
          width: '70%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* <div
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'SFProBold',
              fontSize: SIZE.xl * 1.5,
              lineHeight: 0.975,
              justifyContent: 'center',
              width: 775,
              textAlign: 'center',
            }}
          >
            Student at ISEN, graduate school of science and engineering. I’m
            looking for a work study program in IT for my two last year of
            engineering school.
            Etudiant à l'ISEN, école supérieure des sciences et d'ingénierie. Je
            suis à la recherche d'une alternance en informatique pour mes deux
            dernières années d'école d'ingénieur.
          </div>
          <img
            src={pdp}
            style={{
              width: 175,
              borderRadius: 100,
              boxShadow: 'inset 0px 0px 15px #000000',
              margin: 60,
            }}
          />
          <div
            style={{
              fontFamily: 'SFProMedium',
              fontSize: SIZE.m,
              lineHeight: 0.9,
              justifyContent: 'center',
              color: COLORS.grey,
              width: 550,
            }}
          >
            I have been programming for 5 years now and I'm working on a mobile
            app project alongside my studies. <br />
            <br />I have already worked in many team projects, notably at RUBIKA
            as a lead developer.
            Je programme depuis 5 ans maintenant et je travaille sur un projet
            d'application mobile parallèlement à mes études. <br /> <br />
            J'ai déjà travaillé sur de nombreux projets d'équipe, notamment chez
            RUBIKA en tant que lead developer.
          </div>
        </div> */}
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
                marginLeft: '10vw',
                marginRight: 100,
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
