let counter = 0;
let money = 0;
let multiplier = 1;
let base = 1;

document.getElementById("+money").addEventListener("click", debugMoney)

function add1() {
	counter++;
    money = money + base * multiplier;
    money = Math.round(money * 100) / 100;
	const moneyVisual = `${money}\$`;
	const visual = `You clicked the button ${counter} times.`;
	document.getElementById("visual").innerHTML = visual;
 document.getElementById("money").innerHTML = moneyVisual;
}
function debug() {
if (confirm("Activate debug mode?")) {
	const moneyButton = document.createElement("button");
	const moneyText = document.createTextNode("+100000$");
	moneyButton.id = "+money";
	moneyButton.appendChild(moneyText);
	document.getElementById("debug").appendChild(moneyButton);
   }
else {
	alert("Lmao ok wimp")
   }
}
function debugMoney() {
money = money + 9999999;
const moneyVisual = `${money}\$`;
document.getElementById("money").innerHTML = moneyVisual;
}	
function incrementMultiplier() {
	if (money >= 20) {
		money = money - 20;
		multiplier = multiplier + 0.1;
		multiplier = Math.round(multiplier * 100) / 100;
		money = Math.round(money * 100) / 100;
		const moneyVisual = `${money}\$`;
        const multiplierVisual = `Multiplier = ${multiplier}`;
		document.getElementById("multiplier").innerHTML = multiplierVisual;
		document.getElementById("money").innerHTML = moneyVisual;
	}
	else {document.getElementById("notEnough").innerHTML = "Not enough money."}
}
function incrementBase() {
    if (money >= 100) {
	    money = money - 100;
	    base = base + 1;
	    money = Math.round(money * 100) / 100;
	    const moneyVisual = `${money}\$`;
	    const baseVisual = `Base = ${base}`;
	    document.getElementById("base").innerHTML = baseVisual;  
	    document.getElementById("money").innerHTML = moneyVisual;
    }
	else {document.getElementById(notEnough).innerHTML = "Not enough money."}
}	
	
    	
	