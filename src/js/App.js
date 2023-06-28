
import '../css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../js/home.js';
import Career from '../js/career.js';
import ExpenseList from './expense_list';

function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/career' element={<Career></Career>}></Route>
        <Route path='/expense_list' element={<ExpenseList></ExpenseList>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

