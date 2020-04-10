import {cleanConsole, createAll} from './data';

const companies = createAll();

cleanConsole(7, companies);
console.log('---- EXAMPLE 7 part 1 --- ', filterById(2));
console.log('---- EXAMPLE 7 part 2 --- ', removeById(0));
console.log('---- EXAMPLE 7 part 3 --- ', createPatch(0));
console.log('---- EXAMPLE 7 part 4 --- ', addUserCompany(0, 'Juan', 'Delgado', 35));
console.log('---- EXAMPLE 7 part 5 --- ', createPUT(0));
console.log('---- EXAMPLE 7 part 6 --- ', removeUserCompany(0, 1));
console.log('---- EXAMPLE 7 part 7 --- ', createPatchUser(2, 2));
console.log('---- EXAMPLE 7 part 8 --- ', createUserPUT(2, 2));
console.log('---- EXAMPLE 7 part 9 --- ', changeUserCompany(0, 1, 0));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Parte 1: Crear una función tomando como parámetro un "id" de "company" y
// devolviendo el nombre de esta "company".

function filterById(id) {
  const getCompany = companies.filter((company) => company.id === id)[0];
  return getCompany.name;
}

// Parte 2: Crear una función tomando como parámetro un "id" de "company" y
// quitando la "company" de la lista.

function removeById(id) {
  const getCompanies = companies.filter((company) => company.id !== id);
  return getCompanies;
}
// Parte 3: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PATCH (como con una llamada HTTP) en todos los
// atributos de esta "company" excepto en el atributo "users".

function createPatch(id) {
  const getCompany = companies.filter((company) => company.id === id)[0];
  const base= 'company';
  const newCompany = {
    name: base + '/name/' + getCompany.name,
    isOpen: base + '/isOpen/' + getCompany.isOpen,
    usersLength: base + '/usersLength/' + getCompany.usersLength,
    id: base + '/id/' + getCompany.id,
  };
  return newCompany;
}

// Parte 4: Crear una función tomando como parámetro un "id" de "company" y un
// nuevo "user" cuyo el apelido es "Delgado", el nombre "Juan", de 35 años y
// dueño de un carro. El nuevo "user" debe agregarse a la lista de "users" de este
// "company" y tener un "id" generado automáticamente. La función también debe modificar
// el atributo "usersLength" de "company".

function addUserCompany(idCompany, nameUser, lastNameUser, ageUser) {
  const newList = companies.map( function(company) {
    const newUser={
      firstName: nameUser,
      lastName: lastNameUser,
      age: ageUser,
      car: true,
      id: Math.floor(Math.random()*100 + company.usersLength),
    };
    if (company.id===idCompany) {
      company.users.push(newUser);
      company.usersLength= company.usersLength +1;
    }
    return company;
  },
  );
  return newList;
}

// Parte 5: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PUT (como con una llamada HTTP) en esta "company" excepto
// en el atributo "users".

function createPUT(id) {
  const companyPayLoad = companies.filter((company) => company.id === id)[0];
  fetch('https://companies.com/company/id/' + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(companyPayLoad),
  })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error Test:', error);
      });
}

// Parte 6: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user". La función debe quitar este "user" de la lista de "users"
// de "company" y cambiar el atributo "usersLength" de "company".

function removeUserCompany(idCompany, idUser) {
  const newList = companies.map(function(company) {
    if (company.id===idCompany) {
      company.users= filterUsers(company.users);
      company.usersLength= company.usersLength -1;
    }
    return company;
  },
  );
  return newList;
  function filterUsers(usersList) {
    const newList= usersList.filter(checkId);
    return newList;
  }

  function checkId(elemento) {
    return elemento.id !== idUser;
  }
}

// Parte 7: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PATCH (como con una llamada HTTP) en este
// "user".

function createPatchUser(idCompany, idUser) {
  const getCompany = companies.filter((company) => company.id === idCompany)[0];
  const getuser = getCompany.users.filter((user) => user.id === idUser)[0];
  const base= getCompany.name + '/user/';
  const newUser = {
    firstName: base + 'firstName' + getuser.firstName,
    lastName: base + 'lastName' + getuser.lastName,
    age: base + 'lastName' + getuser.lastName,
    car: base + 'car' + getuser.car,
    id: base + 'id' + getuser.id,
  };
  return newUser;
}


// Parte 8: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PUT (como con una llamada HTTP) en este
// "user".

function createUserPUT(idCompany, idUser) {
  const getCompany = companies.filter((company) => company.id === idCompany)[0];
  const userPayLoad = getCompany.users.filter((user) => user.id === idUser)[0];

  fetch('https://companies.com/company/user/' + idUser, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userPayLoad),
  })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error Test:', error);
      });
}
// Parte 9: Crear una función tomando como parámetro dos "id" de "company" y
// un "id" de "user". La función debe permitir que el user sea transferido de la
// primera "company" a la segunda "company". El atributo "usersLength" de cada
// "company" debe actualizarse.

function changeUserCompany(idCompany1, idCompany2, idUser) {
//  get user
  const movedUser = companies.map(function(company) {
    if (company.id===idCompany1) {
      const userToMove = filterUsers(company.users)[0];
      return userToMove;
    }
  },
  )[0];
  //  move user
  const listFinal = companies.map(function(company) {
    if (company.id===idCompany1) {
      company.users= removeUsers(company.users);
      company.usersLength= company.usersLength -1;
    }

    if (company.id===idCompany2) {
      company.users.push(movedUser);
      company.usersLength= company.usersLength +1;
    }

    return company;
  },
  );
  //  remove user
  function removeUsers(usersList) {
    const newList= usersList.filter(removeId);
    return newList;
  }
  //  get user
  function filterUsers(usersList) {
    const newList= usersList.filter(checkId);
    return newList;
  }
  //  check
  function checkId(elemento) {
    return elemento.id === idUser;
  }

  //  remove
  function removeId(elemento) {
    return elemento.id !== idUser;
  }
  return listFinal;
}
