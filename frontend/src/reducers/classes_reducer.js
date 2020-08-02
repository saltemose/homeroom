import { RECEIVE_CLASSES } from '../actions/class_actions';

const ClassesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_CLASSES:
            newState = action.classes
            return newState;
        default:
            return state;
    }
}

export default ClassesReducer;