import React from 'react';
import './App.css';
import styled from 'styled-components';
import Draggable from './components/Draggable';
import Droppable from './components/Droppable';
import Issue from './components/Issue';

import {Header,HeaderContent} from './components/Header';

const Wrapper = styled.div`paddding : 32px;  display: flex;  justify-content :center;`;


function App() {
  return (
    <div className="App">
       <Header/>
       <HeaderContent />
      <div className = "main">
      <div className = "leftPanel">
        <Wrapper id="wrapper">
          <Droppable id = "dr1" caption="Planning">
            <Draggable id="item1">
                <Issue id="aziz" caption="Create Entity" issueType="Task" bgColor="royalHealthBgColor"/>
            </Draggable>

            <Draggable id="item2">
                <Issue id="aziz1" caption="Create Entity" issueType="Task" bgColor="sushiBgcolor"/>
            </Draggable>

          </Droppable>

          <Droppable id = "dr2" caption="Active">
          <Draggable id="item3">
            <Issue id="aziz1" caption="Create Entity" issueType="Task" bgColor="corolBgColor"/>
              </Draggable>
          </Droppable>

          <Droppable id = "dr3" caption="In Progress">
          <Draggable id="item4">
          <Issue id="aziz1" caption="Create Entity" issueType="Task" bgColor="brickRedBgColor"/>
          </Draggable>
          </Droppable>
          <Droppable id = "dr4" caption="Done">

          </Droppable>
        </Wrapper>
        </div>

        </div>
    </div>
  );
}

export default App;
