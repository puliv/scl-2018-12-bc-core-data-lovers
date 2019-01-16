// Funcion para ordenar data
let dataNueva= STEAM.appnews.newsitems

dataNueva.sort((a, b) => {
    if (a > b){
    return 1
    }
    if (a < b){
    return -1
    }
    if (a === b)
    return 0
})
//    return(dataNueva)  

console.log(dataNueva)
 

