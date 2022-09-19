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
                nameContador: "Abel",
                apellidoContador: "Ramirez",
                emailContador: "aramirez@gmail.com",
                dniContador: 40525999,
                numeroContador: 998250912,
                fotoContador: "",
                Empresario: {
                    idEmpresario: 1,
                }
            }, 
            {
                idContador: 2,
                nameContador: "Alexandro",
                apellidoContador: "Lopez",
                emailContador: "alopez@gmail.com",
                dniContador: 54644485,
                numeroContador: 937084291,
                fotoContador: "",
                Empresario: {
                    idEmpresario: 2,
                }
            },
            {
                idContador: 3,
                nameContador: "Diego",
                apellidoContador: "Crespo",
                emailContador: "dcrespo@gmail.com",
                dniContador: 55046035,
                numeroContador: 979179104,
                fotoContador: "",
                Empresario: {
                    idEmpresario: 3,
                }
            },
            {
                idContador: 4,
                nameContador: "Bruno",
                apellidoContador: "Bolivar",
                emailContador: "bbolivar@gmail.com",
                dniContador: 58845197,
                numeroContador: 929712873,
                fotoContador: "",
                Empresario: {
                    idEmpresario: 4,
                }
            },
            {
                idContador: 5,
                nameContador: "Abel",
                apellidoContador: "Ramirez",
                emailContador: "aramirez@gmail.com",
                dniContador: 42656609,
                numeroContador: 907196576,
                fotoContador: "",
                Empresario: {
                    idEmpresario: 5,
                }
            },
        ],
        CurriculumVitae: [
            {
                habilidadesCV: "asdasd",
                capacidadesCV: "asdadsa",
                experienciasCV: "asdasdad",
                Contador: {
                    idContador: 1
                },
                habilidadesCV: "Luisa",
                capacidadesCV: "asdads",
                experienciasCV: "asda",
                Contador: {
                    idContador: 1
                },
                habilidadesCV: "Luisa",
                capacidadesCV: "",
                experienciasCV: "",
                Contador: {
                    idContador: 1
                },
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
                fechainiContrato: 01 - 08 - 2022,
                fechafinContrato: 01 - 08 - 2023,
                flagContrato: true,
                Contador: {
                    idContador: 1,
                    nameContador: "Diego",
                    apellidoContador: "Pacheco",
                },
                Empresario: {
                    idEmpresario: 1,
                    nameEmpresario: "Diego",
                    apellidoEmpresario: "Pacheco",
                }
            },
            {
                idContrato: 2,
                numeroContrato: 002,
                fechainiContrato: 01 - 10 - 2022,
                fechafinContrato: 01 - 10 - 2023,
                flagContrato: true,
                Contador: {
                    idContador: 2
                },
                Empresario: {
                    idEmpresario: 2
                }
            },
            {
                idContrato: 3,
                numeroContrato: 003,
                fechainiContrato: 01 - 04 - 2022,
                fechafinContrato: 01 - 10 - 2022,
                flagContrato: true,
                Contador: {
                    idContador: 3
                },
                Empresario: {
                    idEmpresario: 3
                }
            },
            {
                idContrato: 4,
                numeroContrato: 004,
                fechainiContrato: 01 - 03 - 2022,
                fechafinContrato: 01 - 03 - 2024,
                flagContrato: true,
                Contador: {
                    idContador: 4
                },
                Empresario: {
                    idEmpresario: 4
                }
            },
            {
                idContrato: 5,
                numeroContrato: 005,
                fechainiContrato: 01 - 12 - 2022,
                fechafinContrato: 01 - 12 - 2023,
                flagContrato: true,
                Contador: {
                    idContador: 5
                },
                Empresario: {
                    idEmpresario: 5
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