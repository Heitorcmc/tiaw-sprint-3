let professionals = ["Nutricionista", "Treinador"];


function init() {
  showProfessionals();
}

function showProfessionals() {
  const filteredProfessionals = filterProfessionals();
  const contact_table = document.getElementById('table-contatos');
  let contactsHTML = '';

  for(let contato of filteredProfessionals) {
    contactsHTML += `<tr><td scope="row">${contato.id}</td>
                                                      <td>${contato.nome}</td>
                                                      <td>${contato.telefone}</td>
                                                      <td>${contato.email}</td>
                                                      <td>${contato.cidade}</td>
                                                      <td>${contato.categoria}</td>
                                                  </tr>`
  }

  contact_table.innerHTML = contactsHTML;
}

function filterProfessionals() {
  let storedUsers = localStorage.getItem('db_contato');
  let users = JSON.parse(storedUsers).data;
  
  const lastUser = findLastUserInArray(users);
  const { cidade: city } = lastUser;

  let filteredProfessionals = users
    .filter((u) => u.cidade == city)
    .filter((u) => professionals.includes(u.categoria));
  
  return filteredProfessionals;
}

function findLastUserInArray(users) {
  return users.at(-1);
}



// categoria: "Nutricionista"
// cidade: "São Paulo"
// email: "Rey.Padberg@karina.biz"
// id: 10
// nome: "Clementina DuBuque"
// telefone: "024-648-3804"
