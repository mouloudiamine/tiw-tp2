import {ADD_SLIDE, NEXT_SLIDE, PREVIOUS_SLIDE, REMOVE_SLIDE, SET_SLIDE, SET_MODE, ADD_ITEM,RESET_DRAW_POINTS,ADD_DRAW_POINTS} from "../actions";
import {PRESENT} from "../../index";

const initialState = {
    mode: PRESENT,
    index: 1,
    slides: [
        {type: 'title', title: 'TIW 8', visible: true, notes: "note 1"},
        {type: 'content', title: 'TP 1', text: "Le TP porte sur des rappels de developpement Web", visible: false, notes: "ce transparent est caché",
            items:["WEB 1.0","web 2.0","Web 3.0"], image:"https://qph.fs.quoracdn.net/main-qimg-b1ebcd8542cd4210d70bba11dff15df9.webp"},
        {type: 'content', title: 'TP 2', text: "Le TP porte sur la creation d'un outil de presentation HTML", visible: true, notes: "",
            items:["CSS","JAVASCRIPT","HTML","React Js"], image :"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/120110048/original/311fd1304a687959d52413849ed9299cd62e4857/do-html-css-javascript-react-js-angular.jpg"},
        {type: 'content', title: "TP 3  ", text: "Le TP 3 porte sur la conception et la réalisation d'un entrepot de données (Datawarehouse)", visible: true, notes: "note 4",items:["Data warehouse","ETL","OLAP"], image:"https://www.researchgate.net/profile/Senda_Bouaziz4/publication/314248372/figure/fig1/AS:482071350124545@1491946174097/Web-Services-Based-Real-Time-Data-Warehouse-Architecture-7.png"},
        {type: 'content', title: 'TP 4', text: "Le TP 4 porte sur les technologies Arduino & Raspberry ", visible: true, notes: "note 5",items:["Arduino ","Raspberry"],image :"https://i0.wp.com/makezine.com/wp-content/uploads/2015/12/raspberry-pi-vs-arduino-board.jpg?resize=1200%2C670&strip=all&ssl=1"},
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
            let stock = state.slides;
            stock[state.index - 1].items.push(action.payload);
            return {
                ...state,
                slides: [...state.slides,stock]
            };
        }
        case REMOVE_SLIDE: {
            console.log("remove slide");
            let newSlides = [...state.slides];
            newSlides.splice(action.pos, 1);
            return {
                ...state,
                slides: newSlides
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
