describe('Calculate the rate successfully $ return 2 decimal places', () => {
  it('should calculate the monthly rate correctly', function () {
    // ...
  
    let values = {
      amount : 15600,
      years : 4,
      rate : 3.99
    }
  
    expect(calculateMonthlyPayment(values)).toEqual("352.16");
  });

  it("should return a result with 2 decimal places", function() {
    // ..
  
    let values = {
      amount : 650000,
      years : 30,
      rate : 5.99
    }
  
    expect(calculateMonthlyPayment(values)).toEqual("3892.90");  
  });




  // String return check


  it("should return String", function() {
  // ..


  expect(calculateMonthlyPayment(Object)).toBeInstanceOf(String);

  });

});



