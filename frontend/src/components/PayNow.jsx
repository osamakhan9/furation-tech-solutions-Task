import React, { useState } from 'react'
import './paymentcss/style.css'

const PayNow = () => {
    const [name,setName]=useState("")
    const [cardNum,setNumber]=useState("")
    const [cvv,setCcv]=useState("")
const handleSubmit=(e)=>{
    e.preventDefault()
    alert("Payment is Done")
    window.location.href = '/'
}

  return (
    <div id='pay'>
     <h1 className='seatA'>Fill Payment Details</h1>
    <form onSubmit={handleSubmit} className='paymentform' >
      <label className='pl'>
        Number on Card:
        <input className='pi' type="password" value={cardNum} placeholder='Enter Card Number' onChange={(e)=>{setNumber(e.target.value)}} />
      </label>
      <label className='pl'>
        Name of Card CardHolder:
        <input className='pi' type="Text" value={name} placeholder='Enter Card Holder Name' onChange={(e)=>{setName(e.target.value)}} />
      </label >
      <label className='pl'>
        cvv:
        <input className='pi' type="password" value={cvv} placeholder='CVV' onChange={(e)=>{setCcv(e.target.value)}} />
      </label>
      <button id='btnpay' type="submit">Pay</button>
      
    </form>
   
    </div>
  )
}

export default PayNow
