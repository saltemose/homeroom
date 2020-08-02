import { RECEIVE_DISCUSSIONS, RECEIVE_NEW_DISCUSSIONMESSAGE } from '../actions/discussion_actions';
  
  const DiscussionsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_DISCUSSIONS:
        newState.all = action.discussions.data;
        return newState;
      case RECEIVE_NEW_DISCUSSIONMESSAGE:
        newState.new = action.discussionmessage.data
        return newState;
      default:
        return state;
    }
  };
  
  export default DiscussionsReducer;