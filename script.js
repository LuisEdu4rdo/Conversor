let celsius = document.getElementById("celsius");
let resultado = document.getElementById("resultado");
let temp_select = document.getElementById("temp_select");

function calcular() {
  if (temp_select.value == "fahrenheit") {
    var calc = (celsius.value * 9 / 5) + 32;
    resultado.innerHTML = `${celsius.value}°C é igual a ${calc}° F`;
  }
  else {
    if (celsius.value == "") {
      resultado.innerHTML = `${celsius.value}°C é igual a 273,15° K`;
    }
    else {
      var calc = (parseInt(celsius.value) + parseFloat(273.15));
      resultado.innerHTML = `${celsius.value}°C é igual a ${calc}° K`;
    }
  }
}