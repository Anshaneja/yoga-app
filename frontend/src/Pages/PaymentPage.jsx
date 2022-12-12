import axios from "axios";
import React from "react";
import { useState } from "react";

const PaymentPage = () => {

    const submitButtonHandler = (e)=>{
        e.preventDefault();
        
    }
    const [CardName, setCardName] = useState();
    const [cardNumber, setCardNumber] = useState();
    const [expiry, setExpiry] = useState();
    const [cvv, setCvv] = useState();
    const [errmsg, setErrMsg] = useState();

    


    return (
        <div className="parent h-screen w-full flex flex-col gap-3 items-center justify-center">
            <h1 className="text-3xl text-center"> Yoga Admission Form</h1>

            <form className="p-8 w-[400px] bg-gray-200 flex flex-col gap-2 rounded text-base">
            <h1 className="text-xl "> Payment Details</h1>
                <input className="input-field" name="name" placeholder="Card holder's Name" value={CardName} onChange={(e)=> setCardName(e.target.value) } />
                <input className="input-field" name="age" placeholder="Card Number" value={cardNumber} onChange={(e)=> setCardNumber(e.target.value) } />
                <div className="flex gap-2">
                    <input className=" w-1/2 input-field" name="expiry" placeholder="Expiry" value={expiry} onChange={(e)=> setExpiry(e.target.value) } />
                    <input className=" w-1/2 input-field" name="cvv" placeholder="CVV" value={cvv} onChange={(e)=> setCvv(e.target.value) } />
                </div>
                <span className="text-base">Amount : Rs. 500</span>
                <button onClick={submitButtonHandler} className="bg-green-500 rounded px-4 py-2">Proceed for Payment</button>
                
                <span className="text-red-500">{errmsg}</span>
            </form>
        </div>
    );
}
export default PaymentPage;