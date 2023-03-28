import React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  const [age, setAge] = useState('');

  const handleAge = (e) => {
    setAge(e.target.value);
    
  };

  const handleSubmit = (e) => {
  const inputAge  = e.target.age.value
    if (inputAge >= 18) {
    
      setAge(`you are ${inputAge} , the right age ` )
    } else {
      setAge(`you are just ${inputAge}, you are underage!`)
    }
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit = {handleSubmit}>
        <div>
          <label>Age: </label>
          <input
            type="text"
            className="age-input"
            name="age"
          />
        </div>
        <input type="submit" className="submit-btn" value="check"  />
        <h2>{age}</h2>
        </form>
      </div>
    </div>
  );
}
