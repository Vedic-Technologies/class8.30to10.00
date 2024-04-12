import logo from './logo.svg';
import './App.css';
import BmiCalculator from './projects/bmi calculator/BmiCalculator';
import {Routes, Route} from 'react-router-dom'
import Home from './Home';
import TodoApp from './projects/todo/TodoApp';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmicalculator" element={<BmiCalculator />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/todo" element={<TodoApp />} />
      </Routes>
   
    </div>
  );
}

export default App;
