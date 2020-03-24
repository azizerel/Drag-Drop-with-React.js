import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color: '#242424'
  },
  pos: {
    marginBottom: 12,
  },
});


export default class Issue extends React.Component {

render(){
  return (
      <Card  className={`issue ${ this.props.bgColor }`} variant="outlined">

        <CardContent>
           <Typography className="" color="textPrimary" gutterBottom>
              <span className="issueHeader">{this.props.caption}</span>
           </Typography>

           <Typography className="issueBody" variant="body2" component="p">
            <span className="issueBody">well meaning and kindly.</span>
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
   </Card>
  );
}}

Issue.propTypes = {
  id : PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  issueType: PropTypes.oneOf(['Bug', 'Task', 'Story','Sub Task']).isRequired
}
