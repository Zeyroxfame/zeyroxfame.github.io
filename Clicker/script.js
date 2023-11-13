function alert1() {
	alert("This is a in the making clicker, simply for a fun project to do.")
}

let counter = 0;

function add1() {
	counter++;
	const visual = `You clicked the button ${counter} times.`
	document.getElementById("visual").innerHTML = visual
}
	