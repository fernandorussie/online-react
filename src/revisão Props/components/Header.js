import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: purple;
`
const Box_Menu = styled.div`
    margin: auto;
    width: 80%;
    display: flex;
    justify-content: space-evenly;
`
const Btn_Menu = styled.p`
    font-weight: 900;
    font-size: 20px;
    cursor: pointer;
`
const Function = ({inicio, sobre, carrinho, promocoes,children}) => {
    
    return (
        <Container>
            <Box_Menu>
                <Btn_Menu>{inicio}</Btn_Menu>
                <Btn_Menu>{sobre}</Btn_Menu>
                <Btn_Menu>{carrinho}</Btn_Menu>
                <Btn_Menu>{promocoes}</Btn_Menu>
                {children}
            </Box_Menu>
        </Container>
    )
}
export default Function;
