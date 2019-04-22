import React from 'react'
import Tile from './Tile'
import GamePanel from './GamePanel'
export default class Board extends React.Component{


    constructor(props){
        super(props)
        this.state = {player1pos:0,player2pos:0}
        
        this.onPlayerMove = this.onPlayerMove.bind(this)
        this.createBoard = this.createBoard.bind(this)
    }
    
    onPlayerMove(e){
        const tmpTiles = this.state.tiles
        if (e.isPlayer1) {
            this.setState({player1pos:e.position})
        }else{
            this.setState({player2pos:e.position})
        }
        this.setState({tiles:tmpTiles})
    }
    
    render(){
        this.createBoard(this.props.size)
        return <div>
            <div className="grid-container">
                {this.createBoard(this.props.size)}
                <GamePanel className="game-panel" onPlayerMove={this.onPlayerMove}/>
            </div>
        </div>
        
    }
    
    createBoard(size){
        let tmp = size === undefined?16:size
        let tilesTmp = [...Array(tmp).keys()].map(
            index => {
                return <Tile idx={index} key={index} classes={"position-" + index} 
                text={index} hasPlayer1={this.state.player1pos === index} hasPlayer2={this.state.player2pos === index} />
            }
        )
        return tilesTmp
    }
}