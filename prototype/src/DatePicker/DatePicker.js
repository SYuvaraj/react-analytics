import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
const DatePickerComp = () =>  {
    
    const [startDate, setStartDate] = useState(new Date());
    console.log('startDate',startDate)
    const handleChange = (date) => {
        setStartDate(date);
    };

    return (
      <DatePicker
      dateFormat="dd/MM/yyyy"
        selected={startDate}
        onChange={handleChange}
 
      />
    );
}

export default DatePickerComp;