import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import FAQ from './FAQ';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  }
});

const questionsAndAnswers = [
  { question: "What is Eth Grid?", answer: "Coolest thing since sliced bread." },
  { question: "Why would I use this?", answer: "To be part of hethstory."},
  { question: "Are there fees?", answer: "Minor, to keep the lights on.  You can interact directly with our contracts though." }
];

class About extends Component {
  render() {
    const items = questionsAndAnswers.map(qa => (<FAQ {...qa} />));
    return (
        <Grid className={this.props.classes.root} container justify="center" >
          <Grid item xs={9} >
            {items}
          </Grid>
        </Grid>
    );
  }
}

export default withStyles(styles)(About);
