// React hook: special functions that allows functional components to use
//             React features without writing class components.
//             (useState, useEffect, useContext, useRender, useCallback,...) 
// useState(): allows the creation of a stateful variable and a setter function to update its value in virtual DOM.
// [name, setName]

import React, {useState} from 'react';

function MyComponent() {
  
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);

  const updateName = () => {
    setName("spongebob");
  }

  const incrementAge = () => {
    setAge(age + 1);
  }
  return (<div>
    <p>name: {name}</p>
    <button onClick={updateName}>Set Name</button>

    <p>age: {age}</p>
    <button onClick={incrementAge}>Increment Age</button>
  </div>);
 }

export default MyComponent;
