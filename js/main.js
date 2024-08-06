function computeLoan() {
  const loanAmount = parseFloat(document.getElementById('amount').value);
  const interestRate = parseFloat(document.getElementById('interest_rate').value) / 100;
  const months = parseInt(document.getElementById('months').value);

  const monthlyInterest = interestRate / 12;
  let totalPayment = 0;

  for (let i = 0; i < months; i++) {
    const numerator = monthlyInterest * Math.pow(1 + monthlyInterest, months - i);
    const denominator = Math.pow(1 + monthlyInterest, months) - 1;
    const monthlyPayment = loanAmount * (numerator / denominator);
    totalPayment += monthlyPayment;
  }

  document.getElementById('payment').textContent = `Total Payment: $${totalPayment.toFixed(2)}`;
}