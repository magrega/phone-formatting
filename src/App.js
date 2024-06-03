import { useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState("");

  const handleInputChange = e => setText(formatPhoneNumber(e.target.value));

  const formatPhoneNumber = (phoneNumber) => {
    const onlyNumbers = (phoneNumber).replace(/\D/g, "");
    const matches = onlyNumbers.match(/^(\d{0,3})?(\d{0,3})?(\d{0,4})?/);
    const formatedPhoneNumber = [matches[1] ? "(" : "",
    matches[1],
    matches[2] ? ") " : "",
    matches[2],
    matches[3] ? "-" : "",
    matches[3]].join("");

    return formatedPhoneNumber;
  }

  return (
    <div className="App">
      <h1>Phone number formatting</h1>
      <span>Enter phone number: </span><input type='text' placeholder='(XXX)XXX-XXXX' onChange={handleInputChange} value={text} />
    </div>
  );
}

export default App;
