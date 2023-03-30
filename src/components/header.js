/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react'
import anime from 'animejs/lib/anime.es.js'
import { COLORS } from '../export/style'
import Button from './button'
import { ReactComponent as Projets } from '../svg/PROJETS.svg'
import { ReactComponent as Contact } from '../svg/CONTACT.svg'
import { ReactComponent as Bio } from '../svg/BIO.svg'
import { ReactComponent as Rotate } from '../svg/ROTATE.svg'

const styles = {
  header: {
    width: '100%',
    position: 'fixed',
    backgroundImage: 'linear-gradient(rgba(13, 13, 13, 1),rgba(13, 13, 13, 0))',
    background:
      'linear-gradient(180deg, rgba(2, 0, 36, 1) 50 %, rgba(7, 5, 26, 0.8113839285714286) 71 %, rgba(13, 13, 13, 0) 100 %)',
    left: 0,
    zIndex: 99,
    top: 0,
  },
  block: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginRight: 10,
  },
  border: {
    fontFamily: 'SFProBold',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    display: 'flex',
    padding: 9,
  },
  selected: {
    backgroundColor: COLORS.white,
    color: COLORS.lightBlack,
    borderRadius: 40,
    // borderColor: 'rgba(49, 49, 49, 1)',
  },
}

function Head() {
  let oldScroll = 0
  let hide = false
  const [project, setProject] = useState(false)
  const [contact, setContact] = useState(false)
  const [bio, setBio] = useState(false)
  const [rotate, setRotate] = useState(false)

  const projectElement = document.getElementById('project')
  const bioElement = document.getElementById('bio')
  const contactElement = document.getElementById('contact')

  useEffect(() => {
    anime.timeline({ loop: false }).add({
      targets: '.header',
      opacity: [0, 1],
      translateZ: 0,
      delay: 3250,
      duration: 1500,
      easing: 'easeOutExpo',
    })
    window.onscroll = function hover() {
      const newValue = window.pageYOffset
      if (oldScroll - newValue > 0 && hide === true) {
        hide = false
        anime.timeline({ loop: false }).add({
          targets: '.header',
          opacity: [0, 1],
          translateY: [-10, 0],
          duration: 500,
          easing: 'easeOutExpo',
        })
      } else if (oldScroll - newValue < 0 && hide === false) {
        hide = true
        anime.timeline({ loop: false }).add({
          targets: '.header',
          opacity: [1, 0],
          translateY: [0, -10],
          duration: 500,
          easing: 'easeOutExpo',
        })
      }
      oldScroll = newValue
    }
  }, [])

  return (
    <div
      className="header"
      style={{
        ...styles.header,
      }}
    >
      <div
        style={{
          padding: 20,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ ...styles.block, marginRight: 30 }}>
            <div
              onMouseDown={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              style={{
                cursor: 'pointer',
                fontFamily: 'SFProBold',
                ...styles.border,
                color: COLORS.lightBlack,
                borderRadius: 1000,
                backgroundImage:
                  'linear-gradient(336deg, rgba(147,245,236,1) 0%, rgba(167,123,243,1) 100%)',
                zIndex: 10,
              }}
            >
              <div>AV</div>
            </div>
          </div>
          <div style={{ ...styles.block }}>
            <Button
              onMouseDown={() => {
                bioElement.scrollIntoView({
                  behavior: 'smooth',
                  // block: 'end',
                  inline: 'end',
                })
              }}
              text="Bio"
              setHover={setBio}
              hover={bio}
            >
              <Bio
                style={{ height: 20, marginRight: 7.5 }}
                fill={bio ? COLORS.lightBlack : COLORS.white}
              />
            </Button>
            <Button
              onMouseDown={() => {
                projectElement.scrollIntoView({
                  behavior: 'smooth',
                  // block: 'end',
                  inline: 'end',
                })
              }}
              text="Projets"
              setHover={setProject}
              hover={project}
            >
              <Projets
                style={{ height: 20, marginRight: 7.5 }}
                fill={project ? COLORS.lightBlack : COLORS.white}
              />
            </Button>
            <Button
              onMouseDown={() => {
                contactElement.scrollIntoView({
                  behavior: 'smooth',
                  // block: 'end',
                  inline: 'end',
                })
              }}
              text="Contact"
              setHover={setContact}
              hover={contact}
            >
              <Contact
                style={{ height: 20, marginRight: 7.5 }}
                fill={contact ? COLORS.lightBlack : COLORS.white}
              />
            </Button>
          </div>
        </div>
        <div
          style={{ ...styles.block, display: 'flex', alignSelf: 'flex-end' }}
        >
          <Button text="fr/en" setHover={setRotate} hover={rotate}>
            <Rotate
              style={{ height: 20, marginRight: 7.5 }}
              fill={rotate ? COLORS.lightBlack : COLORS.white}
            />
          </Button>
        </div>
      </div>

      {/* <div style={{ width: '100%', height: 1, backgroundColor: COLORS.grey }} /> */}
    </div>
  )
}

export default Head
