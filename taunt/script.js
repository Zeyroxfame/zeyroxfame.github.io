function taunt() {
  const audio = new Audio('taunt.mp3');
audio.play();
}
  
  const btn = document.querySelector("button");
  
  btn.addEventListener("click", taunt);