
//PROBANDO CLASS ELEMENT PARA EL DOM Y FUNCION QUE LE AGREGA FUNCIONES A LAS CLASES
// document.getElementById('para-probar').innerHTML += `
// <button type="button" class="probando">Probando</button>
// `;
// let probando = document.getElementsByClassName('probando')

// // para el select
// document.getElementById('pet-select').addEventListener('change', () => {
//     alert(document.getElementById('pet-select').value);
// })

// function again() {
//     for (let i = 0; i < probando.length; i++) {
//     probando[i].addEventListener('click', () => {
//         document.getElementById('para-probar').innerHTML += `hola ${i}`;
//         document.getElementById('para-probar').innerHTML += `<button type="button" class="probando">Probando</button>`
//         again();
// })

// }
// }
// again();




// todo lo anterior es una buena idea para no tener problemas con las id de los objetos html
// al querer asignarle un eventlistener si fueron creados con html


// document.getElementById('fetcheame').addEventListener('click', ()=> {
//     fetch('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
//     .then(data => data.json())
//     .then (data => {
//     for (let champ in data.data) {
//         championData.push(data.data[champ]);
//         }
//     })
//     .then(() => console.log(championData))
// })

fetch('data/lol/lol.json')
    .then(data => data.json())
    .then (data => {
    for (let champ in data.data) {
        window.championData.push(data.data[champ]);
        }
    })


// inicializador del select materialize

document.addEventListener('DOMContentLoaded', function() {
    window.M.AutoInit();
  });


function showChamps (data) {
    document.getElementById("champ-container").innerHTML = "";
    document.getElementById("champ-container-mobile").innerHTML = "";
    data.forEach(champ => {
        document.getElementById("champ-container").innerHTML += `
        <div class="card col s3">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="responsive-img img-champion" src="${champ.splash}">
            </div>
            <div class="card-content">
                <span class="card-title activator">${champ.name}<i class="material-icons right">more_vert</i></span>
                <p class="champ-title">${champ.title}</p>
            </div>
            <div class="card-reveal">
                <span class="card-title">${champ.name}<i class="material-icons right">close</i></span>
                <canvas class="champion-chart"></canvas>
            </div>
        </div>
        `
    })
    data.forEach(champ => {
        document.getElementById("champ-container-mobile").innerHTML += `
        <div class="col s2">
            <div class="card mobile-version">
                <div class="card-image">
                    <img src="${champ.img}">
                </div>
                <div class="card-content mobile-version">
                ${champ.name}
                </div>
            </div>
        </div>
        `
    })
}





let championGraphsCanvases = document.getElementsByClassName("champion-chart");
let championCharts = [];

function initializeCharts (data) {
    championCharts = [];
    for (let i = 0; i<championGraphsCanvases.length; i++) {
        championCharts[i] = new window.Chart(championGraphsCanvases[i], {
            type: 'horizontalBar',
        data: {
            labels: ["Attack", "Defense", "Magic", "Difficulty"],
            datasets: [{
                data: [data[i].info.attack, data[i].info.defense, data[i].info.magic, data[i].info.difficulty],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }],
                xAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            legend: {
                display: false
            }
        }
        })
    }
}

