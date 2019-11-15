import {SET_SLIDE} from "../redux/actions";

const  socket =require('socket.io-client').connect();

export const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
};

export const propagateSocket  = store => next => action => {
    if (action.type === SET_SLIDE  && action.internalAction) {
        socket.emit('set_slide', action);
    }
    return next(action);
};