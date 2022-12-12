import axios from 'axios';
import React, { useState } from 'react';

 const ExistingUser = () => {

    const [email, setEmail] = useState();
    const [batch, setBatch] = useState();
    const [cardName, setCardName] = useState();
    const [cardNumber, setCardNumber] = useState();
    const [expiry, setExpiry] = useState();
    const [cvv, setCvv] = useState();
    const [errmsg, setErrMsg] = useState();
    const [successMsg, setSuccessMsg] = useState();

    const submitButtonHandler = (e)=>{
        e.preventDefault();
        if( email && batch && cardNumber && cardName && expiry && cvv){
            setErrMsg("");
            // navigate("/payment");
            axios.post('https://yoga-api.vercel.app/member/payment', {
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
                setSuccessMsg("Payment is successfully Completed");
                console.log(response);
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
        <div className="parent h-screen w-full flex flex-col gap-3 items-center justify-center">
            <h1 className="text-3xl text-center"> Yoga Admission Form</h1>
            <form className="p-8 w-[400px] bg-gray-200 flex flex-col gap-2 rounded text-base">
                <h1 className="text-xl "> Payment Details</h1>
                <input className="input-field" name="email" placeholder="Email id" value={email} onChange={(e)=> setEmail(e.target.value) }/>
                <select className="input-field" name="batch" value={batch} onChange={(e)=> setBatch(e.target.value) }>
                    <option value="" selected disabled>Batch</option>
                    <option value="6am">6am - 7am</option>
                    <option value="7am">7am - 8am</option>
                    <option value="8am">8am - 9am</option>
                    <option value="5pm">5pm - 6pm</option>
                </select>
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
            </form>
        </div>
    );
}

export default ExistingUser;