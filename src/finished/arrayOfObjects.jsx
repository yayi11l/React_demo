import React, {useState} from 'react'; 

function ArrayObjects() {

  const [ cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = {year: carYear,
                    make: carMake,
                    model: carModel}
    setCars(c => [...c, newCar])

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function handleRemoveCar(index) {
    setCars(c => c.filter((_, i) => i !== index));
  }

  function hanadleYearChange(event) {
    setCarYear(event.target.value);
  }

  function hanadleMakeChange(event) {
    setCarMake(event.target.value);
    
  }

  function hanadleModelChange(event) {
    setCarModel(event.target.value);
    
  }

  return(<div>
    <h2>list of car objects</h2>
    <ul>
      {cars.map((car, index) => 
      // function in onClick with params should be wraped with arrow function 
      <li key={index} onClick={() => handleRemoveCar(index)}>
        {car.year} {car.make} {car.model}
      </li>
      )}
    </ul>
    <input type="number" value={carYear} onChange={hanadleYearChange}/><br />
    <input type="text" value={carMake} onChange={hanadleMakeChange} placeholder='Enter car make'/><br />
    <input type="text" value={carModel} onChange={hanadleModelChange} placeholder='Enter car model'/><br />
    <button onClick={handleAddCar}>Add car</button>
  </div>)
}


export default ArrayObjects;