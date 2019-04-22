import React from 'react'
import Tile from './Tile'
import GamePanel from './GamePanel'
export default class Board extends React.Component{

    // Creating variables here so we can understand whats going on
    tiles = [];

    constructor(props){
        super(props)
        this.createBoard(props.size)
    }

    render(){
        return <div>
            <div className="grid-container">
                {this.tiles}
                <GamePanel className="game-panel"/>
            </div>
        </div>
        
    }

    createBoard(size){
        let tmp = size === undefined?16:size
        this.tiles = [...Array(tmp).keys()].map(
            index => {
                return <Tile idx={index} classes={"position-" + index} text={index}/>
            }
        )
    }
}