const BaseUrl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Populate dropdowns and set flags
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    if (select.name === "from" && currCode === "USD") newOption.selected = "selected";
    if (select.name === "to" && currCode === "INR") newOption.selected = "selected";

    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
    updateExchangeRate(); // Update conversion on currency change
  });
}

// Update flag images
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let img = element.parentElement.querySelector("img");
  img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
};

// Fetch and update exchange rate
const updateExchangeRate = async () => {
  try {
    let amount = document.querySelector('.amount input');
    let amtVal = amount.value;

    if (!amtVal || amtVal <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    const url = `${BaseUrl}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    let data = await response.json();

    if (!data[toCurr.value.toLowerCase()]) {
      throw new Error("Invalid currency conversion");
    }

    let rate = data[toCurr.value.toLowerCase()];
    let convertedAmount = (amtVal * rate).toFixed(2);
    msg.innerText = `${amtVal} ${fromCurr.value} = ${convertedAmount} ${toCurr.value}`;
  } catch (err) {
    alert("Failed to fetch exchange rate. API may be down or invalid currency.");
    console.error(err);
    msg.innerText = "Conversion not available";
  }
};

// Button click event
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

// Initialize on page load
window.addEventListener('load', () => {
  updateExchangeRate();
  updateFlag(fromCurr);
  updateFlag(toCurr);
});
