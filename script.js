const calculateLoan = () => {
  const amount = Number(document.getElementById('amount').value);
  const annualInterest = Number(document.getElementById('interest').value);
  const years = Number(document.getElementById('years').value);

  const monthlyInterest = annualInterest / 100 / 12;
  const payments = years * 12;

  const x = Math.pow(1 + monthlyInterest, payments);
  const monthly = (amount * x * monthlyInterest) / (x - 1);

  if (isFinite(monthly)) {
    document.getElementById('monthlyPayment').textContent = `¥${Math.round(monthly).toLocaleString()}`;
    document.getElementById('totalPayment').textContent = `¥${Math.round(monthly * payments).toLocaleString()}`;
  } else {
    document.getElementById('monthlyPayment').textContent = '¥0';
    document.getElementById('totalPayment').textContent = '¥0';
  }
};

document.getElementById('calcBtn').addEventListener('click', calculateLoan);

window.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') calculateLoan();
});