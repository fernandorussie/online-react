import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom"

import Movies from './pages/Movies'
import Serie from './pages/Series'

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
export default class PageMovies extends Component {
  render() {
    return (
      <div>
        <h1>FeliPFlix</h1>
        <Router>
          <nav>
            <ul>
              
              <li>
                <Links to="melhores-filmes">Movies</Links>
              </li>
              <li>
                <Links to="melhores-series">Série</Links>
              </li>
            </ul>
          </nav>

        <Routes>
          <Route path="melhores-filmes" element={<Movies/>}/>
          <Route path="melhores-series" element={<Serie/>}/>
        </Routes>

        </Router>
      </div>
    )
  }
}