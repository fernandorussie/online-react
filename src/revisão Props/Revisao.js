import React, { Component } from 'react'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'


export default class App extends Component {
  render() {
    return (
      <div>
        <Header inicio="Inicio" sobre="Sobre" carrinho="Carrinho" promocoes="Promoções">
          <h1>Olá</h1>
        </Header>
        <Main/>
        <Footer/>
      </div>
    )
  }
}
