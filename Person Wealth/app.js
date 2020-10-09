const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];

//Fetch random user and add money

async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

function addData(obj) {
  data.push(obj);

  updateDom();
}

//UpdateDom
function updateDom(providedData = data) {
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

  providedData.forEach((item, ind) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

// Format number as money
function formatMoney(num) {
  return "$" + num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

function doubleFunc() {
  data = data.map((val, ind) => {
    return { ...val, money: val.money * 2 };
  });

  updateDom();
}

//million func
function millionFunc() {
  data = data.filter(function (val) {
    return val.money > 1000000;
  });

  updateDom();
}

//Sort Function
function sortFunc() {
  data.sort(function (a, b) {
    return b.money - a.money;
  });

  updateDom();
}

//Reduce Function to get accumulated Sum
function reduceFunc() {
  const sumAll = data.reduce(function (p, n) {
    return p + n.money;
  }, 0);

  //   console.log(formatMoney(sumAll));
  const wealthEl = document.createElement("div");
  wealthEl.innerHTML = `<h3>Total Wealth : <strong>${formatMoney(
    sumAll
  )}</strong> </h3>`;
  main.appendChild(wealthEl);
}

//Event Listeners
addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleFunc);
showMillionairesBtn.addEventListener("click", millionFunc);
sortBtn.addEventListener("click", sortFunc);
calculateWealthBtn.addEventListener("click", reduceFunc);
getRandomUser();
getRandomUser();
getRandomUser();
