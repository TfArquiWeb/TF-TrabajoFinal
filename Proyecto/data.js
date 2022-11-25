module.exports = function () {
    var data = {
        Usuario: [
            {
                id: 1,
                dniUsuario: 79824316,
                nombreUsuario: "Luisa",
                apellidoUsuario: "Ramos",
                numeroUsuario: 912305611,
                correoUsuario: "lramos@gmail.com",
                fotoUsuario: "Esta Es mi foto,soy guapo lo se",
                roleUsuario: "empresario",
            },
            {
                id: 2,
                dniUsuario: 77833749,
                nombreUsuario: "Abel",
                apellidoUsuario: "Gutierrez",
                numeroUsuario: 910667108,
                correoUsuario: "agutierrez@gmail.com",
                fotoUsuario: "Esta Es mi foto,soy guapo lo se",
                roleUsuario: "empresario",
            },
            {
                id: 3,
                dniUsuario: 79436328,
                nombreUsuario: "Rodrigo",
                apellidoUsuario: "Guerrero",
                numeroUsuario: 954640108,
                correoUsuario: "rguerrero@gmail.com",
                fotoUsuario: "Esta Es mi foto,soy guapo lo se",
                roleUsuario: "empresario",
            },
            {
                id: 4,
                dniUsuario: 41542195,
                nombreUsuario: "Monica",
                apellidoUsuario: "Zapata",
                numeroUsuario: 936091471,
                correoUsuario: "mzapata@gmail.com",
                fotoUsuario: "Esta Es mi foto,soy guapo lo se",
                roleUsuario: "contador",
            },
            {
                id: 5,
                dniUsuario: 71529412,
                nombreUsuario: "Miguel",
                apellidoUsuario: "Lopez",
                numeroUsuario: 927526443,
                correoUsuario: "mlopez@gmail.com",
                fotoUsuario: "Esta Es mi foto,soy guapo lo se",
                roleUsuario: "contador",
            },
            {
                id: 6,
                dniUsuario: 48839718,
                nombreUsuario: "Diego",
                apellidoUsuario: "Salas",
                numeroUsuario: 921781388,
                correoUsuario: "dsalas@gmail.com",
                fotoUsuario: "Esta Es mi foto,soy guapo lo se",
                roleUsuario: "contador",
            },
        ],
        Empresario: [
            {
                idEmpresario: 1,
                razonEmpresario: "VentasRamos",
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
                idEmpresario: 2,
                razonEmpresario: "MaderasMayor",
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
                idEmpresario: 3,
                razonEmpresario: "TelasFinas",
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
                Cv: {
                    id: 1,
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
                Cv: {
                    id: 1,
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
                Cv: {
                    id: 1,
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
        Cv: [
            {
                id: 1,
                Habilidad: {
                    id: 1,
                    descHabilidad: "i am stronger",
                },
                Capacitacion: {
                    id: 1,
                    descCapacitacion: "i am smarter",
                },
                Experiencia: {
                    id: 1,
                    descExperiencia: "i am better",
                },
            },
            {
                id: 1,
                Habilidad: {
                    id: 1,
                    descHabilidad: "i am stronger",
                },
                Capacitacion: {
                    id: 1,
                    descCapacitacion: "i am smarter",
                },
                Experiencia: {
                    id: 1,
                    descExperiencia: "i am better",
                },
            },
            {
                id: 1,
                Habilidad: {
                    id: 1,
                    descHabilidad: "i am stronger",
                },
                Capacitacion: {
                    id: 1,
                    descCapacitacion: "i am smarter",
                },
                Experiencia: {
                    id: 1,
                    descExperiencia: "i am better",
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
                    id: 2,
                    nombreUsuario: "diego",
                },
                TipoMoneda: {
                    id: 1,
                    Tipo: "Soles",
                },
                TipoPago: {
                    id: 1,
                },
                Cv:{
                    id:1,
                }
            },
            {
                idContrato: 1,
                fechainiContrato: "01 - 08 - 2022",
                fechafinContrato: "01 - 08 - 2023",
                vigenciaContrato: true,
                montoContrato: 8500,
                Usuario: {
                    id: 2,
                    nombreUsuario: "diego",
                },
                TipoMoneda: {
                    id: 1,
                    Tipo: "Soles",
                },
                TipoPago: {
                    id: 1,
                },
                Cv:{
                    id:1,
                }
            },
            {
                idContrato: 1,
                fechainiContrato: "01 - 08 - 2022",
                fechafinContrato: "01 - 08 - 2023",
                vigenciaContrato: true,
                montoContrato: 8500,
                Usuario: {
                    id: 2,
                    nombreUsuario: "diego",
                },
                TipoMoneda: {
                    id: 1,
                    Tipo: "Soles",
                },
                TipoPago: {
                    id: 1,
                },
                Cv:{
                    id:1,
                }
            },

        ],
        TipoPago: [
            {
                id: 1,
                TipodePago: "Efectivo",
            },
            {
                id: 2,
                TipodePago: "Yape",
            },
            {
                id: 3,
                TipodePago: "Tarjeta",
            },
            {
                id: 4,
                TipodePago: "Plin",
            },

        ],
        TipoMoneda: [
            {
                id: 1,
                Tipo: "Soles",
            },
            {
                id: 2,
                Tipo: "Dolares",
            },
            {
                id: 3,
                Tipo: "Pesos Mexicanos",
            },

        ],
        Experiencia: [
            {
                id: 1,
                descExperiencia: "Trabaje 5 años en macdonald",
            },
            {
                id: 2,
                descExperiencia: "Trabaje 8 años en constructoras",
            },
            {
                id: 3,
                descExperiencia: "Trabaje 10 años en Al Fondo Hay Sitio",
            },

        ],
        Capacitacion: [
            {
                id: 1,
                descCapacitacion: "Me preparé en 2 universidades",
            },
            {
                id: 2,
                descCapacitacion: "Hice un postgrado",
            },
            {
                id: 3,
                descCapacitacion: "Tengo 2 maestrías",
            },
        ],
        Habilidad: [
            {
                id: 1,
                descHabilidad: "Puedo trabajar muy rapido",
            },
            {
                id: 2,
                descHabilidad: "Se tarbajar bajo presión",
            },
            {
                id: 3,
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
                }
            },
            {
                idSE: 2,
                fechaSE: "01-04-2022",
                estadoSE: true,
                Usuario: {
                    idUsuario: 2,
                }
            },
            {
                idSE: 3,
                fechaSE: "01-03-2022",
                estadoSE: true,
                Usuario: {
                    idUsuario: 3,
                }
            },
        ],
    }
    return data
}
