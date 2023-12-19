function RandomNumber() {
    let randomNumber;
    const randomNumberVisual = `Your random number is ${randomNumber}`;
    randomNumber = Math.random();
    document.getElementById("output").innerHTML = randomNumberVisual;
}