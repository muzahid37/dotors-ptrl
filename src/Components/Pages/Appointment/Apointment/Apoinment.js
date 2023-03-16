import React, { useState } from "react";
import AppoinmentBanner from "../AppointmentBanner/AppoinmentBanner";
import AvoilableAppointment from "../AvoilableAppointment/AvoilableAppointment/AvoilableAppointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  // console.log(selectedDate);
  return (
    <div>
      <AppoinmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppoinmentBanner>
      <AvoilableAppointment selectedDate={selectedDate}></AvoilableAppointment>
    </div>
  );
};

export default Appointment;
