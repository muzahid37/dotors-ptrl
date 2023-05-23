import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, selectedDate }) => {
  const { _id, name, slots } = treatment;

  const handlBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot);
  };
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="font-bold text-lg">{name}</h3>
          <form
            onSubmit={handlBooking}
            className="grid grid-col-1 gap-3 justify-items-center mt-4"
          >
            <input
              disabled
              type="text"
              value={format(selectedDate, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-primary w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="submit"
              className="input input-bordered w-full max-w-xs btn btn-primary"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
