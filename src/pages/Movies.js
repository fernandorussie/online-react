import React, { Component } from 'react'
import axios from "axios";

const apiFilmes = axios.create({ //Axios é um elemento (biblioteca) que conecta servidor, cliente e a api. é o transportador da api para o cliente.
  //.create é pra criar baseado no baseURL
  baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=0beb9ac2fc4292144eeffa5c1b2bbcf2"
  //baseURL é uma propriedade dentro do axios que serve para acessar os objetos.
})

export default class Filmes extends Component {
 
  state = {
    filmList: []
  }

  async componentDidMount() { //ComponentDidMount ditMount quer dizer sujeito a mudanças, quando montar... ele vai requisitar tudo o que estiver ali dentro sempre que for montado. vai renderizar logo que montar a pagina //sempre que renderizar a pagina, vai montar de forma unica//

  //async vai dizer que voce pode montar a pagina na hora que voce quiser, a sincrona, vai acontecer na hora que eu quiser e não só quando eu fizer uma requisição.

  //Mas o que acontece quando, por exemplo, nosso código precisa receber alguns dados de uma API? Ao mesmo tempo que é preciso aguardar a requisição e resposta da API, não podemos bloquear o funcionamento de todo o nosso programa; seria a mesma coisa que enviar uma mensagem pelo WhatsApp e ficar esperando a resposta sem fazer mais nada nesse meio tempo.
    const response = await apiFilmes.get()//response é de resposta, e dentro da variavel eu estou dizendo que eu espero uma resposta que vem lá da minha API

  //await é a espera e ele trabalha junto com o async, logo após a espera eu coloco o que estou esperando, que é a minha API(apiFilmes.get) .get fala que eu quero pegar algo da minha api
    console.log(response)

    const filmes = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w300/${item.poster_path}`
      }
    })
    this.setState({
      filmList:filmes
    })
  }
  render() {
    return (
      <div> <h1>Filmes</h1>
        {this.state.filmList.map((item) => (
          <div>
            <h2>{item.title}</h2>
            <img src={item.poster_path} alt={` Imagem da série ${item.name}`}/>
          </div>
        ))}
      </div>
    )
  }
}