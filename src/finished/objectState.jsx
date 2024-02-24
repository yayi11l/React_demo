import React, {useState} from "react";

function objectState() {
  const [car, setCar] = useState[{year: 2024, make: "Ford", model: "Mustang"}];

  function handleYearChange(event) {
    // setCar({...car, year: event.target.value});
    setCar(c => ({...c, year: event.target.value})); //safe updates
  }

  function handleMakeChange(event) {
    setCar(c => ({...c, make: event.target.value})); //safe updates
  }

  function handleModelChange(event) {
    setCar(c => ({...c, model: event.target.value})); //safe updates
  }

  return(<div>
    <p>your favorite car is: {car.year} {car.make} {car.model} </p>
    <input type="number" value={car.year} onChange={handleYearChange}/><br />
    <input type="text" value={car.make} onChange={handleMakeChange}/><br />
    <input type="text" value={car.model} onChange={handleModelChange}/><br />
  </div>)
  
}

export default objectState;