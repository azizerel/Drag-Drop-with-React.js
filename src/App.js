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
            <Droppable id = "dr1" caption="Planning (2)">
              <Draggable id="item1">
                  <Issue id="issue1" caption="Create Entity" issueType="Task" bgColor="royalHealthBgColor"/>
              </Draggable>

              <Draggable id="item2">
                  <Issue id="issue2" caption="Edit Service" issueType="Task" bgColor="sushiBgcolor"/>
              </Draggable>
            </Droppable>

            <Droppable id = "dr2" caption="Active (1)">
              <Draggable id="item3">
                  <Issue id="issue3" caption="Control Models" issueType="Task" bgColor="corolBgColor"/>
              </Draggable>
            </Droppable>

            <Droppable id = "dr3" caption="In Progress (1)">
              <Draggable id="item4">
                <Issue id="issue4" caption="Check Todos" issueType="Task" bgColor="brickRedBgColor"/>
                </Draggable>
            </Droppable>

            <Droppable id = "dr4" caption="Done">

            </Droppable>

            <Droppable id = "dr4" caption="Archive">

            </Droppable>
          </Wrapper>
          </div>

        </div>
    </div>
  );
}

export default App;
