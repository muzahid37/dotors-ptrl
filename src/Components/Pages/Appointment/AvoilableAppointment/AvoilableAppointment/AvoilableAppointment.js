import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AvoilableOption from "./AboilableOption";
import BookingModal from "./BookingModal";

const AvoilableAppointment = ({ selectedDate, _id }) => {
  const [AvoilableSlots, setAvoilableSlots] = useState([]);
  const [treatment, setTreatement] = useState([null]);
  useEffect(() => {
    fetch("AvoilableSlot.json")
      .then((res) => res.json())
      .then((data) => setAvoilableSlots(data));
  }, []);
  // console.log(AvoilableSlots);
  //   console.log(selectedDate);
  return (
    <div className="mt-12">
      <p className="text-center text-primary font-bold">
        Available Appointment On {format(selectedDate, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {AvoilableSlots.map((option) => (
          <AvoilableOption
            key={_id}
            option={option}
            setTreatement={setTreatement}
          ></AvoilableOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvoilableAppointment;
