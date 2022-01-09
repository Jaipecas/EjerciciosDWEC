const Match = require('../ejercicio3TresRalla/tresRalla');

let match = new Match();

describe("Tests ejercicio tres en ralla", () => {

    describe("Test inserción de datos", () => {

        it("Se insertan una ficha", () => {
            match.insertInBoard(1, 1);

            expect(match.board[0][0]).toBe("X")
        })

    })

    describe("Test introduce datos incorrectos", () => {

        it("Introduce letras", () => {
            const err = () => {
                match.checkValidMov("ddd", "dasdsa")
            }

            expect(err).toThrow("No ha introducido un número")
        })

        it("Introduce string vacía", () => {
            const err = () => {
                match.checkValidMov("", "")
            }

            expect(err).toThrow("No ha introducido un número")
        })

        it("Introduce coordenadas incorrectas", () => {
            const err = () => {
                match.checkValidMov(5, 0)
            }

            expect(err).toThrow("Los números deben ser del 1 al 3")
        })

        it("Introduce una ficha donde ya hay una", () => {
            match.board[0][0] = "X"
     
            const err = () => {
                match.checkValidMov(1, 1)
            }

            expect(err).toThrow("Ya hay una ficha en esa posición")
        })
    })

    describe("Test cambio de turno", () => {

        it("Se pasa al segundo jugador", () => {
            match.changeTurn()

            expect(match.turn).toBe(2)
        })

    })

    describe("Test formas de que se acabe el juego", () => {

        it("Ralla primera fila", () => {

            match.board[0][0] = 'X';
            match.board[0][1] = 'X';
            match.board[0][2] = 'X';

            expect(match.endGame()).toBe(true);
        })

        it("Ralla segunda fila", () => {

            match.board[1][0] = 'X';
            match.board[1][1] = 'X';
            match.board[1][2] = 'X';

            expect(match.endGame()).toBe(true);
        })

        it("Ralla tercera fila", () => {

            match.board[2][0] = 'X';
            match.board[2][1] = 'X';
            match.board[2][2] = 'X';

            expect(match.endGame()).toBe(true);
        })

        it("Ralla diagonal izq-der", () => {

            match.board[0][0] = 'X';
            match.board[1][1] = 'X';
            match.board[2][2] = 'X';

            expect(match.endGame()).toBe(true);
        })

        it("Ralla diagonal der-izq", () => {

            match.board[2][0] = 'X';
            match.board[1][1] = 'X';
            match.board[0][2] = 'X';

            expect(match.endGame()).toBe(true);
        })

        it("No quedan casillas", () => {
            match.board[0][0] = 'X';
            match.board[0][1] = 'O';
            match.board[0][2] = 'X';

            match.board[1][0] = 'X';
            match.board[1][1] = 'O';
            match.board[1][2] = 'X';

            match.board[2][0] = 'X';
            match.board[2][1] = 'O';
            match.board[2][2] = 'X';

            expect(match.endGame()).toBe(true);
        })
    })


})