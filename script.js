function validateInput() {
  let temperatureInput = document.getElementById('temperatureInput');
  temperatureInput.value = temperatureInput.value.replace(/[^0-9.]/g, '');
}

function convertTemperature() {
  let temperatureInput = document.getElementById('temperatureInput').value;
  let inputUnitSelector = document.getElementById('inputUnitSelector');
  let resultArea = document.getElementById('resultArea');

  if (temperatureInput === '') {
    resultArea.textContent = 'Please enter a temperature.';
    return;
  }

  let inputUnit = inputUnitSelector.options[inputUnitSelector.selectedIndex].value;

  let convertedCelsius = convertCelsius(parseFloat(temperatureInput), inputUnit);
  let convertedFahrenheit = convertFahrenheit(parseFloat(temperatureInput), inputUnit);
  let convertedKelvin = convertKelvin(parseFloat(temperatureInput), inputUnit);

  resultArea.innerHTML = '';

  if (inputUnit !== 'celsius') {
    resultArea.innerHTML += `<p>Celsius: ${convertedCelsius.toFixed(2)}</p>`;
  }

  if (inputUnit !== 'fahrenheit') {
    resultArea.innerHTML += `<p>Fahrenheit: ${convertedFahrenheit.toFixed(2)}</p>`;
  }

  if (inputUnit !== 'kelvin') {
    resultArea.innerHTML += `<p>Kelvin: ${convertedKelvin.toFixed(2)}</p>`;
  }
}


function convertCelsius(temperature, inputUnit) {
  switch (inputUnit) {
    case 'celsius':
      return temperature;
    case 'fahrenheit':
      return (temperature - 32) * (5 / 9);
    case 'kelvin':
      return temperature - 273.15;
    default:
      return NaN;
  }
}

function convertFahrenheit(temperature, inputUnit) {
  switch (inputUnit) {
    case 'celsius':
      return (temperature * 9 / 5) + 32;
    case 'fahrenheit':
      return temperature;
    case 'kelvin':
      return (temperature - 273.15) * 9 / 5 + 32;
    default:
      return NaN;
  }
}

function convertKelvin(temperature, inputUnit) {
  switch (inputUnit) {
    case 'celsius':
      return temperature + 273.15;
    case 'fahrenheit':
      return (temperature - 32) * 5 / 9 + 273.15;
    case 'kelvin':
      return temperature;
    default:
      return NaN;
  }
}
