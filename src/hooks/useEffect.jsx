// useEffect(): react hook tells react do some code when:
                // this component rerenders
                // this component mounts(add a component to a dom)
                // the state of a value

// useEffect(function, [dependencies]) (side cide)

// useEffect(() => {})                runs after every rerender
// useEffect(() => {}, [])            runs only on mount
// useEffect(() => {}, [value])       runs on mount and when value changes

// uses
// 1. event listener
// 2. dom manipulation
// 3. subscription (real time updates)
// 4. fetching data from an api
// 5. clean up when a component unmount(remove a component to a dom)

import React, {useState, useEffect} from 'react'; 

function DoEffect() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
  //   document.title = `Count: ${count}`
  // }, []
    document.title = `Count: ${count} ${color}`;
    return () => {
      // some cleaup code
    }
  }, [count, color]// do code only when count change
  ) // empty [] dependencies: only run once


  function addCount(){
    setCount(c => c + 1);
  }

  function subtractCount(){
    setCount(c => c - 1);
  }

  function changeColor(){
    setColor(c => c === "green" ? "red" : "green");
  }

  // window.addEventListener("resize", handleResize);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event Listener Added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event Listener Removed");
    }
  }, [])

  useEffect(() => {
    document.title = `size: ${width} * ${height}`;
  }, [width, height])

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return(<div>
    <div>
      <p style={{color}}>count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <button onClick={changeColor}>Change color</button>
      </div>
      <div>
      <p>window width: {width}px</p>
      <p>window height: {height}px</p>
    </div>
    </div>
    
  );

}

export default DoEffect;
