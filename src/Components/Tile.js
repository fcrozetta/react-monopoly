import React from 'react'
import Card from './Card'

export default class Tile extends React.Component{

    constructor(props){
        super(props)
        if (props.classes !== undefined) {
            this.classes += " " + props.classes
        }

        this.state = {hasPlayer1:false,hasPlayer2:false}
    }

    styles = {
        border: '1px solid red ',
        width:'19vh',
        height:'19vh',
    }

    player1 = {
        position:'relative',
        top:"-7em",
    }

    player2 = {
        position:'relative',
        top:"-5em",
    }

    addp1(){
        this.setState({hasPlayer1:true})
    }
    removep1(){
        this.setState({hasPlayer1:false})
    }

    addp2(){
        this.setState({hasPlayer2:true})
    }
    removep2(){
        this.setState({hasPlayer2:false})
    }

    classes = ""
    
    render(){
        let player1, player2
        if (this.state.hasPlayer1) {
            player1 = <h1 style={this.player1}>player1</h1>
        }

        if (this.state.hasPlayer2) {
            player2 = <h1 style={this.player2}>player2</h1>
        }
        return <div className={this.classes} style={this.styles} key={this.props.idx}>
            <Card idx={this.props.idx}/>
            {player1}
            {player2}
        </div>
    }
}