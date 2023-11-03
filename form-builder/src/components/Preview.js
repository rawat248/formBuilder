import React, { useState, useEffect } from "react";
import { getCategory } from "../api/api";
import "./Preview.css";

const Preview = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    try {
      const response = await getCategory();
      setUsers(response.data);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
   // Inside your Preview component
<div className="w-5/6">
  {users.map((user, index) => (
    <div key={user._id}>
      <h3>{`Question ${index + 1}`}</h3>
      {user.questions.map((question, qIndex) => (
        <div key={qIndex}>
          <h3>{question.ques}</h3>
          <div className="flex ml-4 ">
            {question.items.map((item, iIndex) => (
              <div key={iIndex}>
                <div className="mr-4 w-24 h-10 border-4 boder-solid border-black">{item}</div>
              </div>
            ))}
          </div>
          <div className="flex ml-4 mt-5">
            {question.categories.map((category, cIndex) => (
              <div key={cIndex}>
                <div className=" mr-4  w-24 h-10 border-4 boder-solid border-black">{category}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ))}
</div>

  );
};

export default Preview;
