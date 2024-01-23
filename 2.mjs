import k from './helper.mjs'

;(async () => {




/**
 * Trabajando con parámetros en las funciones
 */

function nonConstructorSyntax(name, job) {
  console.log('Hola soy ' + name)
  console.log('Mi trabajo es ' + job)
  console.log('\n\n\n')
}

nonConstructorSyntax('Jorge', 'Programador')


await k()




/**
 * convirtiendo la función anterior a una función constructora
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
 */
const constructorSyntax = new Function(
  'name',
  'job',
  "console.log('Hola soy ' + name);console.log('Mi trabajo es ' + job)"
)

constructorSyntax('Felipe', 'Developer')

// La diferencia importante es que utilizando la sintaxis de constructor
// podemos manipular el código utilizando strings
















})().then(process.exit)
