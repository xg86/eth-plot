import React, { Component, PropTypes } from 'react';

export default class PurchasePlot extends Component {
  mouseOver() {
    this.props.hoverAction(this.props.index);
  }

  plotClicked(e) {
    e.stopPropagation();
    
    // The plot has been clicked. We should go ahead and try to buy this plot
    this.props.startPurchase(this.props.rect);
  }

  render() {
    const rect = this.props.rect;
    const scale = this.props.scale;
    const plotStyle = {
      top: 0,
      left: 0,
      width: rect.w * scale,
      height: rect.h * scale,
      position: 'absolute',
      cursor: 'pointer'
    };

    const wrapperStyle = {
      top: rect.y * scale,
      left: rect.x * scale,
      width: rect.w * scale,
      height: rect.h * scale,
      position: 'absolute'
    };

    const tooltipStyle = {
      top: -40
    }

    const tooltipText = `${rect.w} x ${rect.h}`;

    return (
      <div style={wrapperStyle} >
        <div style={plotStyle} className="purchasePlot" onClick={this.plotClicked.bind(this)} onMouseDown={(e) => e.stopPropagation()}></div>
        <div className='purchaseTooltip' style={tooltipStyle}>
          <span>{tooltipText}</span>
        </div>
      </div>
    );
  }
}

PurchasePlot.propTypes = {
  rect: PropTypes.object.isRequired,
  scale: PropTypes.number.isRequired,
  startPurchase: PropTypes.func.isRequired
};