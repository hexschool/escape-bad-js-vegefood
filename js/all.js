// TODO: 修正 ESLint 錯誤、補上分號、前輩說要改單引號 QQ
var url = 'https://hexschool.github.io/js-filter-data/data.json';
var data;

axios.get(url)
  .then(function (res) {
    data = res.data.filter(a => a.作物名稱);
    console.log(data);
    renderData();
  });

var table = document.querySelector('.table-content');
var showData = [];

var category = '';
var filter = document.querySelector('.filter');

filter.addEventListener('click', filterCategory);

function renderData() {
  // TODO: 之後拆成 renderData 函式
  var str = '';
  data.forEach((b, index) => {
    // TODO: 改成 ES6 的 Template Literals (字面字串符)
    var content = `
    <tr>
    <td>${b.作物名稱}</td>
    <td>${b.市場名稱}</td>
    <td>${b.上價}</td>
    <td>${b.中價}</td>
    <td>${b.下價}</td>
    <td>${b.平均價}</td>
    <td>${b.交易量}</td>
    </tr>
    `
    str += content;
  })
  table.innerHTML = str;
};

function filterCategory(e) {
  if (e.target.nodeName == 'BUTTON') {
    category = e.target.dataset.category;
    showData = data.filter((i) => {
      return i.種類代碼 == category;
    })
    // TODO: 之後拆成 renderData 函式
    renderData();
  } else {
    return;
  }
}