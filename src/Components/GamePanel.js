import React from 'react'
import Player from '../Models/Player'
import '../../node_modules/bulma/bulma.sass'
import Dice from '../Models/Dice'

// This class controls the Game, showing player options in the center of the board
export default class GamePanel extends React.Component{
    constructor(props){
        // game setup
        super(props)
        let players=[];
        this.dice = new Dice();
        players.push(new Player("fer"))
        players.push(new Player("nando"))

        // load the first player to play
        this.state = { players: players, isPlayer1: true, hasBuyOption: false, hasDiceRoll:true }
        this.currentPlayer = this.state.players[0]
        
        
        // binding "this"  to the function
        this.update = this.update.bind(this)
        this.endTurn = this.endTurn.bind(this)
        this.rollDice = this.rollDice.bind(this)
        this.onPlayerMove = this.onPlayerMove.bind(this)
    }

    classes="box"
    style={
        width:'100%',
        height:'100%',
        gridRow: "2/span 3",
        gridColumn: "2/span  3",
        border:"solid 3px green",
    }

    update(){
        this.currentPlayer = this.state.isPlayer1?this.state.players[0]:this.state.players[1]
    }

    endTurn(e){
        let players = this.state.players
        if (this.state.isPlayer1) {
            players[0] = this.currentPlayer
        }else{
            players[1] = this.currentPlayer
        }
        this.setState({
            isPlayer1: !this.state.isPlayer1,
            hasDiceRoll:true,
            hasBuyOption:false,
            players: players
        })

    }

    // Function to roll the dice and return the value
    rollDice(e){
        this.dice.roll();
        this.setState({hasDiceRoll: false})
        this.onPlayerMove(this.dice.currentNumber)
    }

    // Sends event to Board
    onPlayerMove(diceNumber){
        let nextPosition = this.currentPlayer.position + diceNumber;
        if (nextPosition > 15) {
            nextPosition -= 16
            this.currentPlayer.cash += 500
        }
        this.currentPlayer.position = nextPosition        
        this.props.onPlayerMove({isPlayer1:this.state.isPlayer1, position:this.currentPlayer.position});
    }

    render(){
        this.update()
        let diceOption;
        // let buyOption;

        // conditional rendering for dice roll
        if (this.state.hasDiceRoll) {
            diceOption = <div className="columns">
                <div className="column is-12"><button className="button is-info" onClick={this.rollDice}>Roll Dice & move</button></div>
            </div>
        }else{
            diceOption = <div className="columns">
                <div className="column is-12">
                    <h2 className="" >You rolled: {this.dice.currentNumber}</h2>
                </div>
            </div>
        }

        // conditional rendering for buying properties
        if (this.state.hasBuyOption && !this.state.hasDiceRoll) {
            
        }

        return <div style={this.style} className={this.classes}>
            <h1 className="has-text-centered has-text-info">{this.currentPlayer.name}'s turn</h1>
            <div className="columns">
                <h2 className="column is-12">CA$H: {this.currentPlayer.cash}</h2>
            </div>
            <div className="columns">
                <h2 className="column is-12">Properties: {this.currentPlayer.properties.length}</h2>
            </div>
            {/* <div className="columns">
                <div className="column">DEBUG_OPTIONS</div>
                <div className="column"><button className="button is-danger" onClick={this.onPlayerMove}>onPlayerMove</button></div>

            </div> */}

            {diceOption}

            <div className="" >
                <button className="button is-success is-fullwidth" onClick={this.endTurn}>End Turn</button>
            </div>
        </div>
    }
}