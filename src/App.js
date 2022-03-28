// import React from 'react';
// import { createGlobalStyle } from 'styled-components';
// import styled from 'styled-components'
// import Header from "./Main";
// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: Open-Sans, Helvetica, Sans-Serif;
//   }
// `;
// const Main = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height:100vh;
//   background-color:#304997;
// `
// const BoxInput = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 36px;
// `
// const Input = styled.input`
//   width:10vw;
//   height: 8vh;
//   margin:5%;
//   font-size: 2vw;
// `
// const BoxBtn = styled.div` 
//   display: flex;
//   justify-content: space-between;
//   width: 50%;
//   border: 1px solid;
// `
// const Btn = styled.button`
//   width:10vw;
//   height:8vh;
//   background-color:orange;
//   color: white;
//   font-size:2vw;
//   font-weight: bold;
//   margin: 1%;
// `
// const Calc = styled.h3`
//   font-size:2vw;
//   font-weight: bold;
//   margin: 20px;
// `
// const Result = styled.h3`
//   font-size:5vw;
//   font-weight: bold;
//   margin: 20px;
//   text-align: center;
// `
// export default class Calculadora extends React.Component {
//   state = {
//     num1: '',
//     num2: '',
//     result: '',
//     sinal: '',
//   };

//   handleChange = (ev) => {
//     this.setState({
//       num1: Number(ev.target.value),
//     });
//   };
//   handleChange2 = (ev) => {
//     this.setState({
//       num2: Number(ev.target.value),
//     });
//   };
//   sub = () => {
//     let { num1, num2, result } = this.state;
//     // this.setState({
//     //   result: (num1 && num2) !== null ? num1 + num2 : result,
//     //   sinal: '-',
//     // }) 
//     if (num1 && num2 !== null) {
//       this.setState({
//         result: num1 - num2,
//         sinal: '-',
//       });
//     }else{
//       this.setState({
//         result: "Digite um outro valor!"})
//     }
//   };
//   mult = () => {
//     let { num1, num2, result } = this.state;
//     if (num1 && num2 !== null) {
//       this.setState({
//         result: num1 * num2,
//         sinal: 'x',
//       });
//     }else{
//       this.setState({
//         result: "Digite um outro valor!"})
//     }
//   };
//   div = () => {
//     let { num1, num2, result } = this.state;
//     if (num1 && num2 !== null) {
//       this.setState({
//         result: num1 / num2,
//         sinal: '/',
//       });
//     }else{
//       this.setState({
//         result: "Digite um outro valor!"})
//     }
//   };
//   soma = () => {
//     let { num1, num2, result } = this.state;
//     if (num1 && num2 !== null) {
//       this.setState({
//         result: num1 + num2,
//         sinal: '+',
//       });
//     }else{
//       this.setState({
//         result: "Digite um outro valor!"})
//     }
//   };
//   media = () => {
//     let { num1, num2, result } = this.state;
//     if (num1 && num2 !== null) {
//       this.setState({
//         result: (num1 + num2) / 2,
//         sinal: '+',
//       });
//     }else{
//       this.setState({
//         result: "Digite um outro valor!"})
//     }
//   };
//   porcen = () => {
//     let { num1, num2, result } = this.state;
//     if (num1 && num2 !== null) {
//       this.setState({
//         result: (num1 + num2) / 100,
//         sinal: '%',
//       });
//     }else{
//       this.setState({
//         result: "Digite um outro valor!"})
//     }
//   };
//   clear = () => {
//     this.setState({
//       num1: '',
//       num2: '',
//       result: '',
//       sinal: '',
//     });
//   };
  
//   render() {
//     const { sub, mult, div, soma, clear, media, porcen } = this;
//     const { result } = this.state;
//     return (
//       <Main>
//         <GlobalStyle />
//         <Header />
//         <h1>Calculadora Completa e Grátis</h1>
        
//         <BoxInput>
//           <Input onChange={this.handleChange} value={this.state.num1} />
//           <Input onChange={this.handleChange2} value={this.state.num2} />
//         </BoxInput>
//         <BoxBtn>
//           <Btn onClick={sub}>-</Btn>
//           <Btn onClick={mult}>x</Btn>
//           <Btn onClick={div}>/</Btn>
//           <Btn onClick={soma}>+</Btn>
//           <Btn onClick={media}>Media</Btn>
//           <Btn onClick={porcen}>%</Btn>
//           <Btn onClick={clear}>C</Btn>
//         </BoxBtn>
//         <div>
//           <Calc>
//             {this.state.num1} {this.state.sinal} {this.state.num2}
//           </Calc>
//           <Result>{result}</Result>
//         </div>
//       </Main>
//     );
//   }
// }


// import React, { Component } from 'react'
// import Props from './components/Main'
// export default class App extends Component {
//   state= {
//     imagem: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg"
//   }
//   render() {
//     return (
//       <div>
//         <img src={this.state.imagem} alt=""/>
//         <h1>Aqui é o App principal</h1>
//         <Props nome="Fernando"/>
//         <Props nome="Luan">
//           <button>Enviar</button>
//         </Props>
//         <Props nome="Simão">
//           <img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg" alt=""/>
//         </Props>
//       </div>
//     )
//   }
// }




import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom"
import Movies from './pages/Movies'
import Serie from './pages/Series'
import Home from './pages/Home'
import Todo from './projects/todo'
import Calculadora from './projects/calc'
import Count from './projects/contador'

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
        <h1>FeliPFlix</h1>
        <Router>
          <nav>
            <ul>
              <li>
                <Links to="/">Home</Links>
              </li>
              <li>
                <Links to="contador">Contador</Links>
              </li>
              <li>
                <Links to="calculadora">Calculadora</Links>
              </li>
              <li>
                <Links to="todolist">ToDoList</Links>
              </li>
              <li>
                <Links to="movies">Movies</Links>
              </li>
              <li>
                <Links to="serie">Série</Links>
              </li>
            </ul>
          </nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="movies" element={<Movies/>}/>
          <Route path="serie" element={<Serie/>}/>
          <Route path="contador" element={<Count/>}/>
          <Route path="calculadora" element={<Calculadora/>}/>
          <Route path="todolist" element={<Todo/>}/>
        </Routes>

        </Router>
      </div>
    )
  }
}


























