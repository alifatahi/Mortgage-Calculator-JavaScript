//Formula: c = ( r * p ) / (1 - Math.pow((1 + r) , (-n) ))

//function for Calculate Mortgage
/**
 * @param p = float (loan)
 * @param r = (interst as percentage(montly interst rate))
 * @param n = (term in years (montly Pay))
 */
function calculateMortgage(p,r,n) {

  //convert this percent to decimal
  r = percentToDecimal(r);

  //convert years to month
  n = yearsToMonths(n);

  var pmt = ( r * p ) / (1 - Math.pow((1 + r) , (-n) ));

  return parseFloat(pmt.toFixed(2));
}
//Convert percent to decimal
function percentToDecimal(percent) {
  return (percent/12)/100;
}
//Convert Years to Month
function yearsToMonths(year) {
  return year * 12;
}
// Post Total amount
function postPayments(payment) {
  var htmlEl = document.getElementById('outMontly');
  //using innerText for Display our value
  htmlEl.innerText = "$" + payment;
}

//using document.getElementById for Make our HTML btn Calculate
var btn = document.getElementById('btnCalculate');
btn.onclick = function() {


  //cost of House
 var cost = document.getElementById('inCost').value;


 //(پیش قسط)
 var downPayment = document.getElementById('inDown').value;
 //interst rate
 var interst = document.getElementById('inAPR').value;
 //time like year
 var term   = document.getElementById('inPeriod').value;

 //Validation
 if (cost < 0 || downPayment < 0 || interst < 0 || term <0) {
   alert("Invalid Number");
   return false;
 }
 if (cost == "" || downPayment == "" || interst == "" || term == "") {
   alert("Please Fill All");
   return false;
 }

 var amount = cost - downPayment;
 //Calculate all
 var pmt = calculateMortgage(amount,interst,term);
 //post final result
 postPayments(pmt);

};
