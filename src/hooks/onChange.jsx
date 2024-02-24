// onChange = an event handler used primarily with form elements
//           <input>, <textarea>, <select>, <radio>
//           Triggers a function every time the value of the input changes

import React, {useState} from 'react';

function MyChange() {
  
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("")

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value)
  }

  function handleCommentChange(event) {
    setComment(event.target.value)
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value)
  }

  function handleShippingChange(event) {
    setShipping(event.target.value)
  }

  return(
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input value={quantity} onChange={handleQuantityChange} type='number'/>
      <p>Quantity: {quantity}</p>

      <textarea value={comment} onChange={handleCommentChange}
      placeholder="Enter delivery instructions" />
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="GiftCard">GiftCard</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        <input type="radio" value="Pick up" 
                checked={shipping === "Pick up"}
                onChange={handleShippingChange}/>
        Pick up
      </label><br />
      <label>
        <input type="radio" value="Dilivery" 
                checked={shipping === "Dilivery"}
                onChange={handleShippingChange}/>
        Dilivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default MyChange;