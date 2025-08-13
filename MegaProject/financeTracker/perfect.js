let transactionHistory = JSON.parse(localStorage.getItem("transactions")) || [];
let currentBalance = parseFloat(localStorage.getItem("balance")) || 0;
// Initialize balance status ; this balance it get from localstorage
// DOM Elements
const tbody = document.getElementById("tbody");
const amountInput = document.getElementById("amount");
const infoInput = document.getElementById("info");
const dateInput = document.getElementById("date");
const typeInput = document.getElementById("type");
const categoryInput = document.getElementById("category");
const adBtn = document.getElementById("adBtn");
const monthFilter = document.getElementById("monthFilter");
const balanceStatus = document.getElementById("balance-status");
const summary = document.getElementById("summary");

// Save data to localStorage
function saveData() {
  localStorage.setItem("transactions", JSON.stringify(transactionHistory));
  localStorage.setItem("balance", currentBalance);
}
// Render transactions
function renderTransactions() {
  tbody.innerHTML = "";
  let selectedMonth = monthFilter.value;
  let filtered = transactionHistory;

  if (selectedMonth) {
    filtered = transactionHistory.filter(tx => tx.date.startsWith(selectedMonth));
  }
//This logic says: "If the user picks a month, only show transactions from that month. If no month is picked, show all transactions."
  filtered.forEach((tx, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${tx.date}</td>
      <td>${tx.amount}</td>
      <td>${tx.info}</td>
      <td>${tx.type}</td>
      <td>${tx.category}</td>
      <td><button onclick="deleteTransaction(${tx.id})">Delete</button></td>
      <td>${tx.balance}</td>
    `;
    tbody.appendChild(row);
  });

  // Calculate summary
  let income = filtered.filter(tx => tx.type === "income")
                       .reduce((sum, tx) => sum + Number(tx.amount), 0);
  let expense = filtered.filter(tx => tx.type === "expense")
                        .reduce((sum, tx) => sum + Number(tx.amount), 0);

  summary.textContent = `Total Income: ₹${income} | Total Expense: ₹${expense}`;

  // Always recalculate balance from history
  currentBalance = transactionHistory.reduce((balance, tx) => {
    return tx.type === "income" ? balance + Number(tx.amount) : balance - Number(tx.amount);
  }, 0);

  balanceStatus.textContent = `Current Balance: ₹${currentBalance}`;
  saveData(); // Keep balance in sync
}

// Add transaction
function addTransaction() {
  const amount = Number(amountInput.value);
  const info = infoInput.value.trim();
  const date = dateInput.value;
  const type = typeInput.value;
  const category = categoryInput.value;

  if (!amount || !date || !info) {
    alert("Please fill all fields.");
    return;
  }

  // Balance is recalculated in renderTransactions(), so no need to update here manually
  const tx = {
    id: Date.now(),
    date,
    amount,
    info,
    type,
    category,
    balance: 0 // will be calculated after render
  };

  transactionHistory.push(tx);
  saveData();
  amountInput.value = "";
  infoInput.value = "";
  renderTransactions();
}

// Delete transaction
function deleteTransaction(id) {
  transactionHistory = transactionHistory.filter(tx => tx.id !== id);
  renderTransactions();
}

// Month filter & date restriction
monthFilter.addEventListener("input", () => {
  if (monthFilter.value) {
    let [year, month] = monthFilter.value.split("-");
    let firstDay = `${year}-${month}-01`;
    let lastDay = new Date(year, month, 0).getDate();
    let lastDayStr = `${year}-${month}-${String(lastDay).padStart(2, "0")}`;

    dateInput.min = firstDay;
    dateInput.max = lastDayStr;
    dateInput.value = firstDay; // auto-reset to first day
  } else {
    dateInput.removeAttribute("min");
    dateInput.removeAttribute("max");
    dateInput.value = "";
  }
  renderTransactions();
});

adBtn.addEventListener("click", addTransaction);

// Initial render
renderTransactions();

// Expose delete function globally
window.deleteTransaction = deleteTransaction;
