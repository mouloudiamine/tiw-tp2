import {ADD_SLIDE, NEXT_SLIDE, PREVIOUS_SLIDE, REMOVE_SLIDE, SET_SLIDE, SET_MODE, ADD_ITEM,RESET_DRAW_POINTS,ADD_DRAW_POINTS} from "../actions";
import {PRESENT} from "../../index";

const initialState = {
    mode: PRESENT,
    index: 1,
    slides: [
        {type: 'title', title: 'TIW 8', visible: true, notes: "note 1"},
        {type: 'content', title: 'TP 1', text: "Le TP porte sur des rappels de developpement Web", visible: false, notes: "ce transparent est caché",
            items:["elem1","elem2","elem3","elem4"]},
        {type: 'content', title: 'TP 2', text: "Le TP porte sur la creation d'un outil de presentation HTML", visible: true, notes: "",
            items:["elem11","elem22","elem33","elem44"]},
        {type: 'content', title: 'TP 3', text: "Le TP 3", visible: true, notes: "note 4",items:["elem111","elem222","elem333"]},
        {type: 'content', title: 'TP 4', text: "Le TP 4", visible: true, notes: "note 5",items:["elem14","elem24"]},
        {type: 'title', title: 'Question ?', visible: true, notes: "note 6"},
    ],
    drawing: {
        clickX: [],
        clickY: [],
        clickDrag: []
    }


};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SLIDE: {
            state.slides.splice(action.pos, 0, action.payload);
            return {
                ...state,
                slides: state.slides
            };
        }
        case ADD_ITEM: {
            state.slides[state.index - 1].items.push(action.payload)
            return {
                ...state,
                slides: state.slides
            };
        }

        case REMOVE_SLIDE: {
            state.slides.splice(action.pos, 0, action.payload);
            return {
                ...state,
                slides: state.slides
            };
        }
        case NEXT_SLIDE:
            let nextIndex  =state.index + 1;
            let nbSlide =  state.slides.length;
            if(nextIndex >= nbSlide ) nextIndex = nbSlide;
            return {
                ...state,
                index: nextIndex
            };
        case PREVIOUS_SLIDE:
            let previousIndex =state.index -1;
            if(previousIndex <= 1 ) previousIndex =1;
            return {
                ...state,
                index: previousIndex
            };
        case SET_SLIDE:
            return {
                ...state,
                index: action.index >= state.slides.length ? state.slides.length : (action.index <=1 ? 1 : action.index),
                drawing: {
                    clickX: [],
                    clickY: [],
                    clickDrag: []
                }
            };
        case SET_MODE:
            return {
                ...state,
                mode: action.mode
            };
        case ADD_DRAW_POINTS:
            let newClickX = [...state.drawing.clickX],
                newClickY = [...state.drawing.clickY],
                newClickDrag = [...state.drawing.clickDrag];
            newClickX.push(...action.clickX);
            newClickY.push(...action.clickY);
            newClickDrag.push(...action.clickDrag);
            return {
                ...state,
                drawing: {
                    clickX: newClickX,
                    clickY: newClickY,
                    clickDrag: newClickDrag
                }
            };
        case RESET_DRAW_POINTS:
            return {
                ...state,
                drawing: {
                    clickX: [],
                    clickY: [],
                    clickDrag: []
                }
            };

        default:
            return state
    }
}

export default rootReducer;
