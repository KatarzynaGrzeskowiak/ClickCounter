
let squares = document.querySelectorAll(".square");
let resetbtn = document.getElementById("reset")

let clickedCount = { 'yellow': 0, 'blue': 0, 'green': 0 };

let counter = () => {

}

squares.forEach(square => {

  square.onclick = () => {
    clickedCount[square.value] += 1
    square.innerText = clickedCount[square.value]
  }
}
)

resetbtn.onclick = () => {
  squares.forEach(
    square => {
      clickedCount[square.value] = 0;
      square.innerText = " ";
    }
  )

}


console.log(squares);
console.log(resetbtn);