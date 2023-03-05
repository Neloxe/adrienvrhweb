/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useRef } from 'react'
import anime from 'animejs/lib/anime.es.js'
import { COLORS } from '../export/style'

function Chapter({ text, logo }) {
  const chapterRef = useRef()
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          console.log('enter')
          anime({
            targets: document.getElementsByClassName('icon'),
            translateY: [-20, 0],
            opacity: [0, 1],
            duration: 500,
            delay: 100,
            easing: 'easeInOutExpo',
          })
        } else {
          console.log('exit')
          anime({
            targets: document.getElementsByClassName('icon'),
            translateY: [0, -20],
            opacity: [1, 0],
            duration: 500,
            easing: 'easeInOutExpo',
          })
        }
      }
    })
    anime({
      targets: document.getElementsByClassName('icon'),
      translateY: [0, -20],
      opacity: [1, 0],
      duration: 500,
      easing: 'easeInOutExpo',
    })
    observer.observe(chapterRef.current)
  }, [])

  return (
    <div style={{ zIndex: 99, backgroundColor: COLORS.black }}>
      <div
        style={{
          width: '100%',
          height: 1,
          zIndex: 10,
          backgroundColor: COLORS.grey,
        }}
      />
      <div
        style={{
          width: '100%',
          height: 100,
          zIndex: 99,
          backgroundColor: COLORS.lightBlack,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          className="icon"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <img
            src={logo}
            style={{
              height: 20,
            }}
            alt="website logo"
          />
          <div
            ref={chapterRef}
            style={{
              paddingTop: 5,
              fontFamily: 'SFProBold',
              textAlign: 'center',
            }}
          >
            {text}
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: 1,
          backgroundColor: COLORS.grey,
        }}
      />
    </div>
  )
}

export default Chapter
