/* eslint-disable no-script-url */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/void-dom-elements-no-children */
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
import { Link } from 'react-router-dom'
import phone2 from '../../svg/PHONE.svg'
import back from '../../svg/BACK.svg'

import { COLORS, SIZE, phone } from '../../export/style'
import { ReactComponent as Quote } from '../../svg/QUOTE.svg'
import Firebase from '../../components/firebase'
// import phone from '../../svg/PHONE.svg'
import circle from '../../svg/CIRCLE4.svg'
import circle2 from '../../svg/CIRCLE2.svg'

import { ReactComponent as Icon } from '../../svg/DISCORD.svg'
import { ReactComponent as Icon2 } from '../../svg/TWITTER.svg'
import { ReactComponent as Icon3 } from '../../svg/GIT.svg'

import Chapter from '../../components/chapter'
import iphone from '../../svg/IPHONE.svg'
import Button from '../../components/button'

function Contact() {
  const [discord, setDiscord] = useState(false)
  const [twitter, setTwitter] = useState(false)
  const [git, setGit] = useState(false)

  useEffect(
    phone
      ? () => {}
      : () => {
          anime({
            targets: document.getElementsByClassName('circle'),
            rotate: [-360, 360], // rotation will be distributed from -360deg to 360deg evenly between all elements
            easing: 'linear',
            duration: 10000,
            loop: true,
          })
          anime({
            targets: document.getElementsByClassName('circle2'),
            rotate: [360, -360], // rotation will be distributed from -360deg to 360deg evenly between all elements
            easing: 'linear',
            duration: 10000,
            loop: true,
          })
        },
    []
  )
  return (
    <div>
      <div
        style={{
          height: '100vh',
          width: '100%',
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div>
          <img
            src={circle2}
            className="circle"
            style={{
              position: 'absolute',
              height: phone ? 'auto' : '69vh',
              width: phone ? '90%' : 'auto',
              zIndex: 10,
              right: '50vw',
              top: '50vh',
              transform: 'translate(50%, -50%)',
            }}
            alt="website logo"
          />
          <img
            src={circle}
            className="circle2"
            style={{
              height: phone ? 'auto' : '69vh',
              width: phone ? '90%' : 'auto',
              zIndex: 10,
              left: '50vw',
              top: '50vh',
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontFamily: 'SFProBold',
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              fontSize: phone ? SIZE.m : SIZE.xl,
            }}
          >
            <div>
              Créons quelque
              <br /> chose ensemble!
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: phone ? 10 : 20,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: phone ? 10 : 0,
                }}
              >
                <Button
                  invert
                  onMouseDown={() => {
                    window.open(
                      'https://discordapp.com/users/853366052918788107'
                    )
                  }}
                  setHover={setDiscord}
                  hover={discord}
                >
                  <Icon
                    style={{
                      height: phone ? 15 : 20,
                    }}
                    fill={discord ? COLORS.white : COLORS.lightBlack}
                  />
                </Button>
                <Button
                  invert
                  setHover={setGit}
                  hover={git}
                  onMouseDown={() => {
                    window.open('https://twitter.com/AdrienVerhaegh2')
                  }}
                >
                  <Icon2
                    style={{ height: 20 }}
                    fill={git ? COLORS.white : COLORS.lightBlack}
                  />
                </Button>
                <Button
                  invert
                  setHover={setTwitter}
                  hover={twitter}
                  onMouseDown={() => {
                    window.open('https://github.com/Neloxe')
                  }}
                >
                  <Icon3
                    style={{ height: 20 }}
                    fill={twitter ? COLORS.white : COLORS.lightBlack}
                  />
                </Button>
              </div>
            </div>
            <div
              style={{
                fontSize: phone ? SIZE.s : SIZE.m,
                fontFamily: 'SFProMedium',
                paddingTop: phone ? 15 : 40,
                textAlign: 'center',
              }}
            >
              adrienvrh@proton.me
              <br />
              +33 6 51 92 90 58
            </div>
            <div
              style={{
                fontSize: SIZE.m * 0.8,
                color: COLORS.grey,
                fontFamily: 'SFProMedium',
                paddingTop: phone ? 10 : 20,
              }}
            >
              France, 59000 Lille
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
