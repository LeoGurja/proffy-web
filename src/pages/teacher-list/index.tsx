import React from 'react'

import PageHeader from '../../components/page-header'
import TeacherItem from '../../components/teacher-item'
import './styles.scss'

export default function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title='Estes são os proffys disponíveis.'>
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="weekday">Dia da Semana</label>
            <input type="text" id="weekday" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem
          name="Leonardo Gurgel"
          subject="Química"
          price="R$ 20,00"
          img="https://avatars1.githubusercontent.com/u/39174487?s=60&v=4"
        >
          Entusiasta das melhores tecnologias de química avançada.
          <br /><br />
          Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
          Mais de 200.000 pessoas já passaram por uma das minhas explosões
        </TeacherItem>
        <TeacherItem
          name="Leonardo Gurgel"
          subject="Educação Física"
          price="R$ 40,00"
          img="https://avatars1.githubusercontent.com/u/39174487?s=60&v=4"
        >
          Instruto de Educação Física para iniciantes, minha missão é levar saúde e contribuir para o crescimento de
          quem se interessar.
          <br /><br />
          Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição:
          &quotAprenda a fazer dinheiro com isso!&quot
        </TeacherItem>
        <TeacherItem
          name="Leonardo Gurgel"
          subject="Geografia"
          price="R$ 360,00"
          img="https://avatars1.githubusercontent.com/u/39174487?s=60&v=4"
        >
          As vezes não sei nem onde eu tô, mas consigo me localizar facilmente em qualquer lugar.
          Tenho memória fotográfica e nunca fico perdido.
          <br />
          Eu ensino a galera como não se perder na vida, com lições geográficas
          simples pra você nunca mais precisar de mapa na sua bela vida.
        </TeacherItem>
      </main>
    </div>
  )
}
