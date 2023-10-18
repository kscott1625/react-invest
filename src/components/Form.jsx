import React, { useState } from 'react';

const initialUserInput = {
    'current-savings': 1000,
    'yearly-contributions': 1200,
    'expected-return': 7,
    duration: 10
}

const Form = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);
  const submitHandler = (e) => {
    e.preventDefault();
    props.onCalc(userInput)
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
    console.log("clicked")
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value
      };
    });
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(e) =>
              inputChangeHandler('current-savings', e.target.value)
            }
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(e) =>
              inputChangeHandler('yearly-contributions', e.target.value)
            }
            value={userInput['yearly-contributions']}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(e) =>
              inputChangeHandler('expected-return', e.target.value)
            }
            value={userInput['expected-return']}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(e) => inputChangeHandler('duration', e.target.value)}
            value={userInput['duration']}

            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" onClick={resetHandler} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
