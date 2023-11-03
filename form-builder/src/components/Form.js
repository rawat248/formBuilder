import React, { useState } from "react";
import Category from "./Category";
import Cloze from "./Cloze";
import Comprehension from "./Comprehension";
import Preview from "./Preview";

const Form = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const addCategory = () => {
    setSelectedComponent("category");
  };
  const showClozeComponent = () => {
    setSelectedComponent("cloze");
  };

  const showComprehensionComponent = () => {
    setSelectedComponent("comprehension");
  };

  const showPreviewComponent = () => {
    setSelectedComponent("preview");
  };
  return (
    <div>
      <div className="bg-black h-10 text-white w-full">
        <h3>Login</h3>
      </div>
      <div className="flex ">
        <div className="bg-[#f5f5f5]  flex-col h-screen  w-1/5">
          <div className="m-10 auto 10 auto">
            <button
              className="btn btn-primary min-w-full"
              onClick={addCategory}
            >
              Categorize
            </button>
          </div>
          <div className="m-10 auto 10 auto">
            <button
              className="btn btn-primary min-w-full"
              onClick={showClozeComponent}
            >
              Cloze
            </button>
          </div>
          <div className="m-10 auto 10 auto">
            <button
              className="btn btn-primary min-w-full"
              onClick={showComprehensionComponent}
            >
              Comprehension
            </button>
          </div>
          <div className="m-10 auto 10 auto">
            <button
              className="btn btn-primary min-w-full"
              onClick={showPreviewComponent}
            >
              Preview
            </button>
          </div>
        </div>
        <div className="flex-row w-4/5 bg-gray-300 h-screen">
          {selectedComponent === "category" && <Category />}

          {selectedComponent === "cloze" && <Cloze />}
          {selectedComponent === "comprehension" && <Comprehension />}
          {selectedComponent === "preview" && <Preview />}
        </div>
      </div>
    </div>
  );
};

export default Form;
