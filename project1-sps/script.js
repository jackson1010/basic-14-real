var main = function (input) {
  var result = objectSPS(rollDice());
  if (
    (input.toLowerCase() === "scissors" && result === "paper") ||
    (input.toLowerCase() === "stone" && result === "scissors") ||
    (input.toLowerCase() === "paper" && result === "stone")
  ) {
    return `You win! The computer chose ${result}. You chose ${input}`;
  }
  if (
    (input.toLowerCase() === "scissors" && result === "stone") ||
    (input.toLowerCase() === "stone" && result === "paper") ||
    (input.toLowerCase() === "paper" && result === "scissors")
  ) {
    return `You lose! The computer chose ${result}. You chose ${input}`;
  }
  return `Draw! The computer chose ${result}. You chose ${input}`;
};

var rollDice = function () {
  return Math.floor(Math.random() * 3);
};

var objectSPS = function (input) {
  if (input == 0) {
    return "scissors";
  }
  if (input == 1) {
    return "paper";
  }
  return "stone";
};
