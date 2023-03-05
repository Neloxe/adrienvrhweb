/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js'
import { COLORS } from '../export/style'
import projets from '../svg/PROJETS.svg'
import bio from '../svg/BIO.svg'
import contact from '../svg/CONTACT.svg'
import rotate from '../svg/ROTATE.svg'

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
    padding: 7.5,
  },
  selected: {
    backgroundColor: 'rgba(19, 19, 19, 1)',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(49, 49, 49, 1)',
  },
}

function Head() {
  let oldScroll = 0
  let hide = false

  useEffect(() => {
    anime.timeline({ loop: false }).add({
      targets: '.header',
      opacity: [0, 1],
      translateZ: 0,
      delay: 3250,
      duration: 1500,
      easing: 'easeOutExpo',
    })
    window.onscroll = function () {
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
      onClick={() => {}}
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
              style={{
                fontFamily: 'SFProBold',
                ...styles.border,
                // backgroundColor: COLORS.white,
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
            <div style={{ ...styles.border, marginRight: 20 }}>
              <img
                src={bio}
                style={{ height: 20, marginRight: 7.5 }}
                alt="website logo"
              />
              Bio
            </div>
            <div style={{ ...styles.border, marginRight: 20 }}>
              <img
                src={projets}
                style={{ height: 20, marginRight: 7.5 }}
                alt="website logo"
              />
              Projets
            </div>
            <div style={{ ...styles.border }}>
              <img
                src={contact}
                style={{ height: 20, marginRight: 7.5 }}
                alt="website logo"
              />
              Contact
            </div>
          </div>
        </div>
        <div
          style={{ ...styles.block, display: 'flex', alignSelf: 'flex-end' }}
        >
          <div style={{ ...styles.border }}>
            <img
              src={rotate}
              style={{ height: 20, marginRight: 7.5 }}
              alt="website logo"
            />
            fr/en
          </div>
        </div>
      </div>

      {/* <div style={{ width: '100%', height: 1, backgroundColor: COLORS.grey }} /> */}
    </div>
  )
}

export default Head
