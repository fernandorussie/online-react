import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

const Main = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #304997;
`;
const BoxToDo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  background-color: #3f3360;
  height: 70%;
  width: 50%;
  border-radius: 15px;
  border: solid 1px #c007ad;
`;
const Title = styled.h1`
  color: white;
  font-size: 5vw;
  &:hover {
    color: red;
  }
`;
const Input = styled.input`
  background-color: transparent;
  border: white 1px solid;
  border-radius: 5px;
  width: 35vw;
  padding: 10px;
  margin: 5px;
  color: white;
  font-size: 19px;
`;
const Btn = styled.button`
  cursor: pointer;
  background-color: #cb9c18;
  border: none;
  border-radius: 5px;
  padding: 5px;
  color: white;
  font-size: 19px;
  font-weight: bold;
  margin-left: 5px;
`;
const TaskList = styled.ul`
  width: 60%;
  padding: 5px;
  list-style: none;
  color: white;
  font-size: 19px;
  border-radius: 5px;
  background-color: #c007ad;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Item = styled.li``;
export default class Todo extends React.Component {
  state = {
    tarefa: '',
    lista: [],
    id: '',
  };
  handleChange = (e) => {
    let { tarefa } = this.state;
    this.setState({
      tarefa: e.target.value,
    });
  };
  add = (event) => {
    let { lista, tarefa } = this.state;
    if ((tarefa != 0 || null) && tarefa.length <= 15) {
      this.setState({
        lista: lista.concat({
          tarefa,
          id: Date.now(),
        }),
        tarefa: '',
      });
    }
    event.preventDefault();
  };
  remove = (id) => {
    let { lista, tarefa } = this.state;
    this.setState({
      lista: lista.filter((item) => item.id !== id),
    });
  };
  // prev = (event) => {
  //   event.preventDefault();
  //   console.log('Aqui teste');
  // };
  render() {
    let { tarefa, lista } = this.state;
    let { handleChange, add, remove, prev } = this;
    return (
      <Main onSubmit={add}>
        <GlobalStyle />
        <BoxToDo>
          <Title>ToDo Basic</Title>
          <div>
            <Input
              maxLength="20"
              placeholder="Adicionar tarefa"
              value={tarefa}
              onChange={handleChange}
            />
            <Btn onClick={add}>Add</Btn>
          </div>
          {lista.map((item, index) => (
            <TaskList>
              <Item>{item.tarefa}</Item>
              <svg
                onClick={() => remove(item.id)}
                key={index}
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-4.992 0-10 1.242-10 3.144 0 .406 3.556 18.488 3.633 18.887 1.135 1.313 3.735 1.969 6.334 1.969 2.601 0 5.199-.656 6.335-1.969.081-.404 3.698-18.468 3.698-18.882 0-2.473-7.338-3.149-10-3.149zm-3.403 13.581l-.492-.323 1.824-.008.78 1.667-.506-.32c-.723 1.146-1.027 1.764-.796 2.481-1.823-1.798-1.622-2.182-.81-3.497zm.622-1.304l.781-1.418c.195-.38 1.251-.075 1.688.899l-.797 1.445-1.672-.926zm2.673 5.175h-1.729c-.427.013-.672-1.061-.031-1.915h1.761v1.915zm.058-4.886l.524-.289c-.652-1.188-1.044-1.753-1.781-1.898 2.451-.729 2.593-.41 3.445.981l.521-.275-.79 1.654-1.919-.173zm3.059.005l.911 1.474c.236.355-.546 1.129-1.607 1.035l-.928-1.501 1.624-1.008zm-1.549 4.846l-.004.583-1.028-1.616 1.054-1.47-.006.6c1.354.011 2.037-.055 2.524-.63-.565 2.5-.942 2.533-2.54 2.533zm-1.409-12.27c-4.211 0-7.625-.746-7.625-1.667s3.414-1.667 7.625-1.667 7.624.746 7.624 1.667-3.413 1.667-7.624 1.667z" />
              </svg>
              {/* <Btn >
                Remove
              </Btn> */}
            </TaskList>
          ))}
        </BoxToDo>
      </Main>
    );
  }
}
