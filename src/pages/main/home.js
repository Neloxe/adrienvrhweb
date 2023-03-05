/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/extensions */
/* eslint-disable prefer-const */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js'
import phone from '../../svg/PHONE.svg'
import back from '../../svg/BACK.svg'
import { COLORS, SIZE } from '../../export/style'

function Home() {
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
    }, 1750)

    // document.addEventListener('mousemove', (event) => {
    //   const originX = window.innerWidth / 2
    //   const originY = window.innerHeight / 2

    //   let X =
    //     originX +
    //     (event.clientX > originX
    //       ? event.clientX - originX
    //       : -(originX - event.clientX)) *
    //       0.05
    //   let Y =
    //     originY +
    //     (event.clientY > originY
    //       ? event.clientY - originY
    //       : -(originY - event.clientY)) *
    //       0.05
    //   anime({
    //     targets: phonePos,
    //     animX: X,
    //     animY: Y,
    //     round: 0.5,
    //     // easing: 'linear',
    //     duration: 200,
    //     update() {
    //       // setPhonePosX(phonePos.animX)
    //       // setPhonePosY(phonePos.animY)
    //     },
    //   })
    // })
  }, [])

  const styles = {
    phone: {
      width: 300,
      transform: 'translateX(-50px)',
      // position: 'absolute',
      // left: phonePosX,
      // top: phonePosY,
      // marginLeft: 'auto',
      // marginRight: 'auto',
      // transform: 'translate(-50%,-50%)',
    },
  }

  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        backgroundColor: COLORS.lightBlack,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      }}
    >
      {/* <img
        src={back}
        style={{
          objectFit: 'cover',

          objectPosition: '5px 10%',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        alt="website logo"
      /> */}
      <div
        style={{
          display: 'flex',
          alignSelf: 'center',
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
            zIndex: 1,
            // background:
            //   'linear-gradient(to bottom right, #93F5EC 20%, #A77BF3 84%)',
            // '-webkit-background-clip': 'text',
            // '-webkit-text-fill-color': 'transparent',
          }}
        >
          Student <br style={{ backgroundColor: COLORS.grey }} /> Developer
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
    </div>
  )
}

export default Home
