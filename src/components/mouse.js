/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/extensions */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useImperativeHandle, useRef, forwardRef } from 'react'
import anime from 'animejs/lib/anime.es.js'
import { COLORS, SIZE } from '../export/style'
import projets from '../svg/PROJETS.svg'
import bio from '../svg/BIO.svg'
import contact from '../svg/CONTACT.svg'
import rotate from '../svg/ROTATE.svg'
import pdp from '../image/PDP.png'
import student from '../svg/STUDENT.svg'
import junia from '../image/JUNIA.png'
import commit from '../svg/COMMIT.svg'
import rocket from '../image/ROCKET.png'
import cpp from '../svg/C++.svg'
import js from '../svg/JS.svg'
import bcd from '../image/BCD.png'
import science from '../image/SCIENCES.png'
import react from '../svg/REACT.svg'
import { ReactComponent as Icon } from '../svg/MOUSE.svg'
// import anime from 'animejs/lib/anime.es.js'

const styles = {
  pdpZone: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 40,
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
}

const Mouse = forwardRef((props, ref) => {
  function Entry() {
    console.log('entry')
    anime({
      targets: document.getElementById('mouse-follow'),
      opacity: [0, 1],
      duration: 250,
      easing: 'easeInOutExpo',
    })
  }
  function Exit() {
    console.log('exit')
    anime({
      targets: document.getElementById('mouse-follow'),
      opacity: [1, 0],
      duration: 250,
      easing: 'easeInOutExpo',
    })
  }
  useImperativeHandle(ref, () => ({ hover: Entry, exit: Exit }))
  useEffect(() => {
    props.target.current.addEventListener('mouseover', () => {
      Entry()
    })
    props.target.current.addEventListener('mouseout', () => {
      Exit()
    })
    window.addEventListener('mousemove', (e) => {
      const mouseFollow = document.getElementById('mouse-follow')

      const x = e.pageX
      const y = e.pageY

      mouseFollow.style.top = `${y}px`
      mouseFollow.style.left = `${x}px`
    })
  }, [])

  return (
    <div
      id="mouse-follow"
      style={{
        opacity: 0,
        position: 'absolute',
        zIndex: 99,
        borderRadius: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: COLORS.lightBlack,
        transform: 'translate(-50%,-50%)',
        padding: 10,
      }}
    >
      <Icon
        className="mouse"
        style={{
          textColor: COLORS.oxfordBlue,
          width: 40,
          height: 40,
          fill: COLORS.white,
        }}
      />
    </div>
  )
})

export default Mouse
