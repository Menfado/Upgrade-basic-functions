// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función://
const numbers = [12, 21, 38, 5, 45, 37, 6];

function average (numbers) {
    let avge = 0;
    function average(numbers) {
      let sum = 0;
      let item = numbers.length;
      
    
    
      for (let i = 0; i < numbers.length; i++) {
        sum = numbers[i] + sum;
      }
    
      avge = sum / item;
      
    }
    
    
    average(numbers);
    console.log(avge);





}