import { useState } from "react";
import "./app.css";
function App() {
  const [age, setAge] = useState("");

  const handleSubmit = e => {
    const inputAge = e.target.age.value;
    if (inputAge >= 18) {
      setAge(`you are ${inputAge} , the right age `);
    } else if (inputAge === "") {
      setAge("you did not input anything , please try again");
    } else {
      setAge(`you are just ${inputAge}, you are underage!`);
    }
    e.preventDefault();
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>
            Join our club now <i class="fa-solid fa-shop-lock fa-bounce"></i>
          </h1>

          <label>Age: </label>
          <input type="text" name="age" />

          <button type="submit" className="submit-btn">
            check
          </button>

          <h2>{age}</h2>
        </form>
      </div>
    </div>
  );
}

export default App;
