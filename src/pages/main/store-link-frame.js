/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/extensions */
/* eslint-disable prefer-const */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useRef, useState } from 'react'
import anime from 'animejs/lib/anime.es.js'

import { COLORS, SIZE, phone } from '../../export/style'
import { ReactComponent as Quote } from '../../svg/QUOTE.svg'
import appstore from '../../image/appstore.png'
import googlestore from '../../image/googlestore.png'

import { ReactComponent as Iphone } from '../../svg/IPHONE.svg'
import event from '../../image/EVENT.png'
import profil from '../../image/MAIN.png'
import step1 from '../../image/STEP1.png'
import step2 from '../../image/STEP2.png'
import step3 from '../../image/STEP3.png'
import splash from '../../image/SPLASH.png'
import Button from '../../components/button'
import ParticlesComponent from '../../components/particles'
import { googleStoreLink, iosStoreLink } from '../../export/link'

function Project() {
  const styles = {
    phone: {
      height: '80vh',
      zIndex: 10,
    },
  }

  const [os, setOs] = useState(undefined)
  const targetRef = useRef()

  useEffect(() => {
    setOs(window.navigator.platform)
    console.log('Effect')
    if (window.navigator.platform === 'iPhone') {
      window.location.replace(iosStoreLink)
    } else if (window.navigator.platform === 'Android') {
      window.location.replace(googleStoreLink)
    }
  }, [])

  return (
    <>
      <ParticlesComponent />
      {phone ? (
        <div
          style={{
            zIndex: 10,
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100vh',
              zIndex: 10,
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                fontSize: SIZE.xl * 1.5,
                fontFamily: 'SFProBold',
                zIndex: 10,
                fontWeight: 'bold',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    zIndex: 10,
                  }}
                >
                  <div>Frame It</div>
                  <div
                    style={{
                      borderRadius: 5,
                      background:
                        'linear-gradient(to bottom right, #93F5EC 20%, #A77BF3 84%)',
                      fontSize: SIZE.s,
                      color: COLORS.lightBlack,
                      zIndex: 10,
                      padding: 5,
                      marginLeft: 15,
                    }}
                  >
                    BETA
                  </div>
                </div>
              </div>
            </div>
            <img
              src={splash}
              style={{
                width: '55vw',
                zIndex: 10,
                marginTop: 40,
                marginBottom: 40,
              }}
              alt="website logo"
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100vw',
              }}
            >
              <Button
                onMouseDown={() => {
                  window.open(googleStoreLink)
                }}
              >
                <img
                  src={googlestore}
                  style={{
                    zIndex: 10,
                    width: '40vw',
                  }}
                  alt="website logo"
                />
              </Button>
              <Button
                onMouseDown={() => {
                  window.open(iosStoreLink)
                }}
              >
                <img
                  src={appstore}
                  style={{
                    zIndex: 10,
                    width: '40vw',
                  }}
                  alt="website logo"
                />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            height: phone ? 'auto' : '100vh',
            width: '100%',
            zIndex: 10,
            backgroundColor: COLORS.lightBlack,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            display: 'flex',
            flexDirection: phone ? 'column-reverse' : 'row',
          }}
        >
          <div
            style={{
              width: '42.5vh',
              display: 'flex',
              zIndex: 10,
              flexDirection: phone ? 'column' : 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              alignContent: 'center',
            }}
          >
            <img src={splash} style={styles.phone} alt="website logo" />
          </div>
          <div
            style={{
              width: phone ? 'auto' : 350,
              height: phone ? 'auto' : '75vh',
              paddingLeft: 40,
              fontSize: phone ? SIZE.xl * 1.5 : SIZE.xl * 2.4,
              fontFamily: 'SFProBold',
              zIndex: 10,
              fontWeight: 'bold',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  zIndex: 10,
                }}
              >
                <div>Frame It</div>
                <div
                  style={{
                    borderRadius: 5,
                    background:
                      'linear-gradient(to bottom right, #93F5EC 20%, #A77BF3 84%)',
                    fontSize: SIZE.s,
                    color: COLORS.lightBlack,
                    zIndex: 10,
                    padding: 5,
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
                  zIndex: 10,
                  paddingTop: 10,
                  width: phone ? '80%' : 350,
                }}
              >
                Frame It est un réseau social pour partager des photos avec vos
                amis. Vous pouvez créer ou rejoindre des événements, vous avez
                désormais un accès rapide et facile à l'ensemble de vos photos
                et de plus entièrement trié par l'application.
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  paddingTop: 20,
                }}
              >
                <Button
                  onMouseDown={() => {
                    window.open(googleStoreLink)
                  }}
                  padding={0}
                >
                  <img
                    src={googlestore}
                    style={{
                      zIndex: 10,
                      width: 200,
                    }}
                    alt="website logo"
                  />
                </Button>
                <Button
                  onMouseDown={() => {
                    window.open(iosStoreLink)
                  }}
                  padding={0}
                >
                  <img
                    src={appstore}
                    style={{
                      zIndex: 10,
                      width: 200,
                    }}
                    alt="website logo"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Project
