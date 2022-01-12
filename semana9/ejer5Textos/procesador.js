const Parrafo = require('../ejer5Textos/parrafo');

class Procesador {
    constructor(parrafos, ancho) {
        this.#parrafos = parrafos;
        this.#ancho = ancho;
    }

    crearFila(parrafo) {
        let textoModif;

        switch (parrafo.justificado) {
            case "izquierda":

                break;
            case "centro":

                break;
            case "derecha":

                break;
        }

        if (parrafo.justificado === "izquierda") {

        }

        return textoModif;
    }
}