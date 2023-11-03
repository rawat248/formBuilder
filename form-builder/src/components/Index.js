import React, { useState } from "react";
import Cover_IMAGE from "../assets/p.jpg";
import { addUser } from "../api/api.js";
import { useNavigate } from "react-router-dom";

const defaultValue = {
  
  email: "",
  password: "",
};

const Index = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(defaultValue);
  const onValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const addUserDetails = async () => {
    await addUser(user);
    navigate("/add");
  };
  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full ">
        <div className="absolute top-[17%] left-[10%] flex flex-col">
          <h1 className="text-4xl text-white font-bold ">
          Turn your Ideas into reality
          </h1>
        </div>
       
        <img
          src={Cover_IMAGE}
          alt="coverImage"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20">
        <div className="w-full flex flex-col mb-2">
          <h1 className="text-2xl font-semibold mb-2">Login</h1>
          <p className="text-base mb-2">Please enter your details.</p>
        </div>

        <div className="w-full flex flex-col">
          <input
            type="email"
            placeholder="Email"
            className="w-full text-black py-4 my-4 bg-transparent border-b border-black outline-none focus:outline-none"
            onChange={(e) => onValueChange(e)}
            name="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full text-black py-4 my-4 bg-transparent border-b border-black outline-none focus:outline-none"
            onChange={(e) => onValueChange(e)}
            name="password"
          />
        </div>
        <button
          className="w-full bg-[#060606] text-white rounded-md p-4 font-semibold text-center items-center cursor-pointer"
          onClick={() => addUserDetails()}
        >
          Login
        </button>
      </div> 
    </div>
  );
};

export default Index;
