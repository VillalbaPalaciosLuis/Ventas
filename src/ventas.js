
db.ventas.deleteMany({})
db.ventas.insertMany([
    {
        _id: 1, 
        articulo:"bolígrafo",
        categoria: "papeleria",
        precioVenta: 3,
        cantidad: 120,
        fechaVenta: new Date("2021-02-14"),
        costeEmpresa: 1.3,
        cliente: "IES Punta del Verde",
        AreaCliente: ["Educación secundaria", "bachillerato", "Formación Profesional", "Bilingüe"],
        vendedor: "Rodrigo López",
        urgente: true
    },
    {_id: 2, articulo:"carpeta", categoria: "papeleria", precioVenta: 5, cantidad: 80, fechaVenta: new Date("2021-05-10"), costeEmpresa: 2.2, cliente: "CEIP Macarena", AreaCliente: ["Educación infantil", "Educación primaria"], vendedor: "Rodrigo López", urgente: true},
    {_id: 3, articulo:"bolígrafo", categoria: "papeleria", precioVenta: 3, cantidad: 500, fechaVenta: new Date("2021-05-18"), costeEmpresa: 1.3, cliente: "IES Vallecas", AreaCliente: ["Educación secundaria", "bachillerato", "Formación Profesional"], vendedor: "Susana García", urgente: true},
    {_id: 4, articulo:"teclado", categoria: "informática", precioVenta: 40, cantidad: 20, fechaVenta: new Date("2020-02-04"), costeEmpresa: 30, cliente: "IES Vallecas", AreaCliente: ["Educación secundaria", "bachillerato", "Formación Profesional"], vendedor: "Marta Robles", urgente: false},
    {_id: 5, articulo:"bolígrafo", categoria: "papeleria", precioVenta: 3, cantidad: 340, fechaVenta: new Date("2021-11-20"), costeEmpresa: 1.3, cliente: "CEIP Macarena", AreaCliente: ["Educación infantil", "Educación primaria"], vendedor: "Rodrigo López", urgente: false},
    {_id: 6, articulo:"teclado", categoria: "informática", precioVenta: 35, cantidad: 34, fechaVenta: new Date("2021-02-30"), costeEmpresa: 30, cliente: "IES Punta del Verde", AreaCliente: ["Educación secundaria", "bachillerato", "Formación Profesional", "Bilingüe"], vendedor: "Rodrigo López", urgente: true},
    {_id: 7, articulo:"carpeta", categoria: "papeleria", precioVenta: 7, cantidad: 45, fechaVenta: new Date("2021-01-04"), costeEmpresa: 2.2, cliente: "CEIP Triana", AreaCliente: ["Educación infantil", "Educación primaria", "Bilingüe"], vendedor: "Marta Robles", urgente: true},
    {_id: 8, articulo:"teclado", categoria: "informática", precioVenta: 46, cantidad: 55, fechaVenta: new Date("2020-04-16"), costeEmpresa: 30, cliente: "IES Punta del Verde", AreaCliente: ["Educación secundaria", "bachillerato", "Formación Profesional", "Bilingüe"], vendedor: "Marta Robles", urgente: false},
    {_id: 9, articulo:"carpeta", categoria: "papeleria", precioVenta: 6, cantidad: 63, fechaVenta: new Date("2021-02-14"), costeEmpresa: 2.2, cliente: "CEIP Macarena", AreaCliente: ["Educación infantil", "Educación primaria"], vendedor: "Rodrigo López", urgente: true},
    {_id: 10, articulo:"ratón", categoria: "informática", precioVenta: 31, cantidad: 100, fechaVenta: new Date("2020-05-20"), costeEmpresa: 15, cliente: "IES Punta del Verde", AreaCliente: ["Educación secundaria", "bachillerato", "Formación Profesional", "Bilingüe"], vendedor: "Susana García", urgente: false},
    {_id: 11, articulo:"bolígrafo", categoria: "papeleria", precioVenta: 3, cantidad: 87, fechaVenta: new Date("2021-02-09"), costeEmpresa: 1.3, cliente: "CEIP Triana", AreaCliente: ["Educación infantil", "Educación primaria", "Bilingüe"], vendedor: "Marta Robles", urgente: false},
    {_id: 12, articulo:"ratón", categoria: "informática", precioVenta: 25, cantidad: 40, fechaVenta: new Date("2020-02-18"), costeEmpresa: 15, cliente: "CEIP Macarena", AreaCliente: ["Educación infantil", "Educación primaria"], vendedor: "Rodrigo López", urgente: true},
    {_id: 13, articulo:"bolígrafo", categoria: "papeleria", precioVenta: 3.5, cantidad: 97, fechaVenta: new Date("2021-02-08"), costeEmpresa: 1.3, cliente: "CEIP Macarena", AreaCliente: ["Educación infantil", "Educación primaria"], vendedor: "Susana García", urgente: false},
    {_id: 14, articulo:"ratón", categoria: "informática", precioVenta: 26, cantidad: 60, fechaVenta: new Date("2020-02-02"), costeEmpresa: 20, cliente: "IES Punta del Verde", AreaCliente: ["Educación secundaria", "bachillerato", "Formación Profesional", "Bilingüe"], vendedor: "Marta Robles", urgente: false},
    {_id: 15, articulo:"ratón", categoria: "informática", precioVenta: 15, cantidad: 88, fechaVenta: new Date("2021-05-06"), costeEmpresa: 4, cliente: "EI Pitufos", AreaCliente: ["Educación infantil"], vendedor: "Rodrigo López", urgente: true},
    {_id: 16, articulo:"ratón", categoria: "informática", precioVenta: 25, cantidad: 10, fechaVenta: new Date("2021-05-09"), costeEmpresa: 14.5, cliente: "IES Vallecas", AreaCliente: ["Educación secundaria", "bachillerato", "Formación Profesional"], vendedor: "Susana García", urgente: false},
    {_id: 17, articulo:"carpeta", categoria: "papeleria", precioVenta: 5, cantidad: 25, fechaVenta: new Date("2020-12-15"), costeEmpresa: 3, cliente: "EI Pitufos", AreaCliente: ["Educación infantil"], vendedor: "Susana García", urgente: false},
    {_id: 18, articulo:"bolígrafo", categoria: "papeleria", precioVenta: 4, cantidad: 46, fechaVenta: new Date("2020-03-25"), costeEmpresa: 2.1, cliente: "IES Vallecas", AreaCliente: ["Educación secundaria", "bachillerato", "Formación Profesional"], vendedor: "Marta Robles", urgente: true}
])