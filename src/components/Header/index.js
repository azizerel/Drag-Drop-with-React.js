import React from 'react';
import '../../index.css';
import Button from '@material-ui/core/Button';


class Header extends React.Component {
  render() {
    return (<div className="header">

    </div>);
  };
}
class HeaderContent extends React.Component {
  render() {
    return (
      <div className="HeaderContent">
      <Button variant="outlined" color="secondary">
      Secondary
</Button>
      </div>
    );
  }
}

export {Header,HeaderContent};
