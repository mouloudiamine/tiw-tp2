import React from "react";
import {connect} from "react-redux";
import EasyEdit from 'react-easy-edit';

const mapStateToProps = (state) => {
    return {
        index: state.index,
        slides: state.slides
    }
};

export class Items extends React.Component {

    render() {
        let listEdit =[];
        let items  = this.props.slides[this.props.index-1].items;

        for (let i=0;i < items.length;i++){
            listEdit.push(
                <EasyEdit
                    type="text"
                    key = {i}
                    onSave={()=>{}}
                    onCancel={()=>{}}
                    value = {items[i]}
                    saveButtonLabel="Sauvegarder"
                    cancelButtonLabel="Annuler"
                    attributes={{ name: "awesome-input"}}
                />)
        }
        return(
            listEdit
        );
    }
}
export const items = connect(mapStateToProps, null)(Items);

