import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: ["🤯", "🤯", "🤯", "🤯", "🤯", "🤯", "🤯", "🤯", "🤯"],
      player1: "💥",
      player2: "⚡️",
      counter: 1, 
      winner: "",
      gameOver: ""
    }
  }


  handleGamePlay = (index) => {
    const {squares,player1,player2,counter} = this.state
    if(counter % 2 !== 0 && counter < 10 && squares[index] !== player2) {
  
      squares[index] = player1
      let newCounter = counter + 1
      this.setState({squares:squares, counter:newCounter})
  
    }else if(counter % 2 === 0 && counter < 10 && squares[index] !== player1) {
  
    squares[index] = player2
    let newCounter = counter + 1
  
    this.setState({squares:squares, counter:newCounter})
    this.setState({squares:squares})

    const winning =[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [6,4,2],
      [0,4,8],
    ]
   
    for(let i=0; i<winning.length; i++) {
      const [a, b, c] = winning[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === "💥"){
      this.setState({ winner: "player1"})
      alert("Player1 has won")

      }else if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === "⚡️"){
      this.setState({ winner: "player2"})
      alert("Player2 has won")
      }
   }
  } 
 }
 resetGame = () => {
  var squares = ["🤯", "🤯", "🤯", "🤯", "🤯", "🤯", "🤯", "🤯", "🤯"]
  

  this.setState({squares: squares, player1: "💥", winner: "", gameOver: ""})

}

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className='gameboard'>
          {this.state.squares.map((value, index) => {
            return(
              <Square 
                key={index}
                value={value}
                index={index}
                handleGamePlay={this.handleGamePlay}
              />
            )
          })}
        </div>
        <button id="resetbutton" onClick={this.resetGame}>Reset Game</button>
        <h2>{this.state.gameOver}</h2>
        <div id='explosion'>
        </div>
      </>
    )
  }
}
export default App
