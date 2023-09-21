/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { COLORS, SIZE, phone } from '../../export/style'
import pdp from '../../image/PDP.jpg'

export default function Bio() {
  return (
    <div
      style={{
        backgroundColor: COLORS.lightBlack,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        zIndex: 10,
        alignItems: 'center',
      }}
    >
      <div
        style={{
          fontFamily: 'SFProBold',
          fontSize: phone ? SIZE.m : SIZE.xl * 1.5,
          lineHeight: phone ? 1 : 0.975,
          zIndex: 10,
          justifyContent: 'center',
          width: phone ? '90%' : 775,
          textAlign: phone ? '' : 'center',
        }}
      >
        {/* Student at ISEN, graduate school of science and engineering. I’m
    looking for a work study program in IT for my two last year of
    engineering school. */}
        Etudiant à l'ISEN, école supérieure des sciences et d'ingénierie. Je
        suis à la recherche d'une alternance en informatique pour mes deux
        dernières années d'école d'ingénieur.
      </div>
      <img
        src={pdp}
        style={{
          width: 175,
          borderRadius: 100,
          zIndex: 10,
          aspectRatio: 1,
          boxShadow: 'inset 0px 0px 15px #000000',
          margin: 60,
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          fontFamily: 'SFProMedium',
          fontSize: SIZE.m,
          justifyContent: 'center',
          zIndex: 10,
          color: COLORS.grey,
          lineHeight: phone ? 1 : 0.975,
          width: phone ? '90%' : 550,
        }}
      >
        {/* I have been programming for 5 years now and I'm working on a mobile
    app project alongside my studies. <br />
    <br />I have already worked in many team projects, notably at RUBIKA
    as a lead developer. */}
        Je m'appelle Adrien Verhaeghe, je suis un étudiant passionné en
        informatique et en nouvelles technologies. Je programme dans différents
        langages depuis 5 ans maintenant. <br />
        <br />
        Je travaille en ce moment sur une application mobile parallèlement à mes
        études. <br />
        <br />
        J'ai déjà travaillé sur de nombreux projets d'équipe, notamment chez
        RUBIKA en tant que lead developer.
      </div>
    </div>
  )
}
