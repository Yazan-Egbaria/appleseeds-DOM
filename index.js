const input = document.getElementById("temperature");
const toCelBtn = document.getElementById("toCelsius");
const toFahBtn = document.getElementById("toFahrenheit");
const output = document.getElementById("output");

toCelBtn.addEventListener("click", () => {
  let f = parseFloat(input.value);
  let celValue = (((f - 32) * 5) / 9).toFixed(1);
  output.innerHTML = `${input.value} Fahrenheit is: ${celValue} Celsius`;
});

toFahBtn.addEventListener("click", () => {
  let c = parseFloat(input.value);
  let fahValue = (c * (9 / 5) + 32).toFixed(1);
  output.innerHTML = `${input.value} Celsius is: ${fahValue} Fahrenheit`;
});
