import {cleanConsole, createAll} from './data';
import {camiloEX4} from './example-4';

const companies = createAll();

cleanConsole(5, companies);
console.log('---- EXAMPLE 5 --- ', camiloEX5());

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Use la función creada en el ejemplo 4 para crear una nueva función tomando
// como parámetro la variable "companies" y devuelve un nuevo objeto con los
// siguientes atributos:
//     'size' => total de "users"
//     'average' => edad promedio de "users"
//     'hasCar' => total de "users" propietarios de un carro
//     'averageWithCar' => edad promedio de los "users" con un carro

function camiloEX5() {
  const Ex4= camiloEX4();
  const size= Ex4.length;
  const withCar= Ex4.filter((user) => user.car===true);
  const hasCar= withCar.length;
  const average= Math.floor(age(Ex4));
  const averageWithCar= Math.floor(age(withCar));
  const report= {
    'size': size,
    'usersCar': hasCar,
    'average': average,
    'averageWidthCar': averageWithCar,
  };
  return report;
}


function age(list) {
  console.log(list);
  const reducer = ( accumulator, currentValue) => accumulator + currentValue.age;
  const age = list.reduce(reducer, 0)/list.length;
  console.log(age);
  return age;
}
