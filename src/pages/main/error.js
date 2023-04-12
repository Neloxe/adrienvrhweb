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
import phone from '../../svg/PHONE.svg'
import back from '../../svg/BACK.svg'

import { COLORS, SIZE } from '../../export/style'
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

function Error() {
  const [discord, setDiscord] = useState(false)
  const [twitter, setTwitter] = useState(false)
  const [git, setGit] = useState(false)

  useEffect(() => {
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
  }, [])
  return (
    <div>
      <div
        style={{
          height: '100vh',
          width: '100%',
          position: 'relative',
          backgroundColor: COLORS.lightBlack,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div>
          <img
            src={circle}
            className="circle"
            style={{
              position: 'absolute',
              height: '50vh',
              right: '50vw',
              top: '50vh',
              transform: 'translate(50%, -50%)',
            }}
            alt="website logo"
          />
          <img
            src={circle2}
            className="circle2"
            style={{
              height: '50vh',
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
              transform: 'translate(0, -10px)',
              fontSize: SIZE.xl,
            }}
          >
            {/* <div style={{ textAlign: 'center' }}>
              Il semble <br />
              que vous vous
              <br /> soyez perdus !
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: 20,
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'row' }} />
            </div> */}
            <div
              style={{
                fontSize: SIZE.m,
                fontFamily: 'SFProMedium',
                paddingTop: 40,
              }}
            >
              Cette adresse n'existe pas.
            </div>
            <div
              style={{
                fontSize: SIZE.m * 0.8,
                color: COLORS.grey,
                fontFamily: 'SFProMedium',
                paddingTop: 20,
              }}
            >
              Error 404
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error
