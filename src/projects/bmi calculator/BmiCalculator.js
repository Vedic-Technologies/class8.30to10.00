import React, { useState } from 'react'
import './bmicalculator.css'
const BmiCalculator = () => {
  
    const [weight, setWeight] = useState()
    const [height, setHeight] = useState()
    const [bmi, setBmi] = useState('')
    const [message, setMessage] = useState('')
   
    let calcBmi = (event) => {
    
      event.preventDefault()
   
      if (weight === 0 || height === 0) {
        alert('Please enter a valid weight and height')
      } else {
        let bmi = (weight / (height * height) * 703)
        setBmi(bmi.toFixed(1))
   
        // Logic for message
   
        if (bmi < 25) {
          setMessage('You are underweight')
        } else if (bmi >= 25 && bmi < 30) {
          setMessage('You are a healthy weight')
        } else {
          setMessage('You are overweight')
        }
      }
    }
   
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState({id:0,name:"select"});
  
    const options = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
      { id: 3, name: 'Option 3' },
    ];
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
    };
   
    let reload = () => {
      window.location.reload()
    }
   
    return (
      <div className="app">
        lkhkhkjhk
      {/* <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
   
          <div>
            <label>Weight (lbs)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} className='border-2 rounded-xl px-3 border-gray-400'/>
          </div>
   
          <div>
            <label>Height (in)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} className='border-2 rounded-xl px-3 border-gray-400' />
          </div>
   
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
        </form>
   
        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div> */}

      <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {selectedOption ? selectedOption.name : 'Select an option'}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option.id}
              className={`cursor-pointer py-2 px-4 ${
                selectedOption && selectedOption.id === option.id
                  ? 'bg-blue-100' // Apply different background color to the selected option
                  : 'hover:bg-gray-200' // Apply hover background color to other options
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>



    </div>
    );
  
}

export default BmiCalculator