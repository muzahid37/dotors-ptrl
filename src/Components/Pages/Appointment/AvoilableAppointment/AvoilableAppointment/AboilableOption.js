import React from "react";

const AboilableOption = ({ option, setTreatement }) => {
  const { name, slots } = option;

  return (
    <div className="card lg:max-w-lg shadow-xl bg-base-100 mt-10">
      <div className="card-body ">
        <h2 className="card-title justify-center">{name}</h2>
        <p className="justify-center flex">
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500 justify-center">
              No slot avoilable
            </span>
          )}{" "}
        </p>
        <p className="flex justify-center">{slots.length} space avoilable</p>
        <div className="card-actions justify-center">
          <label
            for="booking-modal"
            disabled={slots.length === 0}
            onClick={() => setTreatement(option)}
            className="btn btn-primary"
          >
            {" "}
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AboilableOption;
