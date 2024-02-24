// useState(): rerender the components when the state value changes
// useRef(): *Do no cause rerender* when the value changes.
//           Ues it When you want a component to "remember" some infmt, but 
//         you don't want that information to trigger new render.
//           It returns a ref object with a single current property initially
//         set to be the initial value you provided.

// 1. Accessing/ intercation with DOM elements
// 2. handling Focus, Animations and Transitions
// 3. Managing Timers and Intervals

import React, {useState, useEffect, useRef} from 'react';

function UseRef() {

  // let [number, setNumber] = useState(0);

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  // useRef do not cause rerender. =>  more efficient
  useEffect(() => {
    console.log("component rendered");
    // console.log(inputRef);
  });

  function handleClick1(){
    // setNumber(n => n + 1);
    // ref.current++;
    // console.log(ref.current);

    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick2(){

    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = "yellow";
  }

  function handleClick3(){

    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor = "yellow";
  }


  return (
    <div>
      <button onClick={handleClick1}>
        Click me 1!
      </button>
      <input ref={inputRef1} />

      <button onClick={handleClick2}>
        Click me 2!
      </button>
      <input ref={inputRef2} />

      <button onClick={handleClick3}>
        Click me 3!
      </button>
      <input ref={inputRef3} />
    </div>
  )
}

export default UseRef;