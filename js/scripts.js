
  var add = function(number1, number2) {
    return number1 + number2;
  };

  var subtract = function(number1, number2) {
    return number1 - number2;
  };

  var multiply = function(number1,number2) {
    return number1 * number2;
  };

  var divide = function(number1, number2) {
    return number1 / number2
  };
  // var exponent = function((number1, number2) {
  //   return (number1 * number1) * number2
  // };


$(document).ready(function() {
  console.log();
  $("button#add").click(function(event) {
  var number1 = parseInt($("#number_1").val());
  var number2 = parseInt($("#number_2").val());
  var resultAdd = add(number1, number2);
  $("#output").text(resultAdd);

  event.preventDefault();
  });

  $("button#subtract").click(function(event) {
  var number1 = parseInt($("#number_1").val());
  var number2 = parseInt($("#number_2").val());
  var resultSubtract = subtract(number1, number2)
  $("#output").text(resultSubtract);

  event.preventDefault();
  });

  $("button#multiply").click(function(event) {
  var number1 = parseInt($("#number_1").val());
  var number2 = parseInt($("#number_2").val());
  var resultMultiply = multiply(number1, number2);
  $("#output").text(resultMultiply);

  event.preventDefault();
  });

  $("button#divide").click(function(event) {
  var number1 = parseInt($("#number_1").val());
  var number2 = parseInt($("#number_2").val());
  var resultDivide = divide(number1, number2);
  $("#output").text(resultDivide);

  event.preventDefault();
  });
});
