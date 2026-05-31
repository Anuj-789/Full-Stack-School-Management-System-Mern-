import { useState } from "react";

import Teacher from "../pages/Teachers/Teacher";
import Student from "../pages/Students/Student";
import Buses from "../pages/Buses/Buses";
import Schedule from "../pages/Schedules/Schedule";
import image from "../assets/react.svg"
function Dashboard() {

  const [activePage, setActivePage] = useState("");

  return (
    <>

      {/* HEADER */}

      <div className="bg-blue-400 p-4 text-center text-white text-4xl font-bold border-b-4 border-blue-700">
        🏫 School Management System
      </div>

      {/* MAIN LAYOUT */}

      <div className="flex h-screen">

        {/* LEFT SIDEBAR */}

        <div className="w-64 bg-gray-100 border-r-2 p-5 flex flex-col gap-5">

          <button
  onClick={() => setActivePage("teacher")}
  className={`w-52 h-25 border-2 border-blue-900 rounded-3xl 
  flex items-center justify-center text-white text-3xl font-bold 
  cursor-pointer transition-all duration-300 hover:scale-105 shadow-lg
  ${
    activePage === "teacher"
      ? "bg-blue-900"
      : "bg-blue-400 hover:bg-blue-900"
  }`}
>
  Teacher
</button>

<button
  onClick={() => setActivePage("student")}
  className={`w-52 h-25 border-2 border-blue-900 rounded-3xl 
  flex items-center justify-center text-white text-3xl font-bold 
  cursor-pointer transition-all duration-300 hover:scale-105 shadow-lg
  ${
    activePage === "student"
      ? "bg-blue-900"
      : "bg-blue-400 hover:bg-blue-900"
  }`}
>
  Student
</button>

<button
  onClick={() => setActivePage("buses")}
  className={`w-52 h-25 border-2 border-blue-900 rounded-3xl 
  flex items-center justify-center text-white text-3xl font-bold 
  cursor-pointer transition-all duration-300 hover:scale-105 shadow-lg
  ${
    activePage === "buses"
      ? "bg-blue-900"
      : "bg-blue-400 hover:bg-blue-900"
  }`}
>
  Buses
</button>

<button
  onClick={() => setActivePage("schedule")}
  className={`w-52 h-25 border-2 border-blue-900 rounded-3xl 
  flex items-center justify-center text-white text-3xl font-bold 
  cursor-pointer transition-all duration-300 hover:scale-105 shadow-lg
  ${
    activePage === "schedule"
      ? "bg-blue-900"
      : "bg-blue-400 hover:bg-blue-900"
  }`}
>
  Schedule
</button>

        </div>

        {/* RIGHT CONTENT */}

        <div className="flex-1 p-5 overflow-auto">

            {!activePage && (
    <div className="h-full flex flex-col items-center justify-center text-center">
      
      <img
        src={image}
        alt="Dashboard"
        className="w-[400px] opacity-80 mb-5"
      />

      <h2 className="text-3xl font-bold text-blue-400">
        Welcome to School Management Dashboard(Full Stack mern app)
      </h2>

      <p className="text-blue-500 mt-2">
       Made by:- Anuj Gupta
      </p>

    </div>
  )}

          {activePage === "teacher" && <Teacher />}

          {activePage === "student" && <Student />}

          {activePage === "buses" && <Buses />}

          {activePage === "schedule" && <Schedule />}

        </div>

      </div>

    </>
  );
}

export default Dashboard;