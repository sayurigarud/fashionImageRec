import React, { useState } from "react";
// import "./Calendar.css";

const Calendar = () => {
  // Get the current month and year
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Helper functions to calculate dates
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  // Change the month
  const handlePrevMonth = () => {
    const prevMonth = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
    setCurrentDate(new Date(prevMonth));
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
    setCurrentDate(new Date(nextMonth));
  };

  const renderDays = () => {
    const days = [];
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const totalDays = getDaysInMonth(month, year);
    const firstDayOfMonth = getFirstDayOfMonth(month, year);

    // Add empty boxes for days of the previous month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div className="calendar-day empty" key={`empty-${i}`}></div>);
    }

    // Add boxes for each day in the current month
    for (let i = 1; i <= totalDays; i++) {
      days.push(
        <div className="calendar-day" key={i}>
          <span>{i}</span>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar-wrapper">
      <div className ="calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <h2>
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </h2>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="calendar-grid">
        <div className="calendar-day-header">Sun</div>
        <div className="calendar-day-header">Mon</div>
        <div className="calendar-day-header">Tue</div>
        <div className="calendar-day-header">Wed</div>
        <div className="calendar-day-header">Thu</div>
        <div className="calendar-day-header">Fri</div>
        <div className="calendar-day-header">Sat</div>
        {renderDays()}
      </div>
    </div>
    </div>
    
  );
};

export default Calendar;
