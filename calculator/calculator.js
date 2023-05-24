window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}




function setupIntialValues() {

  // Put some default values in the inputs
  let initialValues = {
    amount : 100000,
    years : 8,
    rate : 6.7
  };


  // Get the inputs from the DOM.
  let domAmount = document.getElementById("loan-amount");
  let domYears = document.getElementById("loan-years");
  let domRate = document.getElementById("loan-rate");

  domAmount.value = initialValues.amount;
  domYears.value = initialValues.years;
  domRate.value = initialValues.rate;

  // Call a function to calculate the current monthly payment
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {

  let currentValue = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValue));
}




function calculateMonthlyPayment(values) {

  // Given an object of values (a value has amount, years and rate ),
  let periodicInterestRate = ((values.rate / 100) / 12);
  let totalNumberOfPayments = Math.floor(values.years * 12);
  let amountOfPrinciple = values.amount;

  // calculate the monthly payment.  The output should be a string
  let totalValue;

  totalValue = (amountOfPrinciple * periodicInterestRate) / (1 - Math.pow((1 + periodicInterestRate), -totalNumberOfPayments));

  // that always has 2 decimal places.
  return totalValue.toFixed(2);


}



function updateMonthly(monthly) {

  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  let monthlyShow = document.getElementById("monthly-payment");
  monthlyShow.innerText = `$` + monthly;
}
