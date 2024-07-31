const customersTbodyRef = document.querySelector(".customers__tbody");

async function getData() {
  const response = await fetch(
    "https://66a37c5c44aa637045815ecc.mockapi.io/api/customers"
  );
  const data = await response.json();

  return data;
}

const makeMarkup = (data) =>
  data
    .map(
      ({ name, company, phone, email, country, isActive }) => `
      <tr class="customers__table-line">
              <td class="customers__table-cell">${name}</td>
              <td class="customers__table-cell">${company}</td>
              <td class="customers__table-cell">${phone}</td>
              <td class="customers__table-cell">${email}</td>
              <td class="customers__table-cell">${country}</td>
              <td><span class="customers__table-cell status ${
                isActive ? "active" : "inactive"
              }">${isActive ? "Active" : "Inactive"}</span></td>
            </tr>
      `
    )
    .join("");

const render = (data, htmlEl) => {
  htmlEl.insertAdjacentHTML("beforeend", makeMarkup(data));
};

const main = async () => {
  const customers = await getData();

  render(customers, customersTbodyRef);
};

main();
