export const ADD_SLIDE = "ADD_SLIDE";
export const REMOVE_SLIDE = "REMOVE_SLIDE";
export const NEXT_SLIDE = 'NEXT_SLIDE';
export const PREVIOUS_SLIDE = 'PREVIOUS_SLIDE';
export const SET_SLIDE = 'SET_SLIDE';
export const ADD_DRAW_POINTS = 'ADD_DRAW_POINTS';
export const RESET_DRAW_POINTS = 'RESET_DRAW_POINTS';
export const SET_MODE= 'SET_MODE';
export const ADD_ITEM= 'ADD_ITEM';

export function addSlide(payload, pos) {
    return {type: ADD_SLIDE, payload, pos};
}

export function removeSlide(payload, internalAction = true) {
    return { type: REMOVE_SLIDE, payload,internalAction };
}

export function nextSlide(payload,internalAction = true) {
    return { type: NEXT_SLIDE, payload, internalAction };
}

export function previousSlide(payload, internalAction = true) {
    return { type: PREVIOUS_SLIDE, payload, internalAction };
}

export function setSlide(index, internalAction = true) {
    return { type: SET_SLIDE, index, internalAction };
}
export function setMode (mode, internalAction = true) {
    return { type: SET_MODE, mode,internalAction };
}

export function addItem (payload,internalAction = true) {
    return { type: ADD_ITEM, payload,internalAction };
}
export function addDrawPoints(clickX, clickY, clickDrag, internalAction = true) {

    return { type: ADD_DRAW_POINTS, clickX, clickY, clickDrag, internalAction}
}
export function resetDrawPoints(internalAction = true) {

    return { type: RESET_DRAW_POINTS, internalAction}
}