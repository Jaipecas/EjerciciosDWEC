const Gato = require('../ejercicio2Gato/gato');

let gato = new Gato();
let randomNum;

function initializeGato() {
    gato.cansancio = 10;
    gato.hambre = 10;
    gato.felicidad = 10;
}

describe("Tests ejercicio gato", () => {

    beforeEach(() => {
        initializeGato();
        randomNum = Math.floor(Math.random() * 10) + 1;
    })

    it("Se alimenta al gato", () => {
        gato.alimentar(randomNum);

        expect(gato.hambre).toBeLessThan(10);
    })

    it("Se duerme al gato", () => {
        gato.dormir(randomNum);

        expect(gato.cansancio).toBeLessThan(10);
    })

    it("Se juega con el gato", () => {
        gato.jugar(randomNum);

        expect(gato.felicidad).toBeGreaterThan(10);
    })

    it("Pasa el tiempo", () => {
        gato.pasaTiempo(randomNum);
        
        expect(gato.hambre).toBeGreaterThan(10);
        expect(gato.cansancio).toBeGreaterThan(10);
        expect(gato.felicidad).toBeLessThan(10);
    })
})