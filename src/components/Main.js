import React from 'react' 
import styled from "styled-components"

const Caixa = styled.div`
width: 50vw;
background-color: red;

@media(max-width: 768px) {
    background-color: blue;
    }
`
const Function = ({nome, children}) => {
    
    return (
        <Caixa>
            <h1>Olá meu nome é {nome}</h1>
            {children}
        </Caixa>
    )
}
export default Function;