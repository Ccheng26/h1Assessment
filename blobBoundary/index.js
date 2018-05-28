// A Blob is a shape in two-dimensional integer coordinate space where all cells have at least one adjoining cell to the right, left, top, or bottom that is also occupied. Given a 10x10 array of boolean values that represents a Blob uniformly selected at random from the set of all possible Blobs that could occupy that array, write a program that will determine the Blob boundaries. Optimize for finding the correct result, performing a minimum number of cell Boolean value reads, and elegance and clarity of the solution.

// Sample input: (Please view in a monospaced font)
// 0000000000
// 0011100000
// 0011111000
// 0010001000
// 0011111000
// 0000101000
// 0000101000
// 0000111000
// 0000000000
// 0000000000

// Sample output:
// Cell Reads: 44
// Top: 1
// Left: 2
// Bottom: 7
// Right: 6

// A Blob: least one adjoining cell to the right, left, top, or bottom that is also occupied. 
// 10x10 array of boolean values that represents a Blob uniformly selected at random from the set of all possible Blobs that could occupy that array, 
// given text input

class GridParser {
    constructor(inputString) {
        this.grid = this.readData(inputString);
        this.row = 0;
        this.column = 0
        this.top = null;
        this.bottom = null;
        this.left = null;
        this.right = null;
        this.leftShift = null;
        this.boundary = 10
        this.reads = 0;
        this.end = false
    }
    readData(inputString) {
        let g = inputString.split('\n')
        let grid = []
        for (let i = 0; i < g.length; i++) {
            grid[i] = []
            for (let j = 0; j < g[i].length; j++) {
                grid[i].push(g[i][j])
            }
        }
        return grid
    }
    runCheck() {
        let gridArray = this.grid
        while (this.row < this.boundary - 1 && this.column < this.boundary && !this.end) {
            this.walkRight()
        }        
        console.log(`Cell Reads: ${this.reads}\nTop: ${this.top}\nLeft: ${this.left}\nBottom: ${this.bottom}\nRight: ${this.right}`)
    }
    walkRight() {
        this.nextColumn()
        if (!this.top) {
            if (this.checkBlob(this.row, this.column)) { this.initFirst() }
        }
        if (this.column < this.boundary) {
            if (!this.right) {
                this.walkRight()
            } else if (this.right) {
                let checkRightB = this.checkBlob(this.row, this.right + 1)
                if (checkRightB) {
                    if (this.column > this.right) { this.updateRight() }
                    this.walkRight()
                } else if (!checkRightB) {
                    let checkBottomB = this.checkBlob(this.row + 1, this.right)
                    if (checkBottomB) {
                        if (this.right >= this.column) {
                            this.walkRight()
                        } else {
                            this.nextRow()
                            this.updateBottom()
                        }
                    } else if (!checkBottomB) {
                        this.end = true
                    }
                }
            }
        } else if (this.column === this.boundary && this.row < this.boundary) {
            this.nextRow()
        }
    }
    nextColumn() {
        return this.column += 1
    }
    nextRow() {
        if (this.row < this.boundary) {
            if (!this.checkBlob(this.row, this.column)) {
                this.leftShift += 1
            }
            this.column = this.leftShift
            this.row += 1
        }
    }
    checkBlob(y, x) {
        this.reads += 1
        // console.log('check', y, x)
        if (this.grid[y][x] === '1') {
            return true
        }
        return false
    }

    updateRight() {
        this.right = this.column
    }
    updateBottom() {
        this.bottom = this.row
    }
    initFirst() {
        this.top = this.row
        this.left = this.column
        this.leftShift = this.column
        this.right = this.column
        this.bottom = this.row
    }
}

let str =
    `0000000000
0011100000
0011111000
0010001000
0011111000
0000101000
0000101000
0000111000
0000000000
0000000000`

let gr = new GridParser(str)
gr.runCheck()