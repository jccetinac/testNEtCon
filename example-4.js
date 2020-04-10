import {cleanConsole, createAll} from './data';
const companies = createAll();

cleanConsole(4, companies);
console.log('---- EXAMPLE 4 --- ', camiloEX4());

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y agrupando
// todos los "users" de todas las "companies" en una sola tabla. Cada "user"
// debe tener un nuevo atributo "company" que tenga como valor el nombre de la
// dicha "company". Los "users" deben ordenarse de acuerdo con sus edad
// (de mayor a menor).

export function camiloEX4() {
  const companies4= companies;
  const newListGroup= companies4.map(function(company) {
    company.users= company.users.map(function(user) {
      user.company = company.name;
      return user;
    });
    return company.users;
  });
  const userList1 = newListGroup.flat(3);
  return userList1;
}
