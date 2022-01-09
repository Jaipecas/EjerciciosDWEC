const prompt = require('prompt-sync')({
    sigint: false
});


class Match {

    constructor() {
        this.board = new Array(3);
        this.board[0] = ['', '', '']
        this.board[1] = ['', '', '']
        this.board[2] = ['', '', '']
        this.turn = 1;
    }

    startGame() {
        let end;
        console.log('COMIENZA EL JUEGO')
        console.log('JUGADOR 1: X; JUGADOR 2: O')
        do {
            this.infoTurn();
            this.readMove();
            this.printBoard();
            end = this.endGame();
            if (end === false) {
                this.changeTurn()
            }
        } while (end === false);

        console.log(`EL JUGADOR ${this.turn} HA GANADO`)
        console.log('EL JUEGO A FINALIZADO')
    }

    infoTurn() {
        if (this.turn === 2) {
            console.log('Turno del jugador 2')
        } else {
            console.log('Turno del jugador 1')
        }
    }

    readMove() {
        let x;
        let y;
        let valid = false;

        do {
            try {
                x = prompt("Inserte la coordeada x (de 1 a 3): ");
                y = prompt("Inserte la coordeada y (de 1 a 3): ");

                valid = this.checkValidMov(y, x);
            } catch (error) {
                console.log(error)
            }
        } while (valid === false);

        this.insertInBoard(y, x);
    }

    insertInBoard(y, x) {
        if (this.turn === 1) {
            this.board[y - 1][x - 1] = 'X';
        } else {
            this.board[y - 1][x - 1] = 'O';
        }
    }

    printBoard() {
        let line = []
        for (let i = this.board.length - 1; i >= 0; i--) {
            for (let j = 0; j < this.board.length; j++) {
                line[j] = this.board[i][j];
            }
            console.log(line);
        }
    }

    changeTurn() {
        if (this.turn === 1) {
            this.turn = 2
        } else {
            this.turn = 1
        }
    }

    endGame() {
        let game = false;

        if (this.emptyBoxes() === false || this.checkLines() === false || this.checkDiagonals() === false) {
            game = true;
        }
        return game;
    }

    checkLines() {
        let lines = true;

        this.board.forEach(arr => {
            //Comprueba la linea no tenga ningun valor undefined
            if (arr.some(val => val === '') === false) {
                //Se comrpueba que todos los valores de la fila son iguales
                if (arr.every(val => val === arr[0])) {
                    lines = false;
                };
            }

        });
        return lines;
    }

    checkDiagonals() {
        let diagonals = true;
        let diagonal1 = [this.board[0][0], this.board[1][1], this.board[2][2]];
        let diagonal2 = [this.board[2][0], this.board[1][1], this.board[0][2]];

        if (diagonal1.includes('') === false && diagonal1.every(val => val === diagonal1[0])) {
            diagonals = false;
        }

        if (diagonal2.includes('') === false && diagonal2.every(val => val === diagonal2[0])) {
            diagonals = false;
        }

        return diagonals;
    }

    checkValidMov(y, x) {
        if (isNaN(parseInt(x)) || isNaN(parseInt(y))) {
            throw "No ha introducido un número"
        }
        if (x < 1 || x > 3 || y < 1 || y > 3) {
            throw "Los números deben ser del 1 al 3"
        }
        if (this.board[y - 1][x - 1] !== '') {
            throw "Ya hay una ficha en esa posición"
        }
        return true
    }

    emptyBoxes() {
        let boxes = true;
        let rowsComplete = 0;

        this.board.forEach(element => {
            if (element.includes('') === false) {
                rowsComplete += 1;
            }
        });

        if (rowsComplete === 3) {
            boxes = false;
        }

        return boxes;
    }
}

module.exports = Match;