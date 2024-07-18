function computeLoan() {
    const loanAmount = parseFloat(document.getElementById('amount').value);
    const interestRate = parseFloat(document.getElementById('interest_rate').value) / 100;
    const months = parseInt(document.getElementById('months').value);
  
    
    const monthlyInterest = interestRate / 12;
    const numerator = monthlyInterest * Math.pow(1 + monthlyInterest, months);
    const denominator = Math.pow(1 + monthlyInterest, months) - 1;
    const monthlyPayment = loanAmount * (numerator / denominator);
  //formula para calcular el pago mensual
  
    document.getElementById('payment').textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;//esto mostraria el resultado
  }
  