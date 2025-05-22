function play(pc) {
  var c = ["stone","paper","scissors"];
  var com = c[Math.floor(Math.random() * c.length)];
  var res;

  if (pc === com) {
    res = "Tie!";
  } else if (
    (pc==="stone"&&com==="scissors") ||
    (pc==="paper"&&com==="stone") ||
    (pc==="scissors"&&com==="paper")
  ) {
    res = "You won";
  } else {
    res = "You lose";
  }

  document.getElementById("res").innerText =
    "Your choice "+pc+", computer choice "+com+". "+res;
}
