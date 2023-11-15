function alert1() {
	alert("This is a in the making clicker, simply for a fun project to do.")
}

let counter = 0;
let money = 0;
let multiplier = 1;

function add1() {
	counter++;
 money++;
	const visual = `You clicked the button ${counter} times.`;
 const moneyVisual = `${money} dollars`;
	document.getElementById("visual").innerHTML = visual;
 document.getElementById("money").innerHTML = moneyVisual;
}
	