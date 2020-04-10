import {cleanConsole, createAll} from './data';
import {camiloEX1} from './example-1';
const companies = createAll();

cleanConsole(3, companies);
console.log('---- EXAMPLE 3 --- ', camiloEX3());

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos
// "firstName" y "lastName" de "users" están en mayúsculas.
// Debes probar la operación de esta función importando la función creada
// en el "example-1.js".

function camiloEX3() {
  const Ex1= camiloEX1();
  const newList= Ex1.map(function(company) {
    company.users= company.users.map(function(user) {
      user = [user.firstName, user.lastName];
      return user;
    });
    company = [company.users, company.name].flat(2).filter(isNotEmpty);
    return company;
  });
  const isCapitalized = newList.flat().filter(checkUppercase).length === 0? true : false;
  return isCapitalized;
}

function isNotEmpty(elemento) {
  return elemento !== '';
}

function checkUppercase(string) {
  const character = string[0];
  return character !== character.toUpperCase();
}
