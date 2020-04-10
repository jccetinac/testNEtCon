import {cleanConsole, createAll} from './data';
const companies = createAll();

cleanConsole(2, companies);
console.log('---- EXAMPLE 2 --- ', camiloEX2());

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y el
// booleano "hasCar". Para cada "company" debe conservar solo
// "users" cuyo valor de atributo "car" es igual al parámetro del
// función "hasCar" y el atributo "usersLength" deben indicar el total de
// "users" correspondientes al parámetro "hasCar".


function camiloEX2() {
  const HASCAR= true;
  const companies2= companies;
  const filterCarCompanies = companies2.map(function(company) {
    company.users= filterUsers(company.users);
    company.usersLength = company.users.length;
    return company;
  });
  return filterCarCompanies;

  function filterUsers(usersList) {
    const newList= usersList.filter(hasCar);
    return newList;
  }

  function hasCar(elemento) {
    return elemento.car === HASCAR;
  }
}
