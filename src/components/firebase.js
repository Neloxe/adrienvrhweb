/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useRef } from 'react'
import anime from 'animejs/lib/anime.es.js'
import { COLORS } from '../export/style'
import firebase from '../lottie/FIREBASE.json'

function Firebase() {
  return (
    <div
      style={{
        backgroundColor: COLORS.orange,
        height: 50,
        width: 50,
      }}
    >
      {/* <Lottie style={{ width: 100 }} animationData={firebase} /> */}
    </div>
  )
}

export default Firebase