document.getElementById("champion-filters").addEventListener("change", () => {
    let filtersActive = [];
    const filters = document.getElementsByClassName("filter");
    for (let i = 0; i<filters.length; i++) {
        if (filters[i].checked === true) {
            filtersActive.push(filters[i].value);
        }
    }
    showChamps(window.championManage.filterData(window.championData, filtersActive));
    initializeCharts(window.championManage.filterData(window.championData, filtersActive));
    champIndividualDiv(window.championManage.filterData(window.championData, filtersActive));
    
})
HEAD
function showChampsData () {



document.getElementById("name").addEventListener("change", () => {
    if (document.getElementById("name").value === ""){
        return;
    }
    let filtersActive = [];
    const filters = document.getElementsByClassName("filter");
    for (let i = 0; i<filters.length; i++) {
        if (filters[i].checked === true) {
            filtersActive.push(filters[i].value);
        }
    }
    showChamps(window.championManage.sortData(window.championManage.filterData(window.championData, filtersActive), "name", document.getElementById("name").value));
    initializeCharts(window.championManage.sortData(window.championManage.filterData(window.championData, filtersActive), "name", document.getElementById("name").value));
    champIndividualDiv(window.championManage.sortData(window.championManage.filterData(window.championData, filtersActive), "name", document.getElementById("name").value));
    
})

document.getElementById("key").addEventListener("change", () => {
    if (document.getElementById("key").value === ""){
        return;
    }
    let filtersActive = [];
    const filters = document.getElementsByClassName("filter");
    for (let i = 0; i<filters.length; i++) {
        if (filters[i].checked === true) {
            filtersActive.push(filters[i].value);
        }
    }
    showChamps(window.championManage.sortData(window.championManage.filterData(window.championData, filtersActive), "key", document.getElementById("key").value));
    initializeCharts(window.championManage.sortData(window.championManage.filterData(window.championData, filtersActive), "key", document.getElementById("key").value));
    champIndividualDiv(window.championManage.sortData(window.championManage.filterData(window.championData, filtersActive), "key", document.getElementById("key").value));
    
})

function champIndividualDiv(data) {
    let championImages = document.getElementsByClassName("img-champion");
    for (let i= 0; i<championImages.length; i++) {
        championImages[i].addEventListener("click", () => {
            document.getElementById("filters").style.display = "none";
            document.getElementById("sort-options").style.display = "none";
            document.getElementById("champ-container").style.display = "none";
            document.getElementById("champ-container-mobile").style.display = "none";
            document.getElementById("individual-champs").style.display = "block";
            document.getElementById("individual-champs").innerHTML = `            
            <div id="champ-name-title" class="col s12 center-align">
                <p id="champ-name">${data[i].name}</p>
                <p id="champ-title">${data[i].title}</p><br><br>
            </div>
            <div class="col s12 m6">
                <img src="${data[i].splash}" alt="${data[i].name}" class="responsive-img">
                <p class="center-align">Roles: ${data[i].tags.join(" - ")}</p>
            </div>
            <div class="col s12 m6">
                <table class="centered">
                    <thead>
                        <tr>
                            <th>Stat</th>
                            <th>Base (a lvl 1)</th>
                            <th>Growth per lvl</th>
                        </tr>
                    </thead>
            
                    <tbody>
                        <tr>
                        <td>HP</td>
                        <td>${data[i].stats.hp}</td>
                        <td>${data[i].stats.hpperlevel}</td>
                        </tr>
                        <tr>
                        <td>${data[i].partype}</td>
                        <td>${data[i].stats.mp}</td>
                        <td>${data[i].stats.mpperlevel}</td>
                        </tr>
                        <tr>
                        <td>Movement Speed</td>
                        <td>${data[i].stats.movespeed}</td>
                        <td>-</td>
                        </tr>
                        <tr>
                        <td>Armor</td>
                        <td>${data[i].stats.armor}</td>
                        <td>${data[i].stats.armorperlevel}</td>
                        </tr>
                        <tr>
                        <td>Spellblock</td>
                        <td>${data[i].stats.spellblock}</td>
                        <td>${data[i].stats.spellblockperlevel}</td>
                        </tr>
                        <tr>
                        <td>Attack Range</td>
                        <td>${data[i].stats.attackrange}</td>
                        <td>-</td>
                        </tr>
                        <tr>
                        <td>HP Regen</td>
                        <td>${data[i].stats.hpregen}</td>
                        <td>${data[i].stats.hpregenperlevel}</td>
                        </tr>
                        <tr>
                        <td>MP Regen</td>
                        <td>${data[i].stats.mpregen}</td>
                        <td>${data[i].stats.mpregenperlevel}</td>
                        </tr>
                        <tr>
                        <td>Crit</td>
                        <td>${data[i].stats.crit}</td>
                        <td>${data[i].stats.critperlevel}</td>
                        </tr>
                        <tr>
                        <td>Attack Damage</td>
                        <td>${data[i].stats.attackdamage}</td>
                        <td>${data[i].stats.attackdamageperlevel}</td>
                        </tr>
                        <tr>
                        <td>Attack Speed</td>
                        <td>${data[i].stats.attackspeedoffset}</td>
                        <td>${data[i].stats.attackspeedperlevel}</td>
                        </tr>
                    </tbody>
                    </table>                  
            </div>
            <div class="col s6 pull-s3" id="compare">
                    <select id="compare-filters" multiple>
                    <option value="" disabled>Todos los Champions</option>
                    <option value="Assassin">Assassin</option>
                    <option value="Fighter">Fighter</option>
                    <option value="Mage">Mage</option>
                    <option value="Marksman">Marksman</option>
                    <option value="Support">Support</option>
                    <option value="Melee">Melee</option>
                    <option value="Ranged">Ranged</option>
                    </select>
                    <label>Comparar con promedio de:</label>
            </div>
            <div class="col s12" id="compare-chart-container">
                <canvas id="compare-chart">
                
                </canvas>
                       
            `;
            window.M.AutoInit();
            let champChart;
            document.getElementById("compare-filters").addEventListener("change", () => {
                let compareFilters = [];
                for (let i = 0; i<document.getElementById("compare-filters").selectedOptions.length; i++) {
                    compareFilters.push(document.getElementById("compare-filters").selectedOptions[i].value);
                }
                let averageChampion = window.championManage.averageStats(window.championManage.filterData(championData, compareFilters));
                champChart.data.datasets[1].data = [averageChampion.hp, averageChampion.hpperlevel, averageChampion.mp, averageChampion.mpperlevel, averageChampion.movespeed, averageChampion.armor, averageChampion.armorperlevel, averageChampion.spellblock, averageChampion.spellblockperlevel, averageChampion.attackrange, averageChampion.hpregen, averageChampion.hpregenperlevel, averageChampion.mp, averageChampion.mpregenperlevel, averageChampion.crit, averageChampion.critperlevel, averageChampion.attackdamage, averageChampion.attackdamageperlevel, averageChampion.attackspeedoffset, averageChampion.attackspeedperlevel];
                champChart.update();
                
            })
            function initializeCompare(data) {
                let averageChampion = window.championManage.averageStats(data);
                let compareCanvas = document.getElementById("compare-chart").getContext('2d');
                champChart = new window.Chart(compareCanvas, {
                    type: 'bar',
                    data: {
                        labels: ["HP", "HP per lvl", "MP", "MP per lvl", "Movement Speed", "Armor", "Armor per lvl", "Spellblock", "Spellblock per lvl", "Attack Range", "HP Regen", "HP Regen per lvl", "MP Regen", "MP Regen per lvl", "Crit", "Crit per lvl", "Attack Damage", "Attack Damage per lvl", "Attack Speed", "Attack Speed per lvl"],
                        datasets: [{
                            label: data[i].name,
                            data: [data[i].stats.hp, data[i].stats.hpperlevel, data[i].stats.mp, data[i].stats.mpperlevel, data[i].stats.movespeed, data[i].stats.armor, data[i].stats.armorperlevel, data[i].stats.spellblock, data[i].stats.spellblockperlevel, data[i].stats.attackrange, data[i].stats.hpregen, data[i].stats.hpregenperlevel, data[i].stats.mp, data[i].stats.mpregenperlevel, data[i].stats.crit, data[i].stats.critperlevel, data[i].stats.attackdamage, data[i].stats.attackdamageperlevel, data[i].stats.attackspeedoffset, data[i].stats.attackspeedperlevel],
                            backgroundColor: 'rgba(255, 99, 132, 0.8)',
                            borderWidth: 1
                        },
                        {
                            label: 'Champ Promedio',
                            data: [averageChampion.hp, averageChampion.hpperlevel, averageChampion.mp, averageChampion.mpperlevel, averageChampion.movespeed, averageChampion.armor, averageChampion.armorperlevel, averageChampion.spellblock, averageChampion.spellblockperlevel, averageChampion.attackrange, averageChampion.hpregen, averageChampion.hpregenperlevel, averageChampion.mp, averageChampion.mpregenperlevel, averageChampion.crit, averageChampion.critperlevel, averageChampion.attackdamage, averageChampion.attackdamageperlevel, averageChampion.attackspeedoffset, averageChampion.attackspeedperlevel],
                            backgroundColor: 'rgba(54, 162, 235, 0.8)',
                            borderWidth: 1
                        }
                    ],
                        
                    },
                    options: {
                        tooltips: {
                            intersect: false
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    stepSize: 50
                                }
                            }]
                        }
                    }
                }
    
    
                )

            }
            initializeCompare(data);
        })
    }

}

