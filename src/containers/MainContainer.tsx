import { withStyles, StyleRulesCallback, WithStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import * as Actions from '../actions';
import MainControlsOverlay, { MainControlsOverlayProps } from '../components/MainControlsOverlay';
import PurchaseDialog, { PurchaseDialogProps } from '../components/PurchaseDialog';
import UIGrid, { UIGridProps } from '../components/UIGrid';
import * as Enums from '../constants/Enums';
import { ContractInfo, GridInfo, ImageFileInfo, PlotInfo, Point, Rect, RectTransform } from '../models';

const styles: StyleRulesCallback = theme => ({
  root: {
    position: 'relative',
    height: 'calc(100vh - 64px)',
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100vh - 54px)',
    },
    userDrag: 'none'
  }
});


export interface MainContainerProps extends WithStyles, RouteComponentProps<any> {
  actions: {
    purchaseImageSelected: Actions.purchaseImageSelected,
    goToPurchaseStep: Actions.goToPurchaseStep,
    completePurchaseStep: Actions.completePurchaseStep,
    changePlotWebsite: Actions.changePlotWebsite,
    changePlotBuyout: Actions.changePlotBuyout,
    changeBuyoutEnabled: Actions.changeBuyoutEnabled,
    completePlotPurchase: Actions.completePlotPurchase,
    hoverOverPlot: Actions.hoverOverPlot,
    startTransformRectToPurchase: Actions.startTransformRectToPurchase,
    stopTransformRectToPurchase: Actions.stopTransformRectToPurchase,
    transformRectToPurchase: Actions.transformRectToPurchase,
    togglePurchaseFlow: Actions.togglePurchaseFlow;
    changeZoom: Actions.changeZoom;
  };
  purchase: {
    rectToPurchase?: Rect;
    purchasePriceInWei: string;
    activeStep: number;
    completedSteps: {[index: number]: boolean};
    imageName: string;
    imageDimensions: {
      h: number;
      w: number;
    }
    website: string;
    buyoutPriceInWei: string;
    buyoutEnabled: boolean;
    purchaseFlowOpen: boolean;
    currentTransform?: RectTransform;
  };
  imageFileInfo?: ImageFileInfo;
  plots: Array<PlotInfo>;
  contractInfo: ContractInfo;
  scale: number;
  gridInfo: GridInfo;
  hoveredIndex: number;
  dragRectCurr?: Point;
  dragRectStart?: Point;
  isDraggingRect: boolean;
  purchaseDialog: {
    cancelPlotPurchase: Actions.cancelPlotPurchase;
    purchaseStage: number;
    isShowing: boolean;
  };
}

class MainContainer extends React.Component<MainContainerProps> {
  render() {
    const purchaseActions = {
      onImageSelected: this.props.actions.purchaseImageSelected,
      goToStep: this.props.actions.goToPurchaseStep,
      onStepComplete: this.props.actions.completePurchaseStep,
      onWebsiteChanged: this.props.actions.changePlotWebsite,
      onBuyoutChanged: this.props.actions.changePlotBuyout,
      onBuyoutEnabledChanged: this.props.actions.changeBuyoutEnabled,
      purchasePlot: this.props.actions.completePlotPurchase
    };

    const uiGridProps: UIGridProps = {
      actions: {
        hoverOverPlot: this.props.actions.hoverOverPlot,
        startTransformRectToPurchase: this.props.actions.startTransformRectToPurchase,
        stopTransformRectToPurchase: this.props.actions.stopTransformRectToPurchase,
        transformRectToPurchase: this.props.actions.transformRectToPurchase
      },
      classes: {},
      inPurchaseMode: this.props.purchase.purchaseFlowOpen,
      currentTransform: this.props.purchase.currentTransform,
      imageToPurchase: this.props.imageFileInfo,
      rectToPurchase: this.props.purchase.rectToPurchase,
      plots: this.props.plots,
      scale: this.props.scale,
      gridInfo: this.props.gridInfo,
      hoveredIndex: this.props.hoveredIndex,
      dragRectCurr: this.props.dragRectCurr,
      dragRectStart: this.props.dragRectStart,
      isDraggingRect: this.props.isDraggingRect
    };

    const mainControlsOverlayProps: MainControlsOverlayProps = {
      classes: {},
      purchase: this.props.purchase,
      zoomLevel: this.props.scale,
      purchaseActions,
      imageData: this.props.imageFileInfo ? this.props.imageFileInfo.fileData : '',
      contractInfo: this.props.contractInfo,
      plots: this.props.plots,
      togglePurchaseFlow: this.props.actions.togglePurchaseFlow,
      changeZoom: this.props.actions.changeZoom
    };

    return (
      <div className={this.props.classes.root}> 
        <UIGrid {...uiGridProps} />
        <MainControlsOverlay {...mainControlsOverlayProps} />
        <PurchaseDialog {...this.props.purchaseDialog} classes={{}} />
      </div>
    );
  }
}

export default withStyles(styles)(MainContainer);