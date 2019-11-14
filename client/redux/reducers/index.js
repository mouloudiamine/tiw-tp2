import {ADD_SLIDE, NEXT_SLIDE, PREVIOUS_SLIDE, REMOVE_SLIDE, SET_SLIDE, SET_MODE} from "../actions";
import {PRESENT} from "../../index";

const initialState = {
    mode: PRESENT,
    index: 1,
    slides: [
        {type: 'title', title: 'TIW 8', visible: true, notes: "note 1"},
        {type: 'content', title: 'TP 1', text: "Le TP porte sur des rappels de developpement Web", visible: false, notes: "ce transparent est caché"},
        {type: 'content', title: 'TP 2', text: "Le TP porte sur la creation d'un outil de presentation HTML", visible: true, notes: ""},
        {type: 'content', title: 'TP 3', text: "Le TP 3", visible: true, notes: "note 4"},
        {type: 'content', title: 'TP 4', text: "Le TP 4", visible: true, notes: "note 5"},
        {type: 'title', title: 'Question ?', visible: true, notes: "note 6"},
    ]
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
                index: action.index
            };
        case SET_MODE:
            return {
                ...state,
                mode: action.mode
            };

        default:
            return state
    }
}

export default rootReducer;
