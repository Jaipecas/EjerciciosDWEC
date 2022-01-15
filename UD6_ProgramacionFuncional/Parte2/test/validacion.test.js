const {
    filterDirections
} = require('../ejer5_validacion');


describe('Test validación direcciones', () => {

    it('Todas las direcciones son correctas', () => {
        let arrayFiltered;
        let direcciones = [{
                pais: 'España',
                region: '',
                cp: '46014',
                ciudad: 'Valencia',
                direccion: 'Carrer Misericòrdia, 34',
                complemento: '',
                movil: '',
                fijo: '961 20 69 90'
            },
            {
                pais: 'España',
                region: '',
                cp: '46960',
                ciudad: 'Aldaia',
                direccion: 'C/ Montcabrer, 22',
                complemento: 'Pol. Ind. La Lloma',
                movil: '666555888',
                fijo: ''
            },
            {
                pais: 'España',
                region: 'Alicante',
                cp: '',
                ciudad: 'Petrer',
                direccion: 'Los Pinos, 7',
                complemento: '',
                movil: '',
                fijo: '965 37 08 88'
            }
        ]

        arrayFiltered = filterDirections(direcciones);

        expect(arrayFiltered).toEqual(
            [{
                    pais: 'España',
                    region: '',
                    cp: '46014',
                    ciudad: 'Valencia',
                    direccion: 'Carrer Misericòrdia, 34',
                    complemento: '',
                    movil: '',
                    fijo: '961 20 69 90'
                },
                {
                    pais: 'España',
                    region: '',
                    cp: '46960',
                    ciudad: 'Aldaia',
                    direccion: 'C/ Montcabrer, 22',
                    complemento: 'Pol. Ind. La Lloma',
                    movil: '666555888',
                    fijo: ''
                },
                {
                    pais: 'España',
                    region: 'Alicante',
                    cp: '',
                    ciudad: 'Petrer',
                    direccion: 'Los Pinos, 7',
                    complemento: '',
                    movil: '',
                    fijo: '965 37 08 88'
                }
            ]
        )
    })

    it('No se introduce un país', () => {
        let arrayFiltered;
        let direcciones = [{
                // Válido
                pais: 'España',
                region: '',
                cp: '46014',
                ciudad: 'Valencia',
                direccion: 'Carrer Misericòrdia, 34',
                complemento: '',
                movil: '',
                fijo: '961 20 69 90'
            },
            {
                // Inválido: no tiene país
                pais: '',
                region: 'Alicante',
                cp: '',
                ciudad: 'Petrer',
                direccion: 'Los Pinos, 7',
                complemento: '',
                movil: '',
                fijo: '965 37 08 88'
            }
        ]

        arrayFiltered = filterDirections(direcciones);

        expect(arrayFiltered).toEqual(
            [{
                pais: 'España',
                region: '',
                cp: '46014',
                ciudad: 'Valencia',
                direccion: 'Carrer Misericòrdia, 34',
                complemento: '',
                movil: '',
                fijo: '961 20 69 90'
            }]
        )
    })

    it('No introduce ni movil ni fijo', () => {
        let arrayFiltered;
        let direcciones = [{
                pais: 'España',
                region: '',
                cp: '46014',
                ciudad: 'Valencia',
                direccion: 'Carrer Misericòrdia, 34',
                complemento: '',
                movil: '',
                fijo: '961 20 69 90'
            },
            {
                pais: 'España',
                region: 'Alicante',
                cp: '',
                ciudad: 'Petrer',
                direccion: 'Los Pinos, 7',
                complemento: '',
                movil: '',
                fijo: ''
            }
        ]

        arrayFiltered = filterDirections(direcciones);

        expect(arrayFiltered).toEqual(
            [{
                pais: 'España',
                region: '',
                cp: '46014',
                ciudad: 'Valencia',
                direccion: 'Carrer Misericòrdia, 34',
                complemento: '',
                movil: '',
                fijo: '961 20 69 90'
            }]
        )
    })

    it('No se introduce ni región ni código postal', () => {
        let arrayFiltered;
        let direcciones = [{
                // Válido
                pais: 'España',
                region: '',
                cp: '46014',
                ciudad: 'Valencia',
                direccion: 'Carrer Misericòrdia, 34',
                complemento: '',
                movil: '',
                fijo: '961 20 69 90'
            },
            {
                // Inválido: no tiene país
                pais: 'España',
                region: '',
                cp: '',
                ciudad: 'Petrer',
                direccion: 'Los Pinos, 7',
                complemento: '',
                movil: '',
                fijo: '965 37 08 88'
            }
        ]

        arrayFiltered = filterDirections(direcciones);

        expect(arrayFiltered).toEqual(
            [{
                pais: 'España',
                region: '',
                cp: '46014',
                ciudad: 'Valencia',
                direccion: 'Carrer Misericòrdia, 34',
                complemento: '',
                movil: '',
                fijo: '961 20 69 90'
            }]
        )
    })
})