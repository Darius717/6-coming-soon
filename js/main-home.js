
// IMPORT
// HERO
//import {clock} from 
// main
// footer


// FUNKCIJU PANAUDOJIMAS
// hero
// main
// footer



import {suma} from './components/sum.js';
import {daugyba} from "./components/multiply.js";
import {matematika} from './components/matematika.js'

const rez1 = matematika.suma(8, 5);
const rez2 = matematika.minus(8, 5)
const rez3 = daugyba(8, 5)
const rez4 = dalyba(8, 5)

const rez1en = matematika.sum(8, 5);
const rez2en = matematika.subtract(8, 5)
const rez3en = matematika.multiply(8, 5)
const rez4en = matematika.divide(8, 5)

console.log(rez1);
console.log(rez2);
console.log(rez3);
console.log(rez4);

console.log(rez1en);
console.log(rez2en);
console.log(rez3en);
console.log(rez4en);