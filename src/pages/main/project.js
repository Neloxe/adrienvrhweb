/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/extensions */
/* eslint-disable prefer-const */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useRef } from 'react'
import anime from 'animejs/lib/anime.es.js'
import phone from '../../svg/PHONE.svg'
import back from '../../svg/BACK.svg'

import { COLORS, SIZE } from '../../export/style'
import { ReactComponent as Quote } from '../../svg/QUOTE.svg'
import Firebase from '../../components/firebase'
// import phone from '../../svg/PHONE.svg'
import store from '../../image/STORE.png'
import Chapter from '../../components/chapter'
import { ReactComponent as Iphone } from '../../svg/IPHONE.svg'

function Project() {
  const styles = {
    phone: {
      height: '80vh',
    },
  }

  const targetRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          anime({
            targets: document.getElementsByClassName('phoneDesc'),
            translateX: [-20, 0],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeInOutExpo',
          })
        } else {
          anime({
            targets: document.getElementsByClassName('phoneDesc'),
            translateX: [0, -20],
            opacity: [1, 0],
            duration: 500,
            easing: 'easeInOutExpo',
          })
        }
      }
    })
    anime({
      targets: document.getElementsByClassName('phoneDesc'),
      translateX: [0, -20],
      opacity: [1, 0],
      duration: 500,
      easing: 'easeInOutExpo',
    })
    observer.observe(targetRef.current)
  }, [])

  return (
    <div>
      <div
        style={{
          height: '100vh',
          width: '100%',
          backgroundColor: COLORS.lightBlack,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            width: '50%',
            height: 400,
            paddingTop: 40,
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'flex-start',
            fontFamily: 'SFProBold',
            fontSize: SIZE.xl,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            Le concept
            <div
              style={{
                fontSize: SIZE.m,
                color: COLORS.grey,
                paddingTop: 10,
                width: 350,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>{' '}
        </div>
        <div
          style={{
            width: '50%',
            height: 400,
            fontSize: (SIZE.xl * 2.4 * window.innerWidth) / 1440,
            fontFamily: 'SFProBold',
            fontWeight: 'bold',
            margin: 30,
            marginRight: '10%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignContent: 'flex-start',
            }}
          >
            <Quote
              style={{
                paddingTop: 10,
                paddingRight: 10,
                width: 35,
                height: 35,
                fill: '#93F5EC',
              }}
            />
          </div>
          <div>
            <div
              style={{
                background:
                  'linear-gradient(to bottom right, #93F5EC 20%, #A77BF3 84%)',
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent',
              }}
            >
              Créer & partager des moments avec vos amis sur le réseau
              événementiel.Plus qu’un étudiant.
            </div>
            <div
              style={{
                fontSize: SIZE.m,
                color: COLORS.grey,
                paddingTop: 10,
              }}
            >
              © Frame It, 2023.
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          height: '100vh',
          width: '100%',
          backgroundColor: COLORS.lightBlack,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            width: '42.5vh',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <img src={phone} style={styles.phone} alt="website logo" />
        </div>
        <div
          style={{
            width: 350,
            height: '75vh',
            paddingLeft: 40,
            fontSize: SIZE.xl * 2.4,
            fontFamily: 'SFProBold',
            fontWeight: 'bold',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignContent: 'flex-start',
            }}
          >
            {/* <Quote
              style={{
                paddingTop: 10,
                paddingRight: 10,
                width: 35,
                height: 35,
                fill: '#93F5EC',
              }}
            /> */}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <div
                style={
                  {
                    // background:
                    //   'linear-gradient(to bottom right, #93F5EC 20%, #A77BF3 84%)',
                    // '-webkit-background-clip': 'text',
                    // '-webkit-text-fill-color': 'transparent',
                  }
                }
              >
                Frame It
              </div>
              <div
                style={{
                  borderRadius: 5,
                  background:
                    'linear-gradient(to bottom right, #93F5EC 20%, #A77BF3 84%)',
                  fontSize: SIZE.s,
                  color: COLORS.lightBlack,
                  padding: 5,
                  // marginTop: 15,
                  marginLeft: 15,
                }}
              >
                BETA
              </div>
            </div>
            <div
              style={{
                fontSize: SIZE.m,
                color: COLORS.grey,
                paddingTop: 10,
                width: 350,
              }}
            >
              Frame It est un réseau social pour partager des photos avec vos
              amis. Vous pouvez créer ou rejoindre des événements, vous avez
              désormé un accès rapide et facile à l'ensemble de vos photos et de
              plus entièrement trié par l'application.
            </div>
            <img
              src={store}
              style={{ width: 350, paddingTop: 30 }}
              alt="website logo"
            />
          </div>
        </div>
      </div>
      <Chapter text="Captures">
        <Iphone
          style={{ height: 20, paddingLeft: 7.5, paddingRight: 7.5 }}
          fill={COLORS.white}
        />
      </Chapter>
      <div
        style={{
          height: '100vh',
          width: '100%',
          backgroundColor: COLORS.lightBlack,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'row',
            zIndex: 10,
          }}
        >
          <div
            style={{
              height: '80vh',
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
            <div
              className="phoneDesc"
              style={{
                display: 'flex',
                paddingTop: 80,

                flexDirection: 'column',
                fontFamily: 'SFProBold',
                fontSize: SIZE.xl,
                textAlign: 'end',
              }}
            >
              Invitez vos amis
              <div
                style={{
                  fontSize: SIZE.m,
                  color: COLORS.grey,
                  paddingTop: 10,
                  width: 300,
                  textAlign: 'end',
                }}
              >
                Créer des événements avec l'ensemble de vos contacts lors d'une
                soirée, d'un concert ou à n'importe quel moment.
              </div>
            </div>
          </div>
          <img src={phone} style={styles.phone} alt="website logo" />
          <img src={phone} style={styles.phone} alt="website logo" />
          <div
            style={{
              height: '80vh',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
            }}
          >
            <div
              className="phoneDesc"
              style={{
                display: 'flex',
                paddingBottom: 80,
                flexDirection: 'column',
                fontFamily: 'SFProBold',
                fontSize: SIZE.xl,
              }}
            >
              Partagez votre moment
              <div
                style={{
                  fontSize: SIZE.m,
                  color: COLORS.grey,
                  paddingTop: 10,
                  width: 300,
                }}
              >
                Le créateur de l'événement décide à quel moment les membres
                doivent prendre leurs photos.
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            width: 20,
            height: 20,
          }}
          ref={targetRef}
        />
      </div>
    </div>
  )
}

export default Project
