import k from './helper.mjs'

;(async () => {




  /**
   * Creando funciones como cadenas de texto
   */

  function saludar() {
    console.log('Hola mundo \n\n')
  }

  saludar()











  await k()







  /**
   * Las funciones son first class objects
   * https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function
  */

  const saludar2 = new Function("console.log('Hola mundo desde una función creada como objeto')")

  saludar2()
























})().then(process.exit)
