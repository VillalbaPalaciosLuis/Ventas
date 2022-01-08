
/* ----------------------------------------------------------------------------------------------
Queremos conocer el beneficio absoluto, el coste, y el beneficio real (beneficio - coste)
de aquellos artículos cuyo coste individual sea mayor o igual a 2.
-------------------------------------------------------------------------------------------------*/ 



db.ventas.aggregate(
    [
        {$match:
             {costeEmpresa: {$gte: 2}}
        },
        {$group: 
            {
                _id: {categoría: "$categoria", articulo: "$articulo"},
                beneficioAbsoluto: { $sum: {$multiply: ["$precioVenta", "$cantidad"]}},
                coste: { $sum:{$multiply: ["$cantidad", "$costeEmpresa"]} }
            }
        },
        {$project: 
            {
            beneficioAbsoluto: 1,
            coste: 1,
            beneficioFinal: { $subtract: ["$beneficio", "$coste"]}
            }
        }
    ]
).pretty()





/* --------------------------------------------------------------------------------------------------------------------------------------------------------------
Los 3 mejores clientes que entre sus enseñanzas se impartan educación primaria o educación secundaria, ordenados de mayor beneficio a menor
-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/ 



db.ventas.aggregate(
    [
        {$match:
            {AreaCliente: {$in: ["Educación primaria", "Educación secundaria"]}}
        },
        {$group: 
            {   _id: {cliente: "$cliente", area: "$AreaCliente"},
                numeroArticulos: {$sum: "$cantidad"},
                beneficio: {$sum: {$multiply: ["$precioVenta", "$cantidad"]}},
                coste: 
                {$sum: 
                    {$round:
                        [
                        {$multiply: ["$cantidad", "$costeEmpresa"]},
                        2]
                    }
                }
                
            }
        },
        {$sort:
            {
                beneficio: -1
            }

        },
        {$limit: 3}
    ]
    ).pretty()
        
        

/* --------------------------------------------------------------------------------------------------------------------------------------------------------------
Ranking de los mejores vendedores del año 2020. 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/ 


db.ventas.aggregate([
    {$match: 
       {$expr:
        {$eq: [{$year: "$fechaVenta"}, 2020]}
       }
    },
    {$group:
        {
            _id: "$vendedor",
            TotalProductos: {$sum: "$cantidad"}
        }
    
    },
    {$sort: {TotalProductos: -1}}
]).pretty()





/* --------------------------------------------------------------------------------------------------------------------------------------------------------------
Beneficio absoluto diario en los difernetes artículos pero teniendo en cuenta sólo aquellos que sean pedidos urgentes en el año 2021.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/ 



db.ventas.aggregate([
    {$match: {urgente: true,
        $expr:{$eq: [{$year: "$fechaVenta"}, 2021]}}
    },

    {$group:
        {
            _id: "$articulo",
            beneficio: {$sum: {$multiply: ["$precioVenta", "$cantidad"]}}
        }
    },
    {$project: 
    {
        _id: 0,
        articulo: "$_id",
        beneficio: 1,
        beneficioDiario: 
            {$round: 
                [{$divide: ["$beneficio", 365]} ,2]
            } 
    }
    }
]).pretty()




/* --------------------------------------------------------------------------------------------------------------------------------------------------------------
Media de cantidad de artículos comprados por cliente.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/ 



db.ventas.aggregate([
    {$group:
        {
            _id: "$cliente",
            MediaCantidad: {$avg: {$sum: "$cantidad"}}     
        }
    
    
    }
]).pretty()




/* --------------------------------------------------------------------------------------------------------------------------------------------------------------
Los 3 meses de mayor venta (da igual de que año sea).
-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/ 

db.ventas.aggregate([
    {$group:
        {
        _id: {$month: "$fechaVenta"},
        TotalVendido: {$sum: "$cantidad"}
        }
    },
    {$sort:
         {
            TotalVendido: -1
         }
    },
    {$limit: 3}
])    

