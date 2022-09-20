module.exports = function () {
    var data = {
        Usuario: [
            {
                idUsuario: 1,
                dniUsuario: 1234567,
                nombreUsuario: "Luisa",
                apellidoUsuario: "Ramos",
                numeroUsuario: 123456789,
                correoUsuario: "lramos@gmail.com",
                fotoUsuario: "Esta Es mi foto,soy guapo lo se",
            },
            {
                idUsuario: 2,
                dniUsuario: 1234567,
                nombreUsuario: "Luisa",
                apellidoUsuario: "Ramos",
                numeroUsuario: 123456789,
                correoUsuario: "lramos@gmail.com",
                fotoUsuario: "Esta Es mi foto,soy guapo lo se",
            },
            {
                idUsuario: 3,
                dniUsuario: 1234567,
                nombreUsuario: "Luisa",
                apellidoUsuario: "Ramos",
                numeroUsuario: 123456789,
                correoUsuario: "lramos@gmail.com",
                fotoUsuario: "Esta Es mi foto,soy guapo lo se",
            },
        ],
        Empresario: [
            {
                razonsocialEmpresario: "VentasRamos",
                rucEmpresario: 20201324652,
                rubroEmpresario: "Comercio",
                prefEmpresario: "",
                Usuario: {
                    idUsuario: 1,
                }
            },
            {
                razonsocialEmpresario: "VentasJamon",
                rucEmpresario: 20201355552,
                rubroEmpresario: "Comercio",
                prefEmpresario: "",
                Usuario: {
                    idUsuario: 2,
                }
            }, {
                razonsocialEmpresario: "VentasHola",
                rucEmpresario: 20201323352,
                rubroEmpresario: "Comercio",
                prefEmpresario: "",
                Usuario: {
                    idUsuario: 3,
                }
            },
        ],
        Contador: [
            {
                CDescripcion:"Hola",
                Clinkedin:"Mi perfil de linkedin",
                Usuario: {
                    idUsuario: 1,
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
            },
            {
                idTP: 2,
                TipodePago: "Yape",
            },
            {
                idTP: 3,
                TipodePago: "Tarjeta",
            },
            {
                idTP: 4,
                TipodePago: "PLin",
            },

        ],
        TipoMoneda: [
            {
                idTM: 1,
                TipodeMoneda: "Soles",
            },
            {
                idTM: 2,
                TipodeMoneda: "Dolares",
            },
            {
                idTM: 3,
                TipodeMoneda: "Pesos Mexicanos",
            },

        ]

    }
    return data
}