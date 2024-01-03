async function fetchClients() {
  const response = await fetch(
    "https://65949ae51493b011606aad53.mockapi.io/clientes"
  );
  console.log(response)
  const data = await response.json();
  console.log(data);
}

fetchClients();
