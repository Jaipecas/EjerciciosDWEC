const {
    lazyMultiply
} = require('../ejer3_multiPerezosa');

describe('Test ejercicio 3 multiplicación', () => {
    it("Se proporcionan dos operadores", () => {
        let result;

        result = lazyMultiply(2,3);

        expect(result).toEqual(6);
    })

    it("Se proporcionan 1 operador y luego el otro", () => {
        let f;
        let result;

        f = lazyMultiply(2);
        result = f(3);

        expect(result).toEqual(6);
    })
})