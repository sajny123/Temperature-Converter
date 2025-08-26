import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [selectedFromUnit, setSelectedFromUnit] = useState(null);
  const handleFromUnitChange = (e) => {
    setSelectedFromUnit(e.target.value);
  }

  const [selectedToUnit, setSelectedToUnit] = useState(null);
  const handleToUnitChange = (e) => {
    setSelectedToUnit(e.target.value);
  }

const [temp, setTemp] = useState(null);
const handleTempChange = (e) => {
  setTemp(e.target.value);
}

const [convertedTemp, setConvertedTemp] = useState(null);
const handleSubmit = (e) => {
  e.preventDefault();
  if (selectedFromUnit === "Fahrenheit") {
    if (selectedToUnit === "Celsiu") {
      setConvertedTemp((temp - 32) * 5/9);
    }
    else if (selectedToUnit === "Kelvin") {
      setConvertedTemp((temp - 32) * 5/9 + 273.15);
    }
    else {
      setConvertedTemp(temp);
    }
  }
  else if (selectedFromUnit === "Celsius") {
    if (selectedToUnit === "Fahrenheit") {
      setConvertedTemp((temp * 9/5) + 32);
    }
    else if (selectedToUnit === "Kelvin") {
      setConvertedTemp(temp + 273.15);
    }
    else {
      setConvertedTemp(temp);
    }
  }
  else if (selectedFromUnit === "Kelvin") {
    if (selectedToUnit === "Fahrenheit") {
      setConvertedTemp((temp - 273.15) * 9/5 + 32);
    }
    else if (selectedToUnit === "Celsius") {
      setConvertedTemp(temp - 273.15);
    }
    else {
      setConvertedTemp(temp);
    }
  }

  useEffect(() => {
    setConvertedTemp(null);
  }, [selectedFromUnit, selectedToUnit, temp]);

}

  return (
    <>
      <div>
        <h2>Temperature Converter</h2>
        <h3>Enter the temperature, select units and submit</h3>
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
        </form>
      </div>
      <div>
        <h3>{temp} {selectedFromUnit} is {convertedTemp} {selectedToUnit}</h3>
      </div>
    </>
  )
}

export default App
