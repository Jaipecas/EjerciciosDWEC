const {
    generateId,
    createIdGenerator
} = require('../ejer2_ids');

describe("Tests ejericios ids", () => {

    it("Se genera un id según un número y una longitud", () => {
        let id = generateId(1, 4)

        expect(id).toEqual('0001')
    })

    it("Se crea un genereador de ids de 3 cifras que devuelve un id", () => {
        let generator;
        let id;

        generator = createIdGenerator(3, generateId)
        id = generator();

        expect(id).toEqual('001')
    })

    it("Se crean varios ids con un generador", () => {
        let generator;
        let ids = [];

        generator = createIdGenerator(5, generateId)
        ids = Array(3).fill().map(() => generator())

        expect(ids).toEqual(['00001', '00002', '00003'])
    })

})