import React, {useState} from 'react'; 

function ArrayState() {

  const [foods, setFoods] = useState(["apple", "orange", "banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods(f => [...f, newFood]);
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index)); // _: parameters being passed to the function is ignored
    
  }

  return(
    <div>
      <h2>List of food</h2>
      <ul>
        {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
      </ul>
      <input type="text" id='foodInput' placeholder='Enter food name' />
      <button onClick={handleAddFood}>Add food</button>
    </div>
  );
}

export default ArrayState;