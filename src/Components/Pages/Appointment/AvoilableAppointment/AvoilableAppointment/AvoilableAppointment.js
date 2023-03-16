import React from "react";
import { format } from "date-fns";

const AvoilableAppointment = ({ selectedDate }) => {
  console.log(selectedDate);
  return (
    <div className="mt-12">
      <p className="text-center text-primary font-bold">
        Available Appointment On {format(selectedDate, "PP")}
      </p>
    </div>
  );
};

export default AvoilableAppointment;
