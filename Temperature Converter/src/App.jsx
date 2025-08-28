import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [selectedFromUnit, setSelectedFromUnit] = useState("Fahrenheit");
  const handleFromUnitChange = (e) => {
    setSelectedFromUnit(e.target.value);
  }

  const [selectedToUnit, setSelectedToUnit] = useState("Fahrenheit");
  const handleToUnitChange = (e) => {
    setSelectedToUnit(e.target.value);
  }

const [temp, setTemp] = useState(null);
const handleTempChange = (e) => {
  setTemp(e.target.value);
}

const [convertedTemp, setConvertedTemp] = useState(null);
const [returnMessage, setReturnMessage] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  let result;
  if (selectedFromUnit === "Fahrenheit") {
    if (selectedToUnit === "Celsius") {
      result = (temp - 32) * 5/9;
    }
    else if (selectedToUnit === "Kelvin") {
      result = (temp - 32) * 5/9 + 273.15;
    }
    else {
      result = (temp);
    }
  }
  else if (selectedFromUnit === "Celsius") {
    if (selectedToUnit === "Fahrenheit") {
      result = (temp * 9/5) + 32;
    }
    else if (selectedToUnit === "Kelvin") {
      result = (temp + 273.15);
    }
    else {
      result = (temp);
    }
  }
  else if (selectedFromUnit === "Kelvin") {
    if (selectedToUnit === "Fahrenheit") {
      result = (temp - 273.15) * 9/5 + 32;
    }
    else if (selectedToUnit === "Celsius") {
      result = (temp - 273.15);
    }
    else {
      result = (temp);
    }
  }
  setConvertedTemp(result.toFixed(2));
  setReturnMessage(`${temp} ${selectedFromUnit} is ${result.toFixed(2)} ${selectedToUnit}`);
}

  return (
    <>
      <div>
        <h2>Temperature Converter</h2>
        <h3>Enter the temperature, select units and submit</h3>
      </div>
      <div>
        <img src="https://media.istockphoto.com/id/1308422040/vector/thermometer-icon-measurement-instrument.jpg?s=612x612&w=0&k=20&c=5ypTJEWrD97_geiI94XwqqmhP-fMisUhbFyD9j_Xirc=" alt="Thermometer Icon" width="200" height="200"/>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="temperature"
            placeholder="0.00"
            onChange={handleTempChange}
          />
          <select name="Units" placeholder="From Unit" onChange={handleFromUnitChange}>
            <option value="" disabled>From Unit</option>
            <option value="Fahrenheit">Fahrenheit</option>
            <option value="Celsius">Celsius</option>
            <option value="Kelvin">Kelvin</option>
          </select>
          <select name="Units" placeholder="To Unit" onChange={handleToUnitChange}>
            <option value="Fahrenheit">Fahrenheit</option>
            <option value="Celsius">Celsius</option>
            <option value="Kelvin">Kelvin</option>
          </select>
          <button type="submit">Convert</button>
          {returnMessage && <h3>{returnMessage}</h3>}
        </form>
      </div>
    </>
  )
}

export default App
