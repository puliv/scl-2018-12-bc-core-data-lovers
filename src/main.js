
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
        championData.push(data.data[champ]);
        }
    })
    .then(() => console.log(championData))


function showChamps (data) {
    data.forEach(champ => {
        document.getElementById("champ-container").innerHTML += `
        <div class="card col s3">
            <div class="card-image waves-effect waves-block waves-light">
                <a href=""><img class="responsive-img img-champion" src="${champ.splash}"></a>
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
}





let championGraphsCanvases = document.getElementsByClassName("champion-chart");
let championCharts = [];

function initializeCharts () {
    for (let i = 0; i<championGraphsCanvases.length; i++) {
        championCharts[i] = new Chart(championGraphsCanvases[i], {
            type: 'horizontalBar',
        data: {
            labels: ["Attack", "Defense", "Magic", "Difficulty"],
            datasets: [{
                data: [championData[i].info.attack, championData[i].info.defense, championData[i].info.magic, championData[i].info.difficulty],
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
                }]
            },
            legend: {
                display: false
            }
        }
        })
    }
}

function showChampsData () {
    showChamps(championData);
    initializeCharts();
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