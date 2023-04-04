import React from 'react';
import './app.css';
import { useState } from 'react';

export default function App() {
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    const inputAge = e.target.age.value;
    if (inputAge >= 18) {
      setAge(`you are ${inputAge} , the right age `);
    } else if (inputAge == '') {
      setAge('you did not input anything , please try again');
    } else {
      setAge(
        `<span style = "color:red" > you are just ${inputAge}, you are underage!</span> `
      );
    }
    e.preventDefault();
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Join our club now</h1>
          <label>Age: </label>
          <input type="text" className="age-input" name="age" />

          <input type="submit" className="submit-btn" value="check" />
        </form>
      </div>
      <h2 dangerouslySetInnerHTML={{ __html: age }}></h2>
    </div>
  );
}
