import Appointment from "../../Components/Pages/Appointment/Apointment/Apoinment";
import Login from "../../Components/Sheared/Login/Login";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../../Components/Pages/Home/Home/Home");
const { default: Main } = require("../../main");

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
    ],
  },
]);
export default route;
