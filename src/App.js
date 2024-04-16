import logo from './logo.svg';
import './App.css';
import BmiCalculator from './projects/bmi calculator/BmiCalculator';
import {Routes, Route} from 'react-router-dom'
import Home from './Home';
import TodoApp from './projects/todo/TodoApp';
import ShowPasswordIcon from './projects/show_password_icon/ShowPasswordIcon';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<BmiCalculator />} />   
        <Route path="/bmicalculator" element={<BmiCalculator />} />        
        <Route path="/todo/*" element={<TodoApp />} />
        <Route path="/show_password_icon" element={<ShowPasswordIcon />} />

      
      </Routes>
   
    </div>
  );
}

export default App;
