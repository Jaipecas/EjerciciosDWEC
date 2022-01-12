const {
    mergeValues
} = require("../ejer1_purificacion")

describe("Test purificación", () => {

    it("Valores cuya suma es mayor que el mínimo de 15", () => {
        let values = [10, 20, 30, 40];

        values = mergeValues(values);

        expect(values).toEqual([100]);
    })

    it("Valores cuya suma es menor que el mínimo de 15", () => {
        let values = [1,2,3,4];

        values = mergeValues(values);

        expect(values).toEqual([15]);
    })
})