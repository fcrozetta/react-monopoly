import React from 'react';
export default class TileCard extends React.Component{

    classes="";

    styles={
        position:"relative",
        top:"0",
        margin:"0",
        backgroundColor:"cyan",
        height:"100%",
    }

    selectCard(){

    }


    render(){
        return <div className={this.classes} style={this.styles}><p>{this.props.idx}</p></div>    
    }
}