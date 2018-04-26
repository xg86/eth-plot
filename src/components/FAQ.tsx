import { withStyles, StyleRulesCallback, WithStyles } from 'material-ui/styles';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Component } from 'react';

import ExpandMore from 'material-ui-icons/ExpandMore';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';

export interface FAQProps {
  question: string;
  answer: string;
}

class FAQ extends Component<FAQProps> {
  render() {
    return (
    <ExpansionPanel key={this.props.question}>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <Typography variant="subheading">{ this.props.question }</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
        { this.props.answer }
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>);
  }
}

export default FAQ;