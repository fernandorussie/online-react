import React, { Component }  from 'react'

class Soma extends Component {
mensagem = (frase, num) => {
return (
    <div> 
    <h1>Meu numero é {num} e meu dobro é {frase}  </h1> 
   
    </div>
)
  }
calc = (y) => {
return y * 60
}
  render(){
    return(
<div>
<h1>{this.mensagem(":",50)}</h1>
<h2>{this.calc(2)}</h2>
      </div>
    )
  }
}

export default Soma 