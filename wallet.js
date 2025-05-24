// Wallet utility functions

function getBalance() {
    return parseFloat(localStorage.getItem('walletBalance') || '0');
}

function setBalance(val) {
    localStorage.setItem('walletBalance', val.toFixed(2));
}

function addToBalance(val) {
    setBalance(getBalance() + val);
}

function deductFromBalance(val) {
    setBalance(getBalance() - val);
}

function formatCurrency(amount) {
    return '₱' + amount.toFixed(2);
}

// Update all wallet-balance elements on page load
function updateAllBalances() {
    const balance = formatCurrency(getBalance());
    document.querySelectorAll('.wallet-balance').forEach(el => {
        el.textContent = balance;
    });
}
updateAllBalances();

function saveTransaction(type, title, amount, status = "COMPLETED") {
    const transactions = JSON.parse(localStorage.getItem('transactions') || "[]");
    transactions.unshift({
        type,
        title,
        amount,
        status,
        date: new Date().toISOString()
    });
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Show the 5 most recent transactions
function renderRecentTransactions() {
    const txs = JSON.parse(localStorage.getItem('transactions') || "[]").slice(0, 5);
    const list = document.getElementById('recent-transactions');
    if (!list) return;
    if (txs.length === 0) {
        list.innerHTML = `<div style="color:#888;text-align:center;margin:24px 0;">No recent transactions.</div>`;
        return;
    }
    list.innerHTML = txs.map(t => `
        <div class="transaction-item">
            <div class="transaction-icon">
                ${
                    t.type === "sent" ? '<i class="fas fa-arrow-up" style="color:#e53935;"></i>' :
                    t.type === "received" ? '<i class="fas fa-arrow-down" style="color:#43a047;"></i>' :
                    t.type === "bill" ? '<i class="fas fa-file-invoice-dollar" style="color:#1976d2;"></i>' :
                    t.type === "add" ? '<i class="fas fa-plus" style="color:#5b21b6;"></i>' :
                    '<i class="fas fa-question"></i>'
                }
            </div>
            <div class="transaction-details">
                <h4 class="transaction-title">${t.title}</h4>
                <p class="transaction-date">${new Date(t.date).toLocaleString()}</p>
            </div>
            <div class="transaction-amount ${t.amount < 0 ? 'debit' : 'credit'}">
                ${(t.amount < 0 ? '-' : '+') + '₱' + Math.abs(t.amount).toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}
            </div>
        </div>
    `).join('');
}
renderRecentTransactions();