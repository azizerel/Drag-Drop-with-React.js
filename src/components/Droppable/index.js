import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

export default class Droppable extends React.Component{

  drop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('transfer');
    e.target.appendChild(document.getElementById(data));
  }
  allowDrop = (e) => {
    e.preventDefault();
  }

render(){
    return (
      <div id = {this.props.id} onDrop = {this.drop} onDragOver = {this.allowDrop} className="droppableStyle">

        <div id = {this.props.id + 'caption'} className="dropPanelCaption">
          {this.props.caption}
        </div>

        <div id = {this.props.id + 'body'}>
            {this.props.children}
        </div>

      </div>
    );
}
}

Droppable.propTypes = {
  id : PropTypes.string,
  style : PropTypes.object,
  children : PropTypes.node,
}
