//starts receipt, with size
function getReceipt() {
	var text1 = "<h3>You Ordered:</h3>";
	var addOn = "";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium") {
		sizeTotal = 10;
	} else if (selectedSize === "Large") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra-Large") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
    getMeat(runningTotal,text1, addOn);
};
    
//meat
function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meat");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			
			
			var meatCount = selectedMeat.length;
		 if (meatCount > 1) {
			meatTotal = (meatCount - 1);
			addOn = " +$1.00";
		} else {
			meatTotal = 0;
			addOn = "";
		}
		text1 = text1+meatArray[j].value+addOn+"<br>";
		}
	}
	
	runningTotal = (runningTotal + meatTotal);
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
    getVeg(runningTotal,text1, addOn);
};	

//veg
function getVeg(runningTotal,text1) {
	var vegTotal = 0;
	var selectedVeg = [];
	var vegArray = document.getElementsByClassName("veg");
	for (var k = 0; k < vegArray.length; k++) {
		if (vegArray[k].checked) {
			selectedVeg.push(vegArray[k].value);
			
		var vegCount = selectedVeg.length;
		if (vegCount > 1) {
			vegTotal = (vegCount - 1);
			addOn = " +$1.00";
		} else {
			vegTotal = 0;
			addOn = "";
		}
	text1 = text1+vegArray[k].value+addOn+"<br>";
	}
	}
	runningTotal = (runningTotal + vegTotal);
	document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
    getCrust(runningTotal,text1,addOn);
};

//crust
function getCrust(runningTotal,text1) {
	var crustTotal = 0;
	var selectedCrust = [];
	var crustArray = document.getElementsByClassName("crust");
	for (var l = 0; l < crustArray.length; l++) {
		if (crustArray[l].checked) {
			selectedCrust.push(crustArray[l].value);
			
		if (selectedCrust == "Cheese Stuffed") {
			crustTotal = 3;
			addOn = " +$3.00";
		} else  {
			sizeTotal = 0;
			addOn = "";
		}
		text1 = text1+crustArray[l].value+addOn+"<br>";
	}
}
    runningTotal = (runningTotal + crustTotal);
	document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
    getSauce(runningTotal,text1);
};

//sauce
function getSauce(runningTotal,text1) {
	var sauceTotal = 0;
	var selectedSauce = [];
	var sauceArray = document.getElementsByClassName("sauce");
	for (var m = 0; m < sauceArray.length; m++) {
		if (sauceArray[m].checked) {
			selectedSauce.push(sauceArray[m].value);
			text1 = text1+sauceArray[m].value+"<br>";
		}
    }
    runningTotal = (runningTotal + sauceTotal);
	document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
    getCheese(runningTotal,text1,addOn);
};

//cheese
function getCheese(runningTotal,text1) {
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var n = 0; n < cheeseArray.length; n++) {
		if (cheeseArray[n].checked) {
			selectedCheese.push(cheeseArray[n].value);
			
		if (selectedCheese == "Extra") {
			cheeseTotal = 3;
			addOn = " +$3.00";
		} else  {
			sizeTotal = 0;
			addOn = "";
		}
		text1 = text1+cheeseArray[n].value+addOn+"<br>";
	}
}
    runningTotal = (runningTotal + cheeseTotal);
	document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};

//cancel order
function cancel(){
document.getElementById("showText").innerHTML= "<br/>Your order has been cleared.";
document.getElementById("totalPrice").innerHTML = "";
};