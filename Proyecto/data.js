module.exports = function () {
    var data = {
        Empresario: [
            {
                idEmpresario: 1,
                nameEmpresario: "Luisa",
                apellidoEmpresario: "Ramos",
                emailEmpresario: "lramos@gmail.com",
                dniEmpresario: 477526778,
                numeroEmpresario: 980512756,
                fotoEmpresario: "",
                razonsocialEmpresario: "VentasRamos",
                rucEmpresario: 20201324652,
                rubroEmpresario: "Comercio",
                prefEmpresario: "",
            },
            {
                idEmpresario: 2,
                nameEmpresario: "Miguel",
                apellidoEmpresario: "Cornejo",
                emailEmpresario: "mcornejo@gmail.com",
                dniEmpresario: 74742099,
                numeroEmpresario: 987475567,
                fotoEmpresario: "",
                razonsocialEmpresario: "PescadosCornejo",
                rucEmpresario: 20604082931,
                rubroEmpresario: "Agropecuario",
                prefEmpresario: "",

            },
            {
                idEmpresario: 3,
                nameEmpresario: "Rodrigo",
                apellidoEmpresario: "Gutierrez",
                emailEmpresario: "rgutierrez@gmail.com",
                dniEmpresario: 09586685,
                numeroEmpresario: 992800125,
                fotoEmpresario: "",
                razonsocialEmpresario: "ServiciosGutierrez",
                rucEmpresario: 20603750342,
                rubroEmpresario: "Servicios",
                prefEmpresario: "",

            },
            {
                idEmpresario: 4,
                nameEmpresario: "Andrea",
                apellidoEmpresario: "Torres",
                emailEmpresario: "atorres@gmail.com",
                dniEmpresario: 74068863,
                numeroEmpresario: 970695964,
                fotoEmpresario: "",
                razonsocialEmpresario: "ImportacionesTorres",
                rucEmpresario: 2020123456,
                rubroEmpresario: "Comercio",
                prefEmpresario: "",

            },
            {
                idEmpresario: 5,
                nameEmpresario: "Sofia",
                apellidoEmpresario: "Smith",
                emailEmpresario: "ssmith@gmail.com",
                dniEmpresario: 38040366,
                numeroEmpresario: 974364038,
                fotoEmpresario: "",
                razonsocialEmpresario: "MariscosSmith",
                rucEmpresario: 2020123456,
                rubroEmpresario: "Agropecuario",
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
                FechainiContrato: 01 - 12 - 2010,
                fechafinContrato: 01 - 12 - 2011,
                FlagContrato: true,
                Contador: {
                    idContador: 1
                },
                Empresario: {
                    idEmpresario: 1
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