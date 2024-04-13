function domath() {
    let y = 2;
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("It worked! My time machine worked!");
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}