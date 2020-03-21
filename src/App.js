import React from 'react';
import './App.css';
import styled from 'styled-components';
import Draggable from './components/Draggable';
import Droppable from './components/Droppable';


const Wrapper = styled.div`  width : 100%;  paddding : 32px;  display: flex;  justify-content :center;`;

const Item = styled.div`
  paddding : 8px;
  color : #555;
  background-color : white;
  border-radius : 3px;
`;

const AppWrapper = styled.div` display :flex;   justify-content : center;  margin-top :  100px;`;

const droppableStyle = {
  backgroundColor: '#555',
  width : '250px',
  margin : '32px',
  height : '400px',
};

function App() {
  return (
    <div className="App">
    <AppWrapper>

    <Wrapper id="wrapper">
      <Droppable id = "dr1" style = {droppableStyle}>
        <Draggable id="item1" style = {{margin : '8px'}}>  <Item  className="items"> Text 2</Item> </Draggable>
        <Draggable id="item2"  style = {{margin : '8px'}}> <Item  className="items"> Text 1</Item> </Draggable>
      </Droppable>

      <Droppable id = "dr2" style = {droppableStyle}>

      </Droppable>

      <Droppable id = "dr3" style = {droppableStyle}>

      </Droppable>
    </Wrapper>
</AppWrapper>
    </div>
  );
}

export default App;
