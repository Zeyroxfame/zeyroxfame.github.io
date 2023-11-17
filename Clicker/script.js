let counter = 0;
let money = 0;
let multiplier = 1;



function add1() {
	counter++;
    money = money + 1 * multiplier;
    money = Math.round(money * 100) / 100;
	const moneyVisual = `${money}\$`;
	const visual = `You clicked the button ${counter} times.`;
	document.getElementById("visual").innerHTML = visual;
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
    	
	