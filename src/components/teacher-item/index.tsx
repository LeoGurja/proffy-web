import React from 'react'

import whatsappIcon from '../../images/icons/whatsapp.svg'
import './styles.scss'

interface TeacherItemProps {
  name: string;
  subject: string;
  img: string;
  children: React.ReactNodeArray | string;
  price: string;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ name, subject, children, price, img }: TeacherItemProps) => {
  return (
    <article className="teacher-item">
      <header>
        <img src={img} alt="Leonardo Gurgel"/>
        <div>
          <strong>{ name }</strong>
          <span>{ subject }</span>
        </div>
      </header>
      <p>
        { children }
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>{ price }</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"/>
              Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem
