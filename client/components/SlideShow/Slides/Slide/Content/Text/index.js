import React from "react";
import {connect} from "react-redux";
import EasyEdit from 'react-easy-edit';
import Notes from "../../Notes";

const mapStateToProps = (state) => {
    return {
        index: state.index,
        slides: state.slides[state.index-1]
    }
};

export class Text extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {

        return(
            <EasyEdit
                type="text"
                onSave={()=>{}}
                onCancel={()=>{}}
                value = {this.props.slides.text}
                saveButtonLabel="Sauvegarder"
                cancelButtonLabel="Annuler"
                attributes={{ name: "awesome-input", id: 1}}
            />
            );
    }

}
export const text = connect(mapStateToProps, null)(Text);

