import axios from 'axios';
import React, { useState } from 'react';

 const PaymentComponent = ({name, age, gender, email, phone,batch}) => {

    
    const [cardName, setCardName] = useState();
    const [cardNumber, setCardNumber] = useState();
    const [expiry, setExpiry] = useState();
    const [cvv, setCvv] = useState();
    const [errmsg, setErrMsg] = useState();
    const [successMsg, setSuccessMsg] = useState();

    const submitButtonHandler = (e)=>{
        e.preventDefault();
        if( cardNumber && cardName && expiry && cvv){
            setErrMsg("");
            // navigate("/payment");
            axios.post('https://yoga-api.vercel.app/member/new', {
                name : name,
                age: age,
                gender: gender,
                phone : phone,
                email : email,
                batch: batch,
                paymentInfo : {
                    cardNumber : cardNumber,
                    cardName : cardName,
                    expiry : expiry,
                    cvv : cvv
                }
            })
            .then(function (response) {
                console.log(response);
                setSuccessMsg("Payment is successfully Completed");
            })
            .catch(function (err) {
                setErrMsg(err.response.data.error);
            });
        }
        else{
            setErrMsg("You are required to enter all the details");
        }
    }



    return (
        <>
            <h1 className="text-xl "> Payment Details</h1>
                <input className="input-field" name="name" placeholder="Card holder's Name" value={cardName} onChange={(e)=> setCardName(e.target.value) } />
                <input className="input-field" name="age" placeholder="Card Number" value={cardNumber} onChange={(e)=> setCardNumber(e.target.value) } />
                <div className="flex gap-2">
                    <input className=" w-1/2 input-field" name="expiry" placeholder="Expiry : MM/YY" value={expiry} onChange={(e)=> setExpiry(e.target.value) } />
                    <input className=" w-1/2 input-field" name="cvv" placeholder="CVV" value={cvv} onChange={(e)=> setCvv(e.target.value) } />
                </div>
                <span className="text-base">Amount : Rs. 500</span>
                <button onClick={submitButtonHandler} className="bg-green-500 rounded px-4 py-2">Proceed for Payment</button>
                
                <span className="text-red-500">{errmsg}</span>
                <span className="text-green-500">{successMsg}</span>
        </>
    );
}

export default PaymentComponent;