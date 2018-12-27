// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

// window.example = example;

const datalol= [] /*Aqui creamos un arreglo vacio por que nuestra data 
son solo objetos, por lo tanto tenemos que convertirlos en un arreglo*/

for(const champ in LOL.data){
  datalol.push(LOL.data[champ]) /*Con este for...in recorremos la data y la pusheamos
  hacia nuestro "datalol" el cual pone cada objeto dentro el arreglo*/
};
let campeonesA= datalol.filter( champion => { 
   if (champion["name"].indexOf("H") !== -1){
   return champion /*Aqui filtramos los objetos de nuestro arreglo con filter(), el cual
   a traves de una condicion busca entre los objetos cuales cumplen con lo que
   se pide*/
 }
}
)
console.log(campeonesA);

// datalol.reverse();
// console.log(datalol); 
