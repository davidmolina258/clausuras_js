// las clausuras en Javascript,  son funciones anidadas que recuerdan el conjuntos de variables a las que puedo acceder desde otro scope, necesitamos de tres ingredientes:
// 1) una funcion
// 2)una funcion dentro de la primera funcion, una funcion anidada
// 3) una variable de scope superior, utilizada dentro de la segunda funcion y ejecutada en otro entorno

function crearContador() {
  let contador = 0;
  return function incrementar() {
    contador = contador + 1;
    return console.log(contador);
  };
}

const incrementador = crearContador();
incrementador();
incrementador();
incrementador();
incrementador();

// El contexto de Ejecucion:

// 1.- fase de inicializacion, se crean. . .
// -archivo.js
// -proxima linea a ejecutar
// -objeto window y this
// -entorno lexico, donde viven las variables y funciones.

// 2.- fase de Ejecucion, aqui se utiliza el callStack

// IMPORTANTE: CADA VEZ QUE SE EJECUTA UNA FUNCION, SE CREA UN NUEVO CONTEXTO DE EJECUCION CON UN NUEVO ENTORNO LEXICO
