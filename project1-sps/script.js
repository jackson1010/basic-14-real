var main = function (input) {
  var result = objectSPS(rollDice());
  var defaultMsg = msg(input, result);
  if (
    input.toLowerCase() !== "scissors" &&
    input.toLowerCase() !== "paper" &&
    input.toLowerCase() !== "stone" &&
    input.toLowerCase() !== "reversed scissors" &&
    input.toLowerCase() !== "reversed paper" &&
    input.toLowerCase() !== "reversed stone"
  ) {
    return 'Please input 1 of "scissors", "paper", or "stone" to play the game.';
  }
  if (
    (input.toLowerCase() === "scissors" && result === "paper") ||
    (input.toLowerCase() === "stone" && result === "scissors") ||
    (input.toLowerCase() === "paper" && result === "stone") ||
    (input.toLowerCase() === "reversed scissors" && result === "stone") ||
    (input.toLowerCase() === "reversed stone" && result === "paper") ||
    (input.toLowerCase() === "reversed paper" && result === "scissors")
  ) {
    return (
      defaultMsg +
      "<br><br>" +
      `You Win!` +
      "<br><br>" +
      'Now you can type "scissors" "paper" or "stone" to play another round!'
    );
  }
  if (
    (input.toLowerCase() === "scissors" && result === "stone") ||
    (input.toLowerCase() === "stone" && result === "paper") ||
    (input.toLowerCase() === "paper" && result === "scissors") ||
    (input.toLowerCase() === "reversed scissors" && result === "paper") ||
    (input.toLowerCase() === "reversed stone" && result === "scissors") ||
    (input.toLowerCase() === "reversed paper" && result === "stone")
  ) {
    return (
      defaultMsg +
      "<br><br>" +
      "You Lose!" +
      "<br><br>" +
      'Now you can type "scissors" "paper" or "stone" to play another round!'
    );
  }
  return (
    defaultMsg +
    "<br><br>" +
    "Draw!" +
    "<br><br>" +
    'Now you can type "scissors" "paper" or "stone" to play another round!'
  );
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

var generatedIcon = function (generated) {
  if (generated === "scissors") return " ✂️";
  if (generated === "paper") return " 🗒";
  if (generated === "stone") return " 🪨";
};

var inputIcon = function (input) {
  if (input === "scissors" || input === "reversed scissors") return " ✂️";
  if (input === "paper" || input === "reversed paper") return " 🗒";
  if (input === "stone" || input === "reversed stone") return " 🪨";
};

var msg = function (input, result) {
  var gIcon = generatedIcon(result);
  var uIcon = inputIcon(input);
  return (
    `The computer chose ` +
    result +
    gIcon +
    "<br><br>" +
    `You chose ` +
    input +
    uIcon
  );
};