document.getElementById("champions").addEventListener("click", () => {
    document.location = "index.html";
});


// var ctx = document.getElementById("compare-chart").getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["HP", "HP per lvl", "BloodWell", "BloodWell per lvl", "Movement Speed", "Armor", "Armor per lvl", "Spellblock", "Spellblock per lvl", "Attack Range", "HP Regen", "HP Regen per lvl", "MP Regen", "MP Regen per lvl", "Crit", "Crit per lvl", "Attack Damage", "Attack Damage per lvl", "Attack Speed", "Attack Speed per lvl"],
//         datasets: [{
//             label: 'Aatrox',
//             data: [537.8, 85, 105.6, 45, 345, 24.384, 3.8, 32.1, 1.25, 150, 6.59, 0.5, 0, 0, 0, 0, 60.376, 3.2, -0.04, 3],
//             backgroundColor: 'rgba(255, 99, 132, 0.2)',
//             borderWidth: 1
//         },
//         {
//             label: 'Champ Promedio',
//             data: [537.8, 85, 105.6, 45, 345, 24.384, 3.8, 32.1, 1.25, 150, 6.59, 0.5, 0, 0, 0, 0, 60.376, 3.2, -0.04, 3],
//             backgroundColor: 'rgba(54, 162, 235, 0.2)',
//             borderWidth: 1
//         }
//     ],
        
