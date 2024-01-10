const tableContent = document.getElementById("tableContent");
const btnAdd = document.getElementById("addClient");
const url = "https://65949ae51493b011606aad53.mockapi.io/clientes";

const newClient = {
  name: "Teste mock",
  email: "Teste mock e-mail",
  telefone: "Teste mock telefone",
};

async function fetchClients() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchClient(id) {
  const response = await fetch(`${url}/${id}`);
  const data = await response.json();
  console.log(data);
}

async function createUser(client) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(client),
  });
  console.log(response);
}

async function deleteClient(id) {
  await fetch(`${url}/${id}`, { method: "DELETE" });
  await renderClientList();
}

function createRowTable(client) {
  const row = `
    <tr>
      <td class="body-cell">${client.name}</td>
      <td class="body-cell">${client.email}</td>
      <td class="body-cell">${client.telefone}</td>
      <td class="body-cell actions">
        <div class="actions-buttons">
          <button class="edit" onclick="fetchClient(${client.id})">Editar</button>
          <button class="delete" onclick="deleteClient(${client.id})">Excluir</button>
        </div>
      </td>
    </tr>
  `;
  return row;
}

async function renderClientList() {
  tableContent.innerHTML = "";
  const clients = await fetchClients();
  clients.map((client) => {
    const clientRow = (tableContent.innerHTML += createRowTable(client));
    return clientRow;
  });
}

window.addEventListener("load", async () => {
  await renderClientList();
});

btnAdd.addEventListener("click", () => createUser(newClient));
