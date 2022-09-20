module.exports = function () {
    var data = {
        Usuario: [
            {
                idUsuario: 1,
                dniUsuario: 79824316,
                nombreUsuario: "Luisa",
                apellidoUsuario: "Ramos",
                numeroUsuario: 912305611,
                correoUsuario: "lramos@gmail.com",
                fotoUsuario: "Esta Es mi foto,soy guapo lo se",
            },
            {
                idUsuario: 2,
                dniUsuario: 77833749,
                nombreUsuario: "Abel",
                apellidoUsuario: "Gutierrez",
                numeroUsuario: 910667108,
                correoUsuario: "agutierrez@gmail.com",
                fotoUsuario: "Esta Es mi foto,soy guapo lo se",
            },
            {
                idUsuario: 3,
                dniUsuario: 79436328,
                nombreUsuario: "Rodrigo",
                apellidoUsuario: "Guerrero",
                numeroUsuario: 954640108,
                correoUsuario: "rguerrero@gmail.com",
                fotoUsuario: "Esta Es mi foto,soy guapo lo se",
            },
            {
                idUsuario: 4,
                dniUsuario: 41542195,
                nombreUsuario: "Monica",
                apellidoUsuario: "Zapata",
                numeroUsuario: 936091471,
                correoUsuario: "mzapata@gmail.com",
                fotoUsuario: "Esta Es mi foto,soy guapo lo se",
            },
            {
                idUsuario: 5,
                dniUsuario: 71529412,
                nombreUsuario: "Miguel",
                apellidoUsuario: "Lopez",
                numeroUsuario: 927526443,
                correoUsuario: "mlopez@gmail.com",
                fotoUsuario: "Esta Es mi foto,soy guapo lo se",
            },
            {
                idUsuario: 6,
                dniUsuario: 48839718,
                nombreUsuario: "Diego",
                apellidoUsuario: "Salas",
                numeroUsuario: 921781388,
                correoUsuario: "dsalas@gmail.com",
                fotoUsuario: "Esta Es mi foto,soy guapo lo se",
            },
        ],
        Empresario: [
            {
                razonsocialEmpresario: "VentasRamos",
                rucEmpresario: 20201324652,
                rubroEmpresario: "Comercio",
                descEmpresario: "Busco un empresario chino",
                Usuario: {
                    idUsuario: 1,
                    dniUsuario: 79824316,
                    nombreUsuario: "Luisa",
                    apellidoUsuario: "Ramos",
                    numeroUsuario: 912305611,
                    correoUsuario: "lramos@gmail.com",
                    fotoUsuario: "Esta Es mi foto,soy guapo lo se",
                }
            },
            {
                razonsocialEmpresario: "MaderasMayor",
                rucEmpresario: 20253053671,
                rubroEmpresario: "Comercio",
                descEmpresario: "Busco un empresario peruano",
                Usuario: {
                    idUsuario: 2,
                    dniUsuario: 77833749,
                    nombreUsuario: "Abel",
                    apellidoUsuario: "Gutierrez",
                    numeroUsuario: 910667108,
                    correoUsuario: "agutierrez@gmail.com",
                    fotoUsuario: "Esta Es mi foto,soy guapo lo se",
                }
            },
            {
                razonsocialEmpresario: "TelasFinas",
                rucEmpresario: 20157624892,
                rubroEmpresario: "Comercio",
                descEmpresario: "Busco un empresario joven",
                Usuario: {
                    idUsuario: 3,
                    dniUsuario: 79436328,
                    nombreUsuario: "Rodrigo",
                    apellidoUsuario: "Guerrero",
                    numeroUsuario: 954640108,
                    correoUsuario: "rguerrero@gmail.com",
                    fotoUsuario: "Esta Es mi foto,soy guapo lo se",
                }
            },
        ],
        Contador: [
            {
                descContador: "Hola soy buen trabajador",
                linkedinContador: "Mi perfil de linkedin es...",
                CurriculumVitae: {
                    idCurriculum: 1,
                },
                Usuario: {
                    idUsuario: 4,
                    dniUsuario: 41542195,
                    nombreUsuario: "Monica",
                    apellidoUsuario: "Zapata",
                    numeroUsuario: 936091471,
                    correoUsuario: "mzapata@gmail.com",
                    fotoUsuario: "Esta Es mi foto,soy guapo lo se",
                }
            },
            {
                descContador: "Hola soy trabajador bueno",
                linkedinContador: "Mi perfil de linkedin es...",
                CurriculumVitae: {
                    idCurriculum: 2,
                },
                Usuario: {
                    idUsuario: 5,
                    dniUsuario: 71529412,
                    nombreUsuario: "Miguel",
                    apellidoUsuario: "Lopez",
                    numeroUsuario: 927526443,
                    correoUsuario: "mlopez@gmail.com",
                    fotoUsuario: "Esta Es mi foto,soy guapo lo se",
                }
            },
            {
                descContador: "Hola me gusta trabajar",
                linkedinContador: "Mi perfil de linkedin es...",
                CurriculumVitae: {
                    idCurriculum: 3,
                },
                Usuario: {
                    idUsuario: 6,
                    dniUsuario: 48839718,
                    nombreUsuario: "Diego",
                    apellidoUsuario: "Salas",
                    numeroUsuario: 921781388,
                    correoUsuario: "dsalas@gmail.com",
                    fotoUsuario: "Esta Es mi foto,soy guapo lo se",
                }
            },
        ],
        CurriculumVitae: [
            {
                idCurriculum: 1,
                Habilidad: {
                    idHabilidad: 1,
                },
                Capacitacion: {
                    idCapacitacion: 1,
                },
                Experiencia: {
                    idExperiencia: 1,
                },
            },
            {
                idCurriculum: 2,
                Habilidad: {
                    idHabilidad: 2,
                },
                Capacitacion: {
                    idCapacitacion: 2,
                },
                Experiencia: {
                    idExperiencia: 2,
                },
            },
            {
                idCurriculum: 3,
                Habilidad: {
                    idHabilidad: 3,
                },
                Capacitacion: {
                    idCapacitacion: 3,
                },
                Experiencia: {
                    idExperiencia: 3,
                },
            },

        ],
        Contrato: [
            {
                idContrato: 1,
                fechainiContrato: "01 - 08 - 2022",
                fechafinContrato: "01 - 08 - 2023",
                vigenciaContrato: true,
                montoContrato: 8500,
                Usuario: {
                    idUsuario: 1,
                },
                TipoMoneda: {
                    idTM: 1,
                },
                TipoPago: {
                    idTP: 1,
                },
            },
            {
                idContrato: 2,
                fechainiContrato: "01 - 05 - 2022",
                fechafinContrato: "01 - 05 - 2023",
                vigenciaContrato: true,
                montoContrato: 4300,
                Usuario: {
                    idUsuario: 2,
                },
                TipoMoneda: {
                    idTM: 2,
                },
                TipoPago: {
                    idTP: 2,
                },
            },
            {
                idContrato: 3,
                fechainiContrato: "01 - 11 - 2022",
                fechafinContrato: "01 - 11 - 2023",
                vigenciaContrato: true,
                montoContrato: 9150,
                Usuario: {
                    idUsuario: 3,
                },
                TipoMoneda: {
                    idTM: 3,
                },
                TipoPago: {
                    idTP: 3,
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
                TipodePago: "Plin",
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

        ],
        Experiencia: [
            {
                idExperiencia: 1,
                descExperiencia: "Trabaje 5 años en macdonald",
            },
            {
                idExperiencia: 2,
                descExperiencia: "Trabaje 8 años en constructoras",
            },
            {
                idExperiencia: 3,
                descExperiencia: "Trabaje 10 años en Al Fondo Hay Sitio",
            },

        ],
        Capacitacion: [
            {
                idCapacitacion: 1,
                descCapacitacion: "Me preparé en 2 universidades",
            },
            {
                idCapacitacion: 2,
                descCapacitacion: "Hice un postgrado",
            },
            {
                idCapacitacion: 3,
                descCapacitacion: "Tengo 2 maestrías",
            },
        ],
        Habilidad: [
            {
                idHabilidad: 1,
                descHabilidad: "Puedo trabajar muy rapido",
            },
            {
                idHabilidad: 2,
                descHabilidad: "Se tarbajar bajo presión",
            },
            {
                idHabilidad: 3,
                descHabilidad: "Soy experto en excel",
            },
        ],
        SolicitudEmpleo: [
            {
                idSE: 1,
                fechaSE: "01-01-2022",
                estadoSE: true,
                Usuario: {
                    idUsuario: 1,
                }, 
            },
            {
                idSE: 2,
                fechaSE: "01-04-2022",
                estadoSE: true,
                Usuario: {
                    idUsuario: 2,
                },
            },
            {
                idSE: 3,
                fechaSE: "01-03-2022",
                estadoSE: true,
                Usuario: {
                    idUsuario: 3,
                },
            },
        ],
    }
    return data
}