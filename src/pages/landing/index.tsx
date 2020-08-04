import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../images/logo.svg'
import landingImg from '../../images/landing.svg'
import studyIcon from '../../images/icons/study.svg'
import giveClassesIcon from '../../images/icons/give-classes.svg'
import purpleHeartIcon from '../../images/icons/purple-heart.svg'
import './styles.scss'

export default function Landing() {
  return (
    <div className="page-landing">
      <div id="page-landing-content" className="container">

        <div className="logo">
          <img
            src={logoImg}
            alt="Proffy"
          />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero"
        />

        <div className="buttons">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas"/>
            Dar aulas
          </Link>
        </div>

        <span className="total">
          Total de 200 conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo"/>
        </span>

      </div>
    </div>
  )
}
