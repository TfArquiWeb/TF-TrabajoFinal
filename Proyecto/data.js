module.exports = function () {
    var data = {
        Empresario: [
            {
                idEmpresario: 1,
                nameEmpresario: "Luisa",
                apellidoEmpresario: "",
                emailEmpresario: "luisa@gmail.com",
                dniEmpresario: 1234567,
                numeroEmpresario: 123456789,
                fotoEmpresario: "",
                razonsocialEmpresario: "",
                rucEmpresario: 2020123456,
                rubroEmpresario: "",
                prefEmpresario: "",

            },
        ],
        Contador: [
            {
                idContador: 1,
                nameContador: "Luisa",
                apellidoContador: "",
                emailContador: "luisa@gmail.com",
                dniContador: 1234567,
                numeroContador: 123456789,
                fotoContador: "",
                Empresario: {
                    idEmpresario: 1,
                }
            },

        ],
        CurriculumVitae: [
            {
                idCV: 1,
                habilidadesCV: "Luisa",
                capacidadesCV: "",
                experienciasCV: "",
                Contador: {
                    idContador: 1
                }
            },

        ],
        Contrato: [
            {
                idContrato: 1,
                numeroContrato: 001,
                FechainiContrato:01-12-2010,
                fechafinContrato:01-12-2011,
                FlagContrato: true,
                Contador: {
                    idContador: 1
                },
                Empresario: {
                    iidEmpresariod: 1
                }
            },

        ],
        TipoPago: [
            {
                idTP: 1,
                TipodePago: "Efectivo",
                Contrato: {
                    idContrato: 1
                }
            },
            {
                idTP: 2,
                TipodePago: "Yape",
                Contrato: {
                    idContrato: 2
                }
            },
            {
                idTP: 3,
                TipodePago: "Tarjeta",
                Contrato: {
                    idContrato: 3
                }
            },
            {
                idTP: 4,
                TipodePago: "PLin",
                Contrato: {
                    idContrato: 4
                }
            },

        ],
        TipoMoneda: [
            {
                idTM: 1,
                TipodeMoneda: "Soles",
                Contrato: {
                    idContrato: 1
                }
            },
            {
                idTM: 2,
                TipodeMoneda: "Dolares",
                Contrato: {
                    idContrato: 2
                }
            },
            {
                idTM: 3,
                TipodeMoneda: "Pesos Mexicanos",
                Contrato: {
                    idContrato: 3
                }
            },

        ]

    }
    return data
}