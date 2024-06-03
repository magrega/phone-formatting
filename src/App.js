import { useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState("");
  
  const handleInputChange = (e) => {
    let formatInput = formatPhoneNumber(e.target.value)
    setText(String(formatInput));
  }

  const formatPhoneNumber = (number) => {
    let text = ("" + number).replace(/\D/g, "");
    let match = text.match(/^(\d{0,3})?(\d{0,3})?(\d{0,4})?/);
    const result = [match[1] ? "(" : "",
    match[1],
    match[2] ? ") " : "",
    match[2],
    match[3] ? "-" : "",
    match[3]].join("");

    return result;
  }

  return (
    <div className="App">
      <h1>Phone number formatting</h1>
      <span>Enter phone number: </span><input type='text' placeholder='(XXX)XXX-XXXX' onChange={handleInputChange} value={text} />
    </div>
  );
}

export default App;
