// usecontext(): react hook allows you to share values between multiple levels 
//               of components whithour passisng props through each level.

import CompC from "./CompC";

function CompB() {
  return(
    <div className='box'>
      <h1>CompB</h1>
      <CompC /> 
    </div>
  )
}

export default CompB;