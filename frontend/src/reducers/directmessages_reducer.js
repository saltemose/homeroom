import { RECEIVE_DIRECTMESSAGES, RECEIVE_NEW_DIRECTMESSAGE, RECEIVE_ALL_DIRECTMESSAGESA, RECEIVE_ALL_DIRECTMESSAGESB } from '../actions/direct_message_actions';
  
  const DirectMessagesReducer = (state = { all: {}, new: undefined, allDms: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_DIRECTMESSAGES:
        newState.all = action.directmessages.data;
        return newState;
      case RECEIVE_NEW_DIRECTMESSAGE:
        newState.new = action.directmessage.data
        return newState;
      case RECEIVE_ALL_DIRECTMESSAGESA:
          newState.allDMsA = action.alldirectmessagesA.data
          return newState;
        case RECEIVE_ALL_DIRECTMESSAGESB:
           newState.allDMsB = action.alldirectmessagesB.data
           return newState;
      default:
        return state;
    }
  };
  
  export default DirectMessagesReducer;