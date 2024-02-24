// useContext(): react hook allows you to share values between multiple levels 
//               of components whithour passisng props through each level.

// Prop drilling: (avoid it)
// <CompB user={user}/>
//
// function CompB(props) {
//   return(
//     <div className='box'>
//       <h1>CompB</h1>
//       <CompC user={props.user}/> 
//     </div>
//   )
// }
// 
// function CompD(props) {
//   return(
//     <div className='box'>
//       <h1>CompD</h1>
//       <h2>{`Bye ${props.user}`}</h2>
//     </div>
//   )
// }

// PROVIDER COMPONENT (A)
// 1. import { createContext } from "react";
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//    <Child />
//    </MyContext.Provider>

//CONSUMER PROVIDER (D)
// 1. import { useContext } from "react";
//    import { UserContext } from "./CompA"
// 2. const value = useContext(UserContext)

import { createContext, useState } from "react";
import CompB from "./CompB";

export const UserContext = createContext();

function CompA() {
  const [user, setUser] = useState("Aimee");

  return(
    <div className='box'>
      <h1>CompA</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <CompB />
      </UserContext.Provider>
    </div>
  )
}

export default CompA;