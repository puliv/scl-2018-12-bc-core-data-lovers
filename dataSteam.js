// Funcion para ordenar data

let objectSteamSort = {
steamDataSort: (data, sortBy, sortOrder) => {  
    /*estos son los parametros de la funcion, que a la vez son 
    el valor de la propiedad steamDataSort*/
let dataNew= data; //data guardada en var
dataNew.sort((a, b) => {  
    if (sortBy === "date" && sortOrder === "ascending" && (a[sortBy] > b[sortBy])){
    return  1;
    }
    else if (sortBy === "date" && sortOrder === "ascending" && (a[sortBy] < b[sortBy])){
    return -1
    }
    else if (sortBy === "date" && sortOrder === "ascending" && (a[sortBy] === b[sortBy]))
    return 0

    else if (sortBy === "date" && sortOrder === "descending" && (a[sortBy] < b[sortBy])){
    return  1;
    }
    else if (sortBy === "date" && sortOrder === "descending" && (a[sortBy] > b[sortBy])){
    return -1
    }
    else if (sortBy === "date" && sortOrder === "descending" && (a[sortBy] === b[sortBy]))
    return 0
})
return(dataNew)
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
};
filterData: (data, condition) => {
    const feedlabelFilter= [("tf2_blog"), ("Product Update"), ("PC Gamer"), ("Eurogamer"), ("Rock, Paper, Shotgun")];
    let filteredData= data;
    let filteredNews=data.filter(condition(data){
        return data.feedlabel === feedlabelFilter."tf2_blog";
    })
    };
};
 console.log(filteredNews);