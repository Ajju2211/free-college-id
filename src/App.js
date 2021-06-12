import React from 'react'
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import CollegeForm from './components/CollegeForm/CollegeForm'
import Main from './components/Main/Main'
export default function App() {
  return (
<BrowserRouter>
  <Switch>
    <Route exact path='/' component={Main}/>
    <Route  path='/college/:id' component={CollegeForm}/>
  </Switch>
</BrowserRouter>
  )
}
