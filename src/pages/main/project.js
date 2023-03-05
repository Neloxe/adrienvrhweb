/* eslint-disable react/no-unescaped-entities */
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
import { ReactComponent as Quote } from '../../svg/QUOTE.svg'
// import phone from '../../svg/PHONE.svg'

function Project() {
  const styles = {
    phone: {
      width: 300,
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
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div
        style={{
          width: '40%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <img src={phone} style={styles.phone} alt="website logo" />
      </div>
      <div
        style={{
          width: '60%',
          fontSize: SIZE.xl * 2.4,
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
            className="mouse"
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
            Créer & partager des moments avec vos amis sur le réseau social
            événementiel.
          </div>
          <div
            style={{
              fontSize: SIZE.m,
              color: COLORS.grey,
              paddingTop: 10,
            }}
          >
            {/* This is the single most mind-blowing application of machine learning
          I’ve ever seen. */}
            © Frame It, 2023.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
