/* Write your code below */
class Matrix {
    constructor(rowNum, colNum){
        this.matrix = this.generateMatix(rowNum, colNum)
    }

    generateMatix(rowNum, colNum){
        const matrix = []
        let counter = 1
        for(let r=0; r<rowNum; r++){
            let row = []
            for(let c=0; c<colNum; c++){
                row.push(counter)
                counter++
            }
            matrix.push(row)
        }
        return matrix
    }
    
    get(rowNum, colNum){
        return this.matrix[rowNum][colNum] 
    }

    print(){
        let end = ''
        for(let row of this.matrix){
            for(let num of row){
                end += (num + '\t')
            }
            end+= '\n'
        }
        console.log(end)
    }

    printColumn(colNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][colNum])
        }
    }

    printRow(rowNum){
        let row = this.matrix[rowNum]
        for(let num of row){
            console.log(num)
        }
    }

    alter(rowNum, colNum, newVal){
        this.matrix[rowNum][colNum] = newVal
    }

    findCoordinate(num){
        for(let r=0; r<this.matrix.length; r++){
            for(let c=0; c<this.matrix[r].length; c++){
                if (num === this.matrix[r][c]){
                    return {x:c, y:r}
                }
            }
        }
    }
}



//You can paste the code from the lesson below to test your solution
// let m = new Matrix(3, 4)
// m.print()
// //prints
// /*
// 1       2       3       4
// 5       6       7       8
// 9       10      11      12
// */

// m.alter(0, 0, m.get(1, 1))
// m.printColumn(0) //prints 6, 5, 9 (separate lines)
// m.printRow(0) //prints 6, 2, 3, 4 (separate lines)

// let m = new Matrix(3, 4)
// console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
// console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}

/* Do not remove the exports below */
module.exports = Matrix