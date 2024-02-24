// usecontext(): react hook allows you to share values between multiple levels 
//               of components whithour passisng props through each level.

import React, {useContext} from 'react';
import { UserContext } from './CompA';

function CompD() {
  const user = useContext(UserContext);

  return(
    <div className='box'>
      <h1>CompD</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  )
}

export default CompD;