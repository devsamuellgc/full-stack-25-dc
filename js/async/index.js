const tableContent = document.getElementById("tableContent");
const url = "https://65949ae51493b011606aad53.mockapi.io/clientes";

async function fetchClients() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function deleteClient(id) {
  await fetch(`${url}/${id}`, { method: "DELETE" });
  await renderClientList();
}

async function renderClientList() {
  tableContent.innerHTML = "";
  const clients = await fetchClients();
  clients.map((client) => {
    return (tableContent.innerHTML += `
        <tr>
          <td class="body-cell">${client.name}</td>
          <td class="body-cell">${client.email}</td>
          <td class="body-cell">${client.telefone}</td>
          <td class="body-cell actions">
            <div class="actions-buttons">
              <button class="edit">Editar</button>
              <button class="delete" onclick="deleteClient(${client.id})">Excluir</button>
            </div>
          </td>
        </tr>
    `);
  });
}

window.addEventListener("load", async () => {
  await renderClientList();
});
