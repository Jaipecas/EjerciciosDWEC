class Gato {

    constructor(hambre, cansancio, felicidad) {
        this.hambre = hambre;
        this.cansancio = cansancio;
        this.felicidad = felicidad;
    }

    alimentar(cantidadAlimento) {
        this.hambre -= cantidadAlimento;
        this.estado();
    }

    dormir(cantidadSueño) {
        this.cansancio -= cantidadSueño;
        this.estado();
    }

    jugar(cantidadJuego) {
        this.felicidad += cantidadJuego;
        this.estado();
    }

    estado() {
        console.log(`Estado del gato: hambre = ${this.hambre}, cansancio = ${this.cansancio} y felicidad = ${this.felicidad}`)
    }

    pasaTiempo(milisegundos) {
        this.reduccionStats(milisegundos)
        console.log(`Paso del timepo: ${milisegundos}`)
        this.estado()
    }

    reduccionStats(milisegundos) {
        if (milisegundos <= 3) {
            this.hambre += 1;
            this.cansancio += 1;
            this.felicidad -= 1;
        } else if (milisegundos > 3 && milisegundos <= 6) {
            this.hambre += 5;
            this.cansancio += 5;
            this.felicidad -= 5;
        } else {
            this.hambre += 10;
            this.cansancio += 10;
            this.felicidad -= 10;
        }
    }
}

module.exports = Gato;

