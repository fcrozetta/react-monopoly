import React from 'react'
import Card from './Card'

export default class Tile extends React.Component{

    constructor(props){
        super(props)
        if (props.classes !== undefined) {
            this.classes += " " + props.classes
        }

    }

    styles = {
        border: '1px solid red ',
        width:'19vh',
        height:'19vh',
    }

    player1 = {
        position:'relative',
        top:"-7em",
        background: "red",
        width: "2em",
        height: "2em",
        borderRadius: "50%",
        
    }

    player2 = {
        position:'relative',
        top:"-5em",
        background: "green",
        width: "2em",
        height: "2em",
        borderRadius: "50%",
    }

    classes = ""
    
    render(){
        let player1, player2
        if (this.props.hasPlayer1) {
            player1 = <h1 style={this.player1}></h1>
        }

        if (this.props.hasPlayer2) {
            player2 = <h1 style={this.player2}></h1>
        }
        return <div className={this.classes} style={this.styles} key={this.props.idx}>
            <Card idx={this.props.idx}/>
            {player1}
            {player2}
        </div>
    }
}