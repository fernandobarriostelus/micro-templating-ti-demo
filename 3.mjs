import k from './helper.mjs'

;(async () => {




/**
 * Reemplazar texto en una cadena
 */
let myString = 'Hola, mi nombre es {name}'
myString = myString.replace('{name}', 'Fernando')


console.log(myString + '\n\n')








await k()




/**
 * También podemos usar expresiones regulares
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
 */


myString = 'Hola, mi apellido es {apellido}'
myString = myString.replace(/{apellido}/, 'Barrios')


console.log(myString + '\n\n')





await k()






/**
 * Gracias a las expresiones regulares podemos tener grupos de información capturada
 * los cuales los podemos usar dentro del texto con el que vamos a reemplazar
 */


myString = "Hola, mi nombre es Francisco";
myString = myString.replace(/(Francisco)/, 'Fernando, pero solía ser $1');
console.log(`${myString} \n\n`);









await k()







/**
 * capturando más de un grupo de información
 */
myString = "Hola mi nombre es Fernando";
myString = myString.replace(/(es) (Fernando)/, '$2 $1');
console.log(`${myString} \n\n`);
















await k()







/**
 * Usar la flag de global = g
 */
myString = "yo yo yo yo";
myString = myString.replace(/yo/, 'me');
console.log(`${myString}`);

myString = "yo yo yo yo";
myString = myString.replace(/yo/g, 'me');
console.log(`${myString} \n\n`);







await k()










/**
 * Usar la flag de global = g
 */
myString = "esto es un password ultra seguro";
myString = myString.replace(/./g, '#');
console.log(`${myString} \n\n`);










await k()








/**
 * Uniendo todo lo aprendido
 */
myString = "Hola, mi nombre es Fernando, espero estés aprendiendo mucho";
myString = myString.replace(/Hola(.+)Fernando/g, 'Soy Fernando');
console.log(`${myString} \n\n`);























})().then(process.exit)