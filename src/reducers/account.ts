import { Action } from '../actionCreators/EthGridAction';
import { ActionTypes } from '../constants/ActionTypes';
import * as Enums from '../constants/Enums';
import { UserTransaction } from '../models';

export interface AccountState {
  metamaskState: Enums.METAMASK_STATE;
  activeAccount: string;
  userTransactions: { [hash: string]: UserTransaction };
  notificationCount: number;
  isLoadingData: boolean;
}

const initialState: AccountState = {
  metamaskState: Enums.METAMASK_STATE.UNKNOWN,
  activeAccount: '',
  userTransactions: {},
  notificationCount: 0,
  isLoadingData: false
};

export function accountReducer(state: AccountState = initialState, action: Action): AccountState {
  switch (action.type) {
    case ActionTypes.UPDATE_METAMASK_STATE:
      if (action.newState !== state.metamaskState) {
        return Object.assign({}, state, { 
          metamaskState: action.newState
        });
      }
      
      return state;
    case ActionTypes.UPDATE_ACTIVE_ACCOUNT:
      return Object.assign({}, state, { activeAccount: action.newActiveAccount });
    case ActionTypes.ADD_TRANSACTION:
      const userTransactionsCopy = Object.assign({}, state.userTransactions);
      
      userTransactionsCopy[action.uniqueEventHash] = { 
        txType: action.txType,
        txStatus: action.txStatus,
        blockNumber: action.blockNumber,
        txHash: action.txHash
      };

      // Only queue a notification if this isn't being read from onChain
      const newNotificationCount = (action.isNew) ? state.notificationCount + 1 : state.notificationCount;
    
      return Object.assign({}, state, { 
        userTransactions: userTransactionsCopy,
        notificationCount: newNotificationCount
      });
    case ActionTypes.CLEAR_NOTIFICATION_COUNT:
      return Object.assign({}, state, { notificationCount: 0 });
    case ActionTypes.LOAD_TRANSACTIONS:
      return Object.assign({}, state, { isLoadingData: true, userTransactions: {} });
    case ActionTypes.LOAD_TRANSACTIONS_DONE:
      return Object.assign({}, state, { isLoadingData: false });
    default:
      return state;
  }
}
