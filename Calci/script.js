function calculator(operation) {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;

  let result;

  if (number1 !== "" && number2 !== "") {
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    if (operation === 'add') {
      result = number1 + number2;
    } else if (operation === 'sub') {
      result = number1 - number2;
    } else if (operation === 'div') {
      result = number1 / number2;
    } else if (operation === 'mul') {
      result = number1 * number2;
    }
  } else {
    result = "Please enter both numbers.";
  }

  document.getElementById("output").innerText = result;
}
