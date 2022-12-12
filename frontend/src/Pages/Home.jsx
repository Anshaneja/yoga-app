import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home(props) {
    const navigate = useNavigate();
    const newUserButtonHandler = (e) => {
        e.preventDefault();
        navigate("/new");
    }
    const existingUserButtonHandler = (e) => {
        e.preventDefault();
        navigate("/existing");
    }
    return (
        <div className="parent h-screen w-full flex flex-col gap-3 items-center justify-center">
            <h1 className="text-3xl text-center"> Yoga Admission Form</h1>
            <form className="p-12 w-[400px] bg-white bg-opacity-30 border-white border-2 flex flex-col gap-2 rounded text-base">
                <h2>Welcome to our Yoga app application form. </h2>
                You are a:
                <button onClick={newUserButtonHandler} className='border-white border-2 hover:bg-white'>New User</button>

                <button onClick={existingUserButtonHandler}  className="border-white border-2  hover:bg-white">Existing User</button>
            </form>
        </div>
    );
}

export default Home;