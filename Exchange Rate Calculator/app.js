let currency_one = document.getElementById("currency-one");
let currency_two = document.getElementById("currency-two");

let amount_one = document.getElementById("amount-one");
let amount_two = document.getElementById("amount-two");

let rate = document.getElementById("rate");
let swap = document.getElementById("swap");

//Fetch Exchange Rates and Update the DOM
function calculate() {
  let cur1 = currency_one.value;
  let cur2 = currency_two.value;
  fetch(
    `https://v6.exchangerate-api.com/v6/42f7e40c22ae840d05dfb3e1/latest/${cur1}`
  )
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data.conversion_rates);
      const fetchAmount = data.conversion_rates[cur2];
      rate.innerHTML = `1 ${cur1} = ${fetchAmount} ${cur2}`;
      amount_two.value = (amount_one.value * fetchAmount).toFixed(2);
    });
}

function swapFunction() {
  let cur1 = currency_one.value;
  let cur2 = currency_two.value;
  currency_one.value = cur2;
  currency_two.value = cur1;
  calculate();
}

//Event Listener
currency_one.addEventListener("change", calculate);
amount_one.addEventListener("input", calculate);
currency_two.addEventListener("change", calculate);
amount_two.addEventListener("input", calculate);

swap.addEventListener("click", swapFunction);

calculate();
