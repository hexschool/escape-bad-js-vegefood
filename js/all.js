const url = 'https://hexschool.github.io/js-filter-data/data.json';
const table = document.querySelector('.table-content');
const filter = document.querySelector('.filter');
let showData = [];
let category = '';
let data = [];

function renderData(arr) {
  let str = '';
  arr.forEach((item) => {
    const content = `<tr>
    <td>${item.作物名稱}</td>
    <td>${item.市場名稱}</td>
    <td>${item.上價}</td>
    <td>${item.中價}</td>
    <td>${item.下價}</td>
    <td>${item.平均價}</td>
    <td>${item.交易量}</td>
    </tr>`;
    str += content;
  });
  table.innerHTML = str;
}

window.axios.get(url)
  .then((res) => {
    data = res.data.filter((item) => item.作物名稱);
    renderData(data);
  });

function filterCategory(e) {
  if (e.target.nodeName === 'BUTTON') {
    category = e.target.dataset.category;
    showData = data.filter((item) => item.種類代碼 === category);
    renderData(showData);
  }
}

filter.addEventListener('click', filterCategory);
