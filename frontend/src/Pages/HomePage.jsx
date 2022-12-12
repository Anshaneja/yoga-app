import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [batch, setBatch] = useState();
    const [errmsg, setErrMsg] = useState("");

    const navigate = useNavigate();

    const submitButtonHandler = (e)=>{
        e.preventDefault();
        if( name && age && gender && phone && email && batch){
            setErrMsg("");
            // navigate("/payment");
            axios.post('http://localhost:5000/member/new', {
                name : name,
                age: age,
                gender: gender,
                phone : phone,
                email : email,
                batch: batch
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
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
                <h2 className="text-xl font-semibold"> Personal Details </h2>
                <input className="input-field" name="name" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value) } />
                <input className="input-field" name="age" placeholder="Age" value={age} onChange={(e)=> setAge(e.target.value) } />
                <select className="input-field" name="gender" value={gender} onChange={(e)=> setGender(e.target.value) }>
                    <option value="" selected disabled>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <input className="input-field" name="phone" placeholder="phone" value={phone} onChange={(e)=> setPhone(e.target.value) }/>
                <input className="input-field" name="email" placeholder="Email id" value={email} onChange={(e)=> setEmail(e.target.value) }/>
                <select className="input-field" name="batch" value={batch} onChange={(e)=> setBatch(e.target.value) }>
                    <option value="" selected disabled>Batch</option>
                    <option value="6am">6am - 7am</option>
                    <option value="7am">7am - 8am</option>
                    <option value="8am">8am - 9am</option>
                    <option value="5pm">5pm - 6pm</option>
                </select>
                <button onClick={submitButtonHandler} className="bg-green-500 rounded px-4 py-2">Next</button>
                <span className="text-red-500">{errmsg}</span>
            </form>
        </div>
    )
}
export default HomePage;