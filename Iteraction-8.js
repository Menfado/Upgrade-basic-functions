//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
    function repeatCounter(array) {
        let counter = {}; // Declaro un objeto vacío
        for (let i = 0; i < array.length; i++) {
          if (array[i] in counter) {
            // Si el elemento del array está en mi objeto counter
            counter[array[i]]++; // Cojo ese elemento y le sumo 1
          } else {
            counter[array[i]] = 1; // Si no está le dejo un 1
          }
        }
        console.table(counter);
      }
      
      repeatCounter(counterWords);



  }