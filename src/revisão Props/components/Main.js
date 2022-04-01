import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Carousel from 'react-elastic-carousel'
import axios from "axios";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
`
const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background-color:blue;

`
const Title = styled.h1``

const Name = styled.h3`
font-size: 15px;
text-align: center;
`
const Price = styled.p`
font-size: 15px;
text-align: center;`      
const Img = styled.img`
    width:40%;
`   
const Card = styled.div`
    width: 9vw;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 2px solid;
    border-radius: 10px;
    margin: 5px;
    padding: 3px;

    @media(max-width:768px){
      background-color: red;
    }
`   
const Card1 = styled.div`
    width: 9vw;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 2px solid;
    border-radius: 10px;
    margin: 5px;
    padding: 3px;
`  
const Box_Card = styled.div`
    width: 45vw;
    height: 80vh;
    margin:15px;
    padding:10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border: 1px solid;
    overflow: auto;
`
const Center_Box = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-around;
`    

export default class Main extends React.Component {
  state = {
    shoppingList: [
      { product: 'Carne vermelha', stock:1,preco: '49.50', img:'https://s.cornershopapp.com/product-images/2655801.png?versionId=QHngXy7nJ7FPobTXps.WZ_VMZQPdCHY3' },
      { product: 'Peito de Frango', stock:1,preco: '20.90', img:'https://superprix.vteximg.com.br/arquivos/ids/193210-600-600/53112.jpg?v=637468459125500000' },
      { product: 'Oleo de cozinha',stock:1, preco: '10.00', img:'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/339741.jpg' },
      { product: 'Filé de peixe',stock:1, preco: '24.00', img:'http://io.convertiez.com.br/m/superpaguemenos/shop/products/images/33502/large/peixe-congfile-tilapia-copacol-400g_81330.png' },
      { product: 'Azeite de oliva', stock:1,preco: '14.00', img:'https://emporiopetali.com.br/loja/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/o/l/olive_500ml.jpg' },
      { product: 'Refrigerante',stock:1, preco: '7', img:'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/cocacolazero2l.jpg' },
      { product: 'Banana',stock:1, preco: '5', img:'https://http2.mlstatic.com/D_NQ_NP_656014-MLB42667264647_072020-O.jpg' },
      { product: 'Tomate',stock:1, preco: '6', img:'http://io.convertiez.com.br/m/superpaguemenos/shop/products/images/17918/large/tomate-italiano-kg_70962.jpg'},
      { product: 'Batata',stock:1, preco: '4', img:'https://apucarana.cidadecancao.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/a/batata-extra-kg-0000000028417.jpg'},
      { product: 'Queijo',stock:1,  preco: '40.00', img:'https://deskontao.agilecdn.com.br/26476_1.jpg'},
      { product: 'Manteiga', stock:1, preco: '6', img:'http://io.convertiez.com.br/m/superpaguemenos/shop/products/images/40088/large/manteiga-qualy-500g-c-sal_92589.png'},
      { product: 'Biscoito', stock:1,  preco: '3', img:'https://http2.mlstatic.com/D_NQ_NP_2X_987484-MLU47590686231_092021-V.webp'},
      { product: 'Agua', preco: '2', stock:1,img:'https://http2.mlstatic.com/D_NQ_NP_800831-MLU47587972258_092021-O.jpg'},
    ],
    shoppingCart: [],
  };

  Add = (item) => {
      this.setState({
      shoppingCart:[...this.state.shoppingCart, item]
      })
    }

  Remove = (e) => {
          this.setState({
          shoppingCart:this.state.shoppingCart.filter((item) => e.product !== item.product)
          })
          };

  render() {
    return (
      <Container>
        <Title>Shopping Market On sale</Title>
        <button onClick={this.Add}>Adicionar</button>
        <Center_Box>
            <Box_Card>
            {this.state.shoppingList.map((item, index) => (
                <Card1 key={index} onClick={() => {this.Add(item)}}>
                    <Name>{item.product}</Name>
                    <Img src={item.img}/>                  
                    <Price>R$ {item.preco}</Price>  
                </Card1>
            ))}
            </Box_Card>
            <Carousel itemsToShow={2}>
            {this.state.shoppingCart.map((item, index) => (
              <Card key={index} onClick={() => {this.Remove(item)}}>
              <Name>{item.product}</Name>
              <Img src={item.img} alt=""/>
              <Price>R$ {item.preco}</Price>                   
        </Card>
      ))}
            </Carousel>
        </Center_Box>
        
      </Container>
    );
  }
}
