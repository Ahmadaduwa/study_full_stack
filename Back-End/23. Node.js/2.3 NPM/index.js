import generateName from "sillyname";
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);


import superheroes from "superheroes";
console.log(superheroes.length);
const heroName = superheroes[Math.floor(Math.random()*1825)];
console.log(`I am ${heroName}!`);