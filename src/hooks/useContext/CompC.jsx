// usecontext(): react hook allows you to share values between multiple levels 
//               of components whithour passisng props through each level.

import CompD from "./CompD";
import React, {useContext} from 'react';
import { UserContext } from './CompA';


function CompC() {
  const user = useContext(UserContext);
  return(
    <div className='box'>
      <h1>CompC</h1>
      <h2>{`Hello again ${user}`}</h2>
      <CompD />
    </div>
  )
}

export default CompC;