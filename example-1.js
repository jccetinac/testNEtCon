import {createAll, cleanConsole} from './data';
const companies = createAll();

cleanConsole(1, companies);
console.log('---- EXAMPLE 1 --- ', camiloEX1());

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.


export function camiloEX1() {
  const companies1 = companies;
  companies1.map(function(company) {
    company.name= capitalize(company.name);
    company.users= cleanUsers(company.users);
  });
  companies1.sort((a, b) => (a.usersLength > b.usersLength)
  ? 1 : (a.usersLength === b.usersLength) ? ((a.size > b.size) ? 1 : -1) : -1);
  return companies1;
}

function cleanUsers(userList) {
  userList.map( function(user) {
    user.lastName ? user.lastName =capitalize(user.lastName) : user.lastName = '';
    user.firstName ? user.firstName = capitalize(user.firstName) : user.firstName = '';
    return user;
  },
  );
  userList.sort((a, b) => (a.lastName > b.lastName)
  ? 1 : (a.lastName === b.lastName) ? ((a.size > b.size) ? 1 : -1) : -1);
  return userList;
}

//  tools

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
