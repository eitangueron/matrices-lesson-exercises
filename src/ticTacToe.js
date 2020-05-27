const Matrix = require('./Matrix')

class TicTacToe extends Matrix{
    constructor(rowNum, colNum){
        super(rowNum, colNum)
        this.recentPlayer  
    }

    loadBoard(){
        const matrix = []
        for(let r=0; r<3; r++){
            let row = []
            for(let c=0; c<3; c++){
                row.push('.')
            }
            matrix.push(row)
        }
        this.matrix = matrix
    }
    
    checkWin(){
        if (
            this.matrix[0][0] === this.matrix[0][1] && this.matrix[0][1] === this.matrix[0][2] && this.matrix[0][2] !== '.' ||
            this.matrix[1][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[1][2] && this.matrix[1][2] !== '.'||
            this.matrix[2][0] === this.matrix[2][1] && this.matrix[2][1] === this.matrix[2][2] && this.matrix[2][2] !== '.' ||   
            this.matrix[0][0] === this.matrix[1][0] && this.matrix[1][0] === this.matrix[2][0] && this.matrix[2][0] !== '.' ||
            this.matrix[0][1] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][1] && this.matrix[2][1] !== '.' ||
            this.matrix[0][2] === this.matrix[1][2] && this.matrix[1][2] === this.matrix[2][2] && this.matrix[2][2] !== '.' || 
            this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2] && this.matrix[2][2] !== '.' ||
            this.matrix[2][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[0][2] && this.matrix[0][2] !== '.'        
            ) { return true}
        // Options for win:
        // 00 01 02
        // 10 11 12
        // 20 21 22
        // 00 10 20                         
        // 10 11 12
        // 20 21 22
        // 00 11 22
        // 20 11 02
    }


    play(rowNum, columnNum, player){
        
        if(player === this.recentPlayer){
            console.log('Not Your Turn boyyyy') 
            return
        }

        if(this.matrix[rowNum][columnNum]!=='.'){
            console.log('Position already taken')
            return
        }

        if(player === 1){ 
            this.recentPlayer = player          //x
            this.alter(rowNum,columnNum,'X')
            if(this.checkWin()){
                this.print()
                console.log(`Congrats! Winner: ${player}`)
                 this.loadBoard()
                }
        } else if (player === 2){       //o
            this.recentPlayer = player          
            this.alter(rowNum,columnNum,'O')
            if(this.checkWin()){
                this.print()
                console.log(`Congrats! Winner: ${player}`)
                this.loadBoard()
               }
        } else {
            console.log('Player must be a number (1 or 2) !') 
        }
    }
}

let board = new TicTacToe()
board.loadBoard()
// console.log(board.matrix)
board.play(2, 2, 1)

// board.play(2, 0, 1)
// board.play(2, 2, 2)

board.play(0, 0, 2)
board.play(0, 2, 1)
board.play(1, 0, 2)
board.play(1, 2, 1) //prints Congratulations Player 1

// board.print()
// board.print()

//prints
// o       .       x
// o       .       x
// .       .       x

