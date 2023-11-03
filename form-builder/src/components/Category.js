import React, { useState } from "react";
import { addCategory } from "../api/api";

const Category = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      ques:[""],
      categories: [""],
      items: [""],
    },
  ]);
  const [showCategory, setShowCategory] = useState(true);
  

  const addQuestion = () => {
    const newQuestions = [...questions];
    const newQuestion = {
      id: questions.length + 1,
      categories: [""],
      items: [""],
    };
    newQuestions.push(newQuestion);
    setQuestions(newQuestions);
  };

  const handleQuesChange = (questionIndex, index, value) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].ques[index] = value;
    setQuestions(newQuestions);
  
  }
 
  const handleCategoryChange = (questionIndex, index, value) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].categories[index] = value;

    if (index === newQuestions[questionIndex].categories.length - 1 && value !== "") {
      newQuestions[questionIndex].categories.push("");
    }

    setQuestions(newQuestions);
  };

  const handleItemChange = (questionIndex, index, value) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].items[index] = value;

    if (index === newQuestions[questionIndex].items.length - 1 && value !== "") {
      newQuestions[questionIndex].items.push("");
      handleCategoryChange(questionIndex, newQuestions[questionIndex].categories.length, "");
    }

    setQuestions(newQuestions);
  };

  const addCategoryDetails = async() => {
    await addCategory(questions);
    

}

  return (
    <div>
       
      {questions.map((question, questionIndex) => (
        showCategory && (
          <div
            key={question.id}
            className="ml-20 mt-10 border-4 border-solid border-teal-400 w-3/4 h-3/5 bg-slate-100"
          >
            <h1>Question {questionIndex + 1}</h1>
            <div>
              {question.ques.map((ques,index)=>(
                 <input
                 key={index}
                 type="text"
                 placeholder={`Question Text ${index + 1}`}
                 value={ques}
                 onChange={(e) => handleQuesChange(questionIndex, index, e.target.value)}
                 className="block mb-4"
               />
              ))}
            </div>
            <div>
              <h4>Categories</h4>
              {question.categories.map((category, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={`Category ${index + 1}`}
                  value={category}
                  onChange={(e) => handleCategoryChange(questionIndex, index, e.target.value)}
                  className="block mb-4"
                />
              ))}
            </div>
            <div className="flex">
              <div>
                <h3>Item</h3>
                {question.items.map((item, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      placeholder={`Item ${index + 1}`}
                      value={item}
                      onChange={(e) => handleItemChange(questionIndex, index, e.target.value)}
                      className="mb-4"
                    />
                    <label htmlFor={`item-category-${index}`}>Belongs to:</label>
                    <select
                      id={`item-category-${index}`}
                      name={`item-category-${index}`}
                    >
                      <option>Choose category</option>
                      {question.categories.map((label, categoryIndex) => (
                        <option key={categoryIndex} value={label}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      ))}
      <div className="w-3/4 h-24 ml-64 mt-4 ">
        <button onClick={addQuestion}>
          {showCategory ? "Add Question" : "Cancel"}
        </button>
        <button className="ml-4" onClick={()=>addCategoryDetails()}>
            Save
        </button>
        {showCategory}
      </div>

      
    </div>
  );
};

export default Category;

