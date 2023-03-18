function buttonClick(value) {
    var input = document.getElementById("input");
  
    if (value === "=") {
      input.value = eval(input.value);
    } else if (value === "C") {
      input.value = "";
    } else {
      input.value += value;
    }
  }