//     },
//     options: {
//         tooltips: {
//             intersect: false
//         },
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true,
//                     stepSize: 50
//                 }
//             }]
//         }
//     }
// });


function showChampsData() {
    showChamps(window.championData);
    initializeCharts(window.championData);
    champIndividualDiv(window.championData);
}
window.onload = showChampsData;
// graficos de stats


// var ctx = document.getElementById("myChart");
// var myChart = new Chart(ctx, {
    //     type: 'horizontalBar',
    //     data: {
        //         labels: ["Attack", "Defense", "Magic", "Dificulty"],
        //         datasets: [{
            //             // label: '# of Votes',
            //             data: [8, 4, 3, 4],
            //             backgroundColor: [
                //                 'rgba(255, 99, 132, 0.2)',
                //                 'rgba(54, 162, 235, 0.2)',
                //                 'rgba(255, 206, 86, 0.2)',
                //                 'rgba(75, 192, 192, 0.2)'
                //             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         maintainAspectRatio: true,
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         },
//         legend: {
//             display: false
//         },
//         tooltips: {
//             position: 'average'
//         }
//     }
// });

document.getElementById("flame").addEventListener("click", (evento) => {
    evento.preventDefault();

    document.getElementById("flame-section").style.display = "block";
    document.getElementById("filters").style.display = "none";
    document.getElementById("champ-container").style.display = "none";
    document.getElementById("champ-container-mobile").style.display = "none";
    document.getElementById("about-lolapp-section").style.display = "none";

});

document.getElementById("about-lolapp").addEventListener("click", (evento) => {
    evento.preventDefault();

    document.getElementById("about-lolapp-section").style.display = "block";
    document.getElementById("filters").style.display = "none";
    document.getElementById("champ-container").style.display = "none";
    document.getElementById("champ-container-mobile").style.display = "none";
    document.getElementById("flame-section").style.display = "none";

});

document.getElementById("button1").addEventListener("click", (evento) => {
    evento.preventDefault();

    document.getElementById("filters").style.display = "block";
    document.getElementById("about-lolapp-section").style.display = "none";
    document.getElementById("champ-container").style.display = "block";
    document.getElementById("flame-section").style.display = "none";

});

document.getElementById("button2").addEventListener("click", (evento) => {
    evento.preventDefault();

    document.getElementById("filters").style.display = "block";
    document.getElementById("about-lolapp-section").style.display = "none";
    document.getElementById("champ-container").style.display = "block";
    document.getElementById("flame-section").style.display = "none";

});
};
