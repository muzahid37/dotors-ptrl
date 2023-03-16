import React, { useState } from "react";
import chair from "../../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row">
        <img src={chair} className=" lg:w-1/2 rounded-lg " />
        <div>
          {/* calander */}
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          ></DayPicker>
          <p> You have selected date:{format(selectedDate, "PP")}</p>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
