import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      player1: "💥",
      player2: "⚡️",
      counter: 1, 
      isActive: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto']

    }
  }


  handleGamePlay = (index) => {
    const {squares,player1,player2,counter} = this.state
    if(counter % 2 !== 0 && counter < 10 ) {
  
      squares[index] = player1
      isActive
      let newCounter = counter + 1
      this.setState({squares:squares, counter:newCounter})
  
    }else if(counter % 2 === 0 && counter < 10 ) {
  
    squares[index] = player2
    let newCounter = counter + 1
  
    this.setState({squares:squares, counter:newCounter})
    this.setState({squares:squares})
    }
  }

  render() {
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
        <button>
      
    </button>
      </>
    )
  }
}
export default App
