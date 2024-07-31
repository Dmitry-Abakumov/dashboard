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

// async function main() {
//   const customersData = await getData();
//   let currentPage = 1;
//   let rows = 8;

//   function displayList(arrData, rowPerPage, page) {
//     const customersTbodyRef = document.querySelector(".customers__tbody");
//     customersTbodyRef.innerHTML = "";
//     page--;

//     const start = rowPerPage * page;
//     const end = start + rowPerPage;
//     const paginatedData = arrData.slice(start, end);

//     render(paginatedData, customersTbodyRef);
//   }

//   function displayPagination(arrData, rowPerPage) {
//     const paginationEl = document.querySelector(".pagination");
//     const pagesCount = Math.ceil(arrData.length / rowPerPage);
//     const ulEl = document.createElement("ul");
//     ulEl.classList.add("pagination__list");
//     ulEl.classList.add("list");

//     // paginationEl.insertAdjacentHTML(
//     //   "afterbegin",
//     //   `<button class="pagination__prev-btn" type="button"><svg width="12" height="12" class="nav-menu__icon">
//     //               <use href="./images/svg/sprite/sprite.svg#icon-arrow"></use>
//     //             </svg></button>`
//     // );

//     for (let i = 0; i < pagesCount; i++) {
//       const liEl = displayPaginationBtn(i + 1);
//       ulEl.appendChild(liEl);
//     }
//     paginationEl.appendChild(ulEl);

//     // paginationEl.insertAdjacentHTML(
//     //   "beforeend",
//     //   `<button class="pagination__next-btn" type="button"><svg width="12" height="12" class="nav-menu__icon">
//     //               <use href="./images/svg/sprite/sprite.svg#icon-arrow"></use>
//     //             </svg></button>`
//     // );

//     // const prevBtn = document.querySelector(".pagination__prev-btn");
//     // const nextBtn = document.querySelector(".pagination__next-btn");

//     // prevBtn.addEventListener("click", () => {
//     //   currentPage = page;
//     //   displayList(customersData, rows, currentPage);

//     //   let currentItemLi = document.querySelector("li.pagination__item_active");
//     //   currentItemLi.classList.remove("pagination__item_active");

//     //   liEl.classList.add("pagination__item_active");
//     // });

//     // nextBtn.addEventListener("click", () => {
//     //   currentPage = page;
//     //   displayList(customersData, rows, currentPage);

//     //   let currentItemLi = document.querySelector("li.pagination__item_active");
//     //   currentItemLi.classList.remove("pagination__item_active");

//     //   liEl.classList.add("pagination__item_active");
//     // });
//   }

//   function displayPaginationBtn(page) {
//     const liEl = document.createElement("li");
//     liEl.classList.add("pagination__item");
//     liEl.innerText = page;

//     if (currentPage == page) liEl.classList.add("pagination__item_active");

//     liEl.addEventListener("click", () => {
//       currentPage = page;
//       displayList(customersData, rows, currentPage);

//       let currentItemLi = document.querySelector("li.pagination__item_active");
//       currentItemLi.classList.remove("pagination__item_active");

//       liEl.classList.add("pagination__item_active");
//     });

//     return liEl;
//   }

//   displayList(customersData, rows, currentPage);
//   displayPagination(customersData, rows);
// }

// main();
