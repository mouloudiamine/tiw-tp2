import React from "react";
import {content as Content} from "./Content";
import {Titre} from "./Titre";
import Row from "react-bootstrap/Row";
import {connect} from "react-redux";
import {EDIT, PRESENT} from "../../../../index";
import {addDrawPoints} from "../../../../redux/actions";
let clickX = [],
    clickY = [],
    clickDrag = [],
    paint = false;

function addClick(x, y, dragging) {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
}

function redraw(refCanvas) {
    let context = refCanvas.getContext('2d'),
        width = refCanvas.getBoundingClientRect().width,
        height = refCanvas.getBoundingClientRect().height;

    refCanvas.setAttribute('width', width);
    refCanvas.setAttribute('height', height);

    context.clearRect(0, 0, context.width, context.height); // Clears the canvas

    context.strokeStyle = "#df4b26";
    context.lineJoin = "round";
    context.lineWidth = 2;

    for (let i = 0; i < clickX.length; i++) {
        context.beginPath();
        if (clickDrag[i] && i) {
            context.moveTo(clickX[i - 1] * width, clickY[i - 1] * height);
        } else {
            context.moveTo((clickX[i] * width) - 1, clickY[i] * height);
        }
        context.lineTo(clickX[i] * width, clickY[i] * height);
        context.closePath();
        context.stroke();
    }
}

function pointerDownHandler(ev) {
    let refCanvas = ev.target;
    console.error('HEY ! ICI ON PEUT DIFFERENCIER QUEL TYPE DE POINTEUR EST UTILISE !');

    let width = refCanvas.getBoundingClientRect().width,
        height = refCanvas.getBoundingClientRect().height,
        mouseX = (ev.pageX - refCanvas.offsetLeft) / width,
        mouseY = (ev.pageY - refCanvas.offsetTop) / height;

    paint = true;
    addClick(mouseX, mouseY, false);
    redraw(refCanvas);
}

function pointerMoveHandler(ev) {
    let refCanvas = ev.target;
    if (paint) {
        let width = refCanvas.getBoundingClientRect().width,
            height = refCanvas.getBoundingClientRect().height;
        addClick((ev.pageX - refCanvas.offsetLeft) / width, (ev.pageY - refCanvas.offsetTop) / height, true);
        redraw(refCanvas);
    }
}

function pointerUpEvent(ev) {
    paint = false;
}

function setPoints(drawing, canvas) {
    clickX = drawing.clickX;
    clickY = drawing.clickY;
    clickDrag = drawing.clickDrag;
    redraw(canvas);
}

export {addClick, pointerDownHandler, pointerMoveHandler, pointerUpEvent, setPoints,
    clickX, clickY, clickDrag};

const mapStateToProps = (state) => {
    return {
        index: state.index,
        slide: state.slides[state.index - 1],
        mode: state.mode,
        drawing: state.drawing
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addPoints: (x, y, drag) => dispatch(addDrawPoints(x, y, drag)),
    }
}

export class Slide extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.refCanvas = React.createRef();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        setPoints(this.props.drawing, this.refCanvas.current);
    }


    render() {
        let type = this.props.slide.type;
        let title = this.props.slide.title;
        let mode = this.props.mode;
        return (
            <Row className={`justify-content-center align-items-center ${mode !== EDIT ? 'h-75' : 'h-100'} bg-light text-dark`}>
                <Titre title={title}/>
                {type === "title" ? '' : <Content/>}
                <canvas className={`stroke ${mode !== PRESENT ? 'h-75' : 'h-100'}`}
                        ref={this.refCanvas}
                        onPointerDown={pointerDownHandler}
                        onPointerMove={pointerMoveHandler}
                        onPointerUp={(ev) => {pointerUpEvent(ev);
                        this.props.addPoints(clickX, clickY, clickDrag)}}/>
            </Row>);
    }
}
export const slide = connect(mapStateToProps, mapDispatchToProps)(Slide);
