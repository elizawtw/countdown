import "./App.css";
import React from "react";
import { useState } from "react";
import CountdownTimer from "./components/CountdownTimer";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const App = () => {
  const [startDate, setStartDate] = useState(new Date().getTime());
  

  const desireDate = new Date(startDate).getTime();

  return (
    <div className="app-container">
      <div className="app-date-container">
        <h1>Pick a date:</h1>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          dateFormat="Pp"
        />
        <h1>Only</h1>
      </div>

      <CountdownTimer targetDate={desireDate} />
     
    </div>
  );
};

export default App;
