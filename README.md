# ❌ ⭕️ Tic Tac Toe

This is a web game for two players on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player.

This project will challenge your knowledge of React but should also be an exercise in creating good user experiences. Your view should be styled to look good as well as function flawlessly.

### 📚 User Stories
- As a user, I can see a 3x3 grid game board on the page.
 - Branch: grid
    - Square component - Styled in css to have height, width, border
    -Imported and called component in App.js
    - center aligned h1
    - we created gameboard className in App.js and styled it in App.css
    - Mapped over this.state.squares to create the grid
- As a user, I can click on a square to mark it.
    - Created onclick branch
    - Switched navigator and driver
    - Destructured this.state.squares
    - Created a handleGamePlay method to click on a square and display a checkmark
    - Passed props to handleClick method on Square.js
    - Rndered handleGameplay method in App.js
- As a user, my partner can click on a square after me and see their mark.
    - we added player 1, player2, and a counter to state.
    - we added conditions to handleGamePlay to alternate turns
- As a user, I can't click on a square that has already been marked.
    - Used the logical and in our if statement of handleGame play to stop clicking on squares that have been clicked.
- As a user, when either my partner or I win the game (3 squares in a row: horizontally, vertically, or diagonally) I can see a notice telling me which player won.
    -created a variable called winning set equal to the location of different winning combinations
    - create an alert for when player1 or player 2 has the winning combination. 
    -set state so alert pops up for winner

- As a user, I can't continue playing the game after the game has been won.
- As a user, if there are no more squares available, I can see a notice telling me that the game has ended.
- As a user, I can click on a restart button that will clear the game board.
    - created a reset method that returns setState back to original
    - created a reset button and center aligned it

### 🏔 Stretch Goals
- As a user, I can see a notification that informs me whether it is currently my partner or my turn.
- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).

### 🛠 Resources
- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840)
