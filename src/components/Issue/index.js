import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export default class Issue extends React.Component {
render(){
  return (
      <Card  className={`issue ${ this.props.bgColor }`} variant="outlined">

        <CardContent style={{ paddingLeft : '10px'}}>
           <Typography color="textPrimary" gutterBottom>
              <span className="issueHeader">{this.props.caption}</span>
           </Typography>

           <Typography className="issueBody" variant="body2" component="p">
            <span className="issueBody"></span>
          </Typography>
        </CardContent>

        <CardActions className="issueFooter">
        <AddIcon className="issueAction" />  <EditIcon className="issueAction" />  <ExpandMoreIcon className="issueAction"/>
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
