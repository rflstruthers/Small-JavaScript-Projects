//Calculate Tip
function calculateTip() {
    var billAmount = document.getElementById("bill_amount").value;
    var tipAmount = document.getElementById("tip_amount").value;
    var numberOfPeople = document.getElementById("number_people").value;
  
    //validate input
    if (billAmount === "" || tipAmount == 0) {
      alert("Please enter both a bill amount and tip amount");
      return;
    }
    
    if (numberOfPeople === "" || numberOfPeople < 1) {
      alert("Please enter number of people");
      return;
    } else if (numberOfPeople == 1) {
      document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }
  
    //Calculate tip
    var total = (billAmount * tipAmount) / numberOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
  
  }
  
  //Hide the tip amount on load
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";
  
  //click to call function
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };