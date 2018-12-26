document.getElementById('para-probar').innerHTML += `
<button type="button" class="probando">Probando</button>
`;
let probando = document.getElementsByClassName('probando')

// para el select
document.getElementById('pet-select').addEventListener('change', () => {
    alert(document.getElementById('pet-select').value);
})

function again() {
    for (let i = 0; i < probando.length; i++) {
    probando[i].addEventListener('click', () => {
        document.getElementById('para-probar').innerHTML += `hola ${i}`;
        document.getElementById('para-probar').innerHTML += `<button type="button" class="probando">Probando</button>`
        again();
})

}
}
again();




// todo lo anterior es una buena idea para no tener problemas con las id de los objetos html
// al querer asignarle un eventlistener si fueron creados con html


document.getElementById('fetcheame').addEventListener('click', ()=> {
    fetch('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
    .then(data => data.json())
    .then (data => {
    for (let champ in data.data) {
        championData.push(data.data[champ]);
        }
    })
    .then(() => console.log(championData))
})
