/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/extensions */
/* eslint-disable prefer-const */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js'
import Lottie from 'lottie-react'
import phone from '../../svg/PHONE.svg'
import back from '../../svg/BACK.svg'
import { COLORS, SIZE } from '../../export/style'
import mouse from '../../lottie/MOUSE.json'

function Home() {
  let scroll = false

  useEffect(() => {
    let element = document.getElementsByClassName('text-animation')[0]
    element.innerHTML = element.textContent.replace(
      /\S/g,
      '<span class="letter">$&</span>'
    )
    anime.timeline({ loop: false }).add({
      targets: '.text-animation .letter',
      scale: [3, 1],
      opacity: [0, 1],
      translateZ: 0,
      duration: 10,
      easing: 'easeOutExpo',
      delay: (elem, index) => index * 100,
    })
    anime({
      targets: '.text-animation',
      scale: [2, 1],
      duration: 1500,
      easing: 'easeOutExpo',
    })
    anime({
      targets: '.bar',
      scale: [0, 1],
      delay: 1500,
      duration: 250,
      easing: 'linear',
    })
    let element2 = document.getElementsByClassName('text-animation2')[0]
    element2.innerHTML = element2.textContent.replace(
      /\S/g,
      '<span class="letter2">$&</span>'
    )
    anime.timeline({ loop: false }).add({
      targets: '.text-animation2 .letter2',
      opacity: [0, 0],
      duration: 10,
    })
    setTimeout(() => {
      anime.timeline({ loop: false }).add({
        targets: '.text-animation2 .letter2',
        scale: [3, 1],
        opacity: [0, 1],
        duration: 10,
        easing: 'easeOutExpo',
        delay: (elem, index) => index * 100,
      })
      anime({
        targets: '.text-animation2',
        scale: [2, 1],
        duration: 1500,
        easing: 'easeOutExpo',
      })
      anime({
        targets: document.getElementsByClassName('mouse'),
        opacity: [0, 1],
        delay: 2000,
        duration: 500,
        easing: 'easeOutExpo',
      })
      setTimeout(() => {
        scroll = false
      }, 2000)
    }, 1750)

    document.addEventListener('scroll', (event) => {
      if (!scroll) {
        scroll = true
        anime({
          targets: document.getElementsByClassName('mouse'),
          opacity: [1, 0],
          translateY: [0, 40],
          duration: 500,
          easing: 'easeOutExpo',
        })
      }
    })
  }, [])

  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        backgroundColor: COLORS.lightBlack,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          // alignSelf: 'center',
          justifyContent: 'flex-start',
          fontFamily: 'JetBrainsMono',
          flexDirection: 'column',
        }}
      >
        <div
          className="text-animation"
          style={{
            paddingLeft: 30,
            lineHeight: 0.85,
            letterSpacing: '-15px',
            fontSize: 200,
            width: 1400,
            zIndex: 1,
          }}
        >
          Student <br /> Developer
        </div>
        <div
          className="bar"
          style={{
            position: 'relative',
            marginTop: 15,
            width: '70%',
            height: 2,
            // backgroundColor: COLORS.white,
            backgroundImage:
              'linear-gradient(336deg, rgba(147,245,236,1) 0%, rgba(167,123,243,1) 100%)',
          }}
        />
        <div
          className="text-animation2"
          id={40}
          style={{
            paddingLeft: 40,
            lineHeight: 0.85,
            zIndex: 1,
            fontSize: SIZE.m,
            fontFamily: 'SFProBold',
            paddingTop: 20,
          }}
        >
          Adrien Verhaeghe
        </div>
        {/* <img src={phone} style={styles.phone} alt="website logo" /> */}
      </div>
      <div
        className="mouse"
        style={{ position: 'absolute', bottom: 10, opacity: 0, left: '50%' }}
      >
        <Lottie style={{ width: 60 }} animationData={mouse} />
      </div>
    </div>
  )
}

export default Home
