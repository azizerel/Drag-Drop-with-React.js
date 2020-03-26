import React from 'react';
import '../../index.css';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" color="inherit" className="navbarSections">
              Dashboard
            </Typography>
            <Typography variant="h5" color="inherit"  className="navbarSections">
              Issue
            </Typography>
            <Typography variant="h5" color="inherit"  className="navbarSections">
              Profile
            </Typography>
          </Toolbar>
        </AppBar>
    </div>);
  };
}
class HeaderContent extends React.Component {
  render() {
    return (
      <div className="HeaderContent">
        <section id="teamActionSection">
          <span>QUICK FILTERS:</span>
          <Button variant="contained" size="small"  color="primary" className="filterButtons">
            Only Active
          </Button>
          <Button variant="contained" size="small"  color="secondary" className="filterButtons">
            Needs Review
          </Button>
          <Button variant="contained" size="small"  color="primary" className="filterButtons" style={{background: '#4caf50'}}>
            Done
          </Button>
        </section>
      </div>
    );
  }
}

export {Header,HeaderContent};
