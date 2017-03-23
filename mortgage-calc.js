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
//Conver percent to decimal
function percentToDecimal(percent) {
  return (percent/12)/100;
}

function yearsToMonths(year) {
  return year * 12;
}
