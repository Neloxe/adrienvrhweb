/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { COLORS, SIZE } from '../../export/style'
import pdp from '../../image/PDP.png'

export default function Bio() {
  return (
    <div
      style={{
        backgroundColor: COLORS.black,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          fontFamily: 'SFProBold',
          fontSize: SIZE.xl * 1.5,
          lineHeight: 0.975,
          justifyContent: 'center',
          width: 775,
          textAlign: 'center',
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
          boxShadow: 'inset 0px 0px 15px #000000',
          margin: 60,
        }}
      />
      <div
        style={{
          fontFamily: 'SFProMedium',
          fontSize: SIZE.m,
          lineHeight: 0.9,
          justifyContent: 'center',
          color: COLORS.grey,
          width: 550,
        }}
      >
        {/* I have been programming for 5 years now and I'm working on a mobile
    app project alongside my studies. <br />
    <br />I have already worked in many team projects, notably at RUBIKA
    as a lead developer. */}
        Je programme depuis 5 ans maintenant et je travaille sur un projet
        d'application mobile parallèlement à mes études. <br /> <br />
        J'ai déjà travaillé sur de nombreux projets d'équipe, notamment chez
        RUBIKA en tant que lead developer.
      </div>
    </div>
  )
}
