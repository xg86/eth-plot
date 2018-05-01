export enum ActionTypes {
  CHANGE_TAB = 'CHANGE_TAB',

  // Data Actions
  ADD_PLOT = 'ADD_PLOT',
  LOAD_PLOTS = 'LOAD_PLOTS',
  LOAD_PLOTS_DONE = 'LOAD_PLOTS_DONE',
  LIST_PLOT = 'LIST_PLOT',
  PLOT_LISTED = 'PLOT_LISTED',
  ADD_PURCHASE_TRANSACTIONS = 'ADD_PURCHASE_TRANSACTIONS',

  // Grid Actions
  HOVER_OVER_PLOT = 'HOVER_OVER_PLOT',
  ENTER_BUY_MODE = 'ENTER_BUY_MODE',
  START_DRAGGING_RECT = 'START_DRAGGING_RECT',
  STOP_DRAGGING_RECT = 'STOP_DRAGGING_RECT',
  RESIZE_DRAGGING_RECT = 'RESIZE_DRAGGING_RECT',
  SHOW_PURCHASE_DIALOG = 'SHOW_PURCHASE_DIALOG',
  HIDE_PURCHASE_DIALOG = 'HIDE_PURCHASE_DIALOG',
  CHANGE_ZOOM = 'CHANGE_ZOOM',

  // Account Actions
  UPDATE_METAMASK_STATE = 'UPDATE_METAMASK_STATE',
  UPDATE_ACTIVE_ACCOUNT = 'UPDATE_ACTIVE_ACCOUNT',
  ADD_TRANSACTION = 'ADD_TRANSACTION',
  CLEAR_NOTIFICATION_COUNT = 'CLEAR_NOTIFICATION_COUNT',
  LOAD_TRANSACTIONS = 'LOAD_TRANSACTIONS',
  LOAD_TRANSACTIONS_DONE = 'LOAD_TRANSACTIONS_DONE',

  // Purchase Actions
  TOGGLE_PURCHASE_FLOW = 'TOGGLE_PURCHASE_FLOW',
  PURCHASE_IMAGE_SELECTED = 'PURCHASE_IMAGE_SELECTED',
  START_TRANSFORM_RECT = 'START_TRANSFORM_RECT',
  STOP_TRANSFORM_RECT = 'STOP_TRANSFORM_RECT',
  TRANSFORM_RECT_TO_PURCHASE = 'TRANSFORM_RECT_TO_PURCHASE',
  COMPLETE_PURCHASE_STEP = 'COMPLETE_PURCHASE_STEP',
  GO_TO_PURCHASE_STEP = 'GO_TO_PURCHASE_STEP',
  CHANGE_PLOT_WEBSITE = 'CHANGE_PLOT_WEBSITE',
  CHANGE_PLOT_BUYOUT = 'CHANGE_PLOT_BUYOUT',
  CHANGE_BUYOUT_ENABLED = 'CHANGE_BUYOUT_ENABLED',
  START_PURCHASING_PLOT = 'START_PURCHASING_PLOT',
  CHANGE_PURCHASE_STAGE = 'CHANGE_PURCHASE_STAGE',
  CANCEL_PLOT_PURCHASE = 'CANCEL_PLOT_PURCHASE',

}
