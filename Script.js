function convertTemperature() {
    let inputValue = parseFloat(document.getElementById('inputValue').value);
    let inputUnit = document.getElementById('inputUnit').value;
    let outputUnit = document.getElementById('outputUnit').value;
    let outputValue;

    if (isNaN(inputValue)) {
        document.getElementById('outputValue').innerText = "Please enter a valid number";
        return;
    }

    // Convert input value to Celsius first
    if (inputUnit === "Celsius") {
        outputValue = inputValue;
    } else if (inputUnit === "Fahrenheit") {
        outputValue = (inputValue - 32) * 5 / 9;
    } else if (inputUnit === "Kelvin") {
        outputValue = inputValue - 273.15;
    }

    // Convert from Celsius to the desired output unit
    if (outputUnit === "Celsius") {
        outputValue = outputValue;
    } else if (outputUnit === "Fahrenheit") {
        outputValue = (outputValue * 9 / 5) + 32;
    } else if (outputUnit === "Kelvin") {
        outputValue = outputValue + 273.15;
    }

    document.getElementById('outputValue').innerText = `Result: ${outputValue.toFixed(2)} ${outputUnit}`;
}

function reset() {
    location.reload();
}