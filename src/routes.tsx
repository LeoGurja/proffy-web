import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/landing'
import TeacherList from './pages/teacher-list'
import TeacherForm from './pages/teacher-form'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  )
}
