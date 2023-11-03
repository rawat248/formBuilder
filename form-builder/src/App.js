import React from 'react';
import Index from './components/Index';
import Form from './components/Form.js';
import Category from './components/Category';
import Cloze from './components/Cloze';
import Comprehension from './components/Comprehension';
import Editor from './components/Editor';
import Preview from './components/Preview';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/add" element={<Form/>}/>
        <Route path="/category" element={<Category/>}/> 
        <Route path="/cloze" element={<Cloze/>}/>
        <Route path="/comprehension" element={<Comprehension/>}/> 
        <Route path="/editor" element={<Editor/>}/> 
        <Route path="/preview" element={<Preview/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;