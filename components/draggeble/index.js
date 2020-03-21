import React from 'react';
import PropTypes from 'prop-types';

export default class Draggable extend React.Component{


  drag = (e) => {
    e.dataTransfer.setData('transfer',e.target.id);
  }

  noAllowDrop = (e) => {
    e.stopPropagation();
  }

  render(){
    return (
      <div id = {this.props.id} draggable="true" onDragStart = {this.drag} onDragOver = {this.noAllowDrop} style = { this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

Droppable.propTypes = {
  id = PropTypes.string,
  style = PropTypes.object,
  children = PropTypes.node,
}
