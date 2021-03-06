import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'
import logoImg from '../../images/logo.svg'
import backIcon from '../../images/icons/back.svg'

interface PageHeaderProps {
  title: string;
  children?: React.ReactElement | string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }: PageHeaderProps) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar"/>
        </Link>
        <img src={logoImg} alt="Proffy"/>
      </div>

      <div className="header-content">
        <strong>{ title }</strong>
        { children }
      </div>
    </header>
  )
}

export default PageHeader
