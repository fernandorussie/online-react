import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom"

import Home from './projects/pages/Home'
import PageMovies from './projects/pages/Movies'
import PageSeries from './projects/pages/Series'
// import Todo from './projects/todo'
// import Calculadora from './projects/calc'
// import Count from './projects/contador'
// import Revisao from './revisão Props/Revisao'

import styled from 'styled-components'

const Links = styled(Link)` 
  color: red;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    color: #fdb927;
    text-decoration: underline;
  }
`
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Projetos e sites</h1>
        <Router>
          <nav>
            <ul>
            <li>
                <Links to="/">Home</Links>
              </li>
              <li>
                <Links to="filmes">Filmes</Links>
              </li>
              <li>
                <Links to="series">Series</Links>
              </li>
              {/* <li>
                <Links to="contador">Contador</Links>
              </li>
              <li>
                <Links to="calculadora">Calculadora</Links>
              </li>
              <li>
                <Links to="todolist">ToDoList</Links>
              </li>
              <li>
                <Links to="revisao">Revisão Props</Links>
              </li> */}
            </ul>
          </nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="contador" element={<Count/>}/>
          <Route path="calculadora" element={<Calculadora/>}/>
          <Route path="todolist" element={<Todo/>}/>
          <Route path="revisao" element={<Revisao/>}/> */}
          <Route path="filmes" element={<PageMovies/>}/>
          <Route path="series" element={<PageSeries/>}/>
        </Routes>

        </Router>
      </div>
    )
  }
}

