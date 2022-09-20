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
                razonsocialEmpresario: "VentasRamos",
                rucEmpresario: 20201324652,
                rubroEmpresario: "Comercio",
                prefEmpresario: "",
                Usuario: {
                    idUsuario: 1,
                }
            }, 
            {
                razonsocialEmpresario: "VentasRamos",
                rucEmpresario: 20201324652,
                rubroEmpresario: "Comercio",
                prefEmpresario: "",
                Usuario: {
                    idUsuario: 1,
                }
            },
        ],
        Contador: [
            {
                CDescripcion: "Hola",
                Clinkedin: "Mi perfil de linkedin",
                Usuario: {
                    idUsuario: 1,
                }
            },
            {
                CDescripcion: "Hola",
                Clinkedin: "Mi perfil de linkedin",
                Usuario: {
                    idUsuario: 1,
                }
            },
            {
                CDescripcion: "Hola",
                Clinkedin: "Mi perfil de linkedin",
                Usuario: {
                    idUsuario: 1,
                }
            },
            {
                CDescripcion: "Hola",
                Clinkedin: "Mi perfil de linkedin",
                Usuario: {
                    idUsuario: 1,
                }
            },
            {
                CDescripcion: "Hola",
                Clinkedin: "Mi perfil de linkedin",
                Usuario: {
                    idUsuario: 1,
                }
            },
        ],
        CurriculumVitae: [
            {
                habilidadesCV: {
                    idHabilidades: 1
                },
                capacidadesCV: {
                    idCapacidades: 1
                },
                experienciasCV: {
                    idExperiencias: 1
                },
                Contador: {
                    idContador: 1
                },
                Contador: 1
            },
            {
                habilidadesCV: {
                    idHabilidades: 1
                },
                capacidadesCV: {
                    idCapacidades: 1
                },
                experienciasCV: {
                    idExperiencias: 1
                },
                Contador: {
                    idContador: 1
                },
                Contador: 1
            },
            {
                habilidadesCV: {
                    idHabilidades: 1
                },
                capacidadesCV: {
                    idCapacidades: 1
                },
                experienciasCV: {
                    idExperiencias: 1
                },
                Contador: {
                    idContador: 1
                },
                Contador: 1
            }

        ],
        Contrato: [
            {
                idContrato: 1,
                fechainiContrato: 01 - 08 - 2022,
                fechafinContrato: 01 - 08 - 2023,
                flagContrato: true,
                calificacionContrato: 1,
                Contador: {
                    idContador: 1,
                },
                Empresario: {
                    idEmpresario: 1,
                },
                TipoMoneda: {
                    idTM: 1,
                },
                TipoPago: {
                    idTP: 1,
                },
            },
            {
                idContrato: 1,
                fechainiContrato: 01 - 08 - 2022,
                fechafinContrato: 01 - 08 - 2023,
                flagContrato: true,
                calificacionContrato: 1,
                Contador: {
                    idContador: 1,
                },
                Empresario: {
                    idEmpresario: 1,
                },
                TipoMoneda: {
                    idTM: 1,
                },
                TipoPago: {
                    idTP: 1,
                },
            },
            {
                idContrato: 1,
                fechainiContrato: 01 - 08 - 2022,
                fechafinContrato: 01 - 08 - 2023,
                flagContrato: true,
                calificacionContrato: 1,
                Contador: {
                    idContador: 1,
                },
                Empresario: {
                    idEmpresario: 1,
                },
                TipoMoneda: {
                    idTM: 1,
                },
                TipoPago: {
                    idTP: 1,
                },
            },
            {
                idContrato: 1,
                fechainiContrato: 01 - 08 - 2022,
                fechafinContrato: 01 - 08 - 2023,
                flagContrato: true,
                calificacionContrato: 1,
                Contador: {
                    idContador: 1,
                },
                Empresario: {
                    idEmpresario: 1,
                },
                TipoMoneda: {
                    idTM: 1,
                },
                TipoPago: {
                    idTP: 1,
                },
            },
            {
                idContrato: 1,
                fechainiContrato: 01 - 08 - 2022,
                fechafinContrato: 01 - 08 - 2023,
                flagContrato: true,
                calificacionContrato: 1,
                Contador: {
                    idContador: 1,
                },
                Empresario: {
                    idEmpresario: 1,
                },
                TipoMoneda: {
                    idTM: 1,
                },
                TipoPago: {
                    idTP: 1,
                },
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