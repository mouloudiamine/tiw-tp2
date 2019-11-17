import {
    ADD_ITEM,
    SET_SLIDE,
    ADD_DRAW_POINTS,
    RESET_DRAW_POINTS,
    ADD_SLIDE,
    REMOVE_SLIDE,
    setSlide,
    addItem,
    addDrawPoints, resetDrawPoints, addSlide
} from "../redux/actions";
import store from "../redux/store";


export const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
};

export const propagateSocket  = store => next => action => {
    if (action.type === SET_SLIDE  && action.internalAction) {
        require('socket.io-client').connect().emit('set_slide', action);
    }
    if (action.type === ADD_ITEM && action.internalAction) {
        require('socket.io-client').connect().emit('add_item', action);
    }
    if (action.type === ADD_DRAW_POINTS && action.internalAction) {
        require('socket.io-client').connect().emit(ADD_DRAW_POINTS, action);
    }
    if (action.type === RESET_DRAW_POINTS && action.internalAction) {
        require('socket.io-client').connect().emit(RESET_DRAW_POINTS, action);
    }
    if (action.type === REMOVE_SLIDE && action.internalAction) {
        require('socket.io-client').connect().emit(RESET_DRAW_POINTS, action);
    }

    if (action.type === ADD_SLIDE && action.internalAction) {
        require('socket.io-client').connect().emit(ADD_SLIDE, action);
    }
    return next(action);
};


const  socket =require('socket.io-client').connect();
socket.on('set_slide', (action) => {
    if (action.type === SET_SLIDE) {
        store.dispatch(setSlide(action.index,false
        ));
    }
});
socket.on('add_item', (action) => {
    if (action.type === ADD_ITEM) {
        store.dispatch(addItem(action.payload,false));
    }
});

socket.on(ADD_DRAW_POINTS, (action) => {
    if (action.type === ADD_DRAW_POINTS) {
        store.dispatch(addDrawPoints(action.clickX, action.clickY, action.clickDrag, false));
    }
});

socket.on(RESET_DRAW_POINTS, (action) => {
    if (action.type === RESET_DRAW_POINTS) {
        store.dispatch(resetDrawPoints(false));
    }
});

socket.on(ADD_SLIDE, (action) => {
    console.log("=====>"+JSON.stringify(action));
    if (action.type === ADD_SLIDE) {
        store.dispatch(addSlide(action.payload, action.pos, false));

    }
});
