import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     listaFrutas:[
//       "Banana",
//       "Limão",
//       "Pera",
//       "Melão",
//       "Laranja",
//       "Kiwi",
//       "Maçã",
//       "Manga",
//       "Morango",
//       "Uva"
//     ],
//     frutas:[]
//   }

//   filtro = (e) => {
//     const { listaFrutas } = this.state

//     const listaFiltrada = listaFrutas.filter((item) => {
//       if(item.includes(e.target.value)){
//         return true;
//       }
//     })

//     this.setState({
//       frutas: listaFiltrada
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Lista de Frutas</h1>
//         <input placeholder="Digite uma fruta" type="text" onChange={this.filtro}
//         />
//         <ul>
//           {this.state.frutas.map((item) => (
//             <li key={item}>{item}</li>
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }
