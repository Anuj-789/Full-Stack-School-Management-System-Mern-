import { useState } from "react";

function Schedule() {
  const [selectedClass, setSelectedClass] = useState(5);

  const classes = [5, 6, 7, 8, 9, 10];

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const timetable = {

    5: {
      Monday: [
        { time: "09:00 - 09:45", subject: "Math", teacher: "Amit Sharma" },
        { time: "09:45 - 10:30", subject: "English", teacher: "Neha Singh" },
        { time: "10:30 - 11:15", subject: "Science", teacher: "Rahul Verma" },
        { time: "11:15 - 11:30", subject: "BREAK", teacher: "-" },
        { time: "11:30 - 03:00", subject: "Activity", teacher: "Sports Teacher" },
      ],

      Tuesday: [
        { time: "09:00 - 09:45", subject: "Science", teacher: "Rahul Verma" },
        { time: "09:45 - 10:30", subject: "Math", teacher: "Amit Sharma" },
        { time: "10:30 - 11:15", subject: "English", teacher: "Neha Singh" },
        { time: "11:15 - 11:30", subject: "BREAK", teacher: "-" },
        { time: "11:30 - 03:00", subject: "Games", teacher: "Sports Teacher" },
      ],

      Wednesday: [
        { time: "09:00 - 09:45", subject: "English", teacher: "Neha Singh" },
        { time: "09:45 - 10:30", subject: "Math", teacher: "Amit Sharma" },
        { time: "10:30 - 11:15", subject: "Science", teacher: "Rahul Verma" },
        { time: "11:15 - 11:30", subject: "BREAK", teacher: "-" },
        { time: "11:30 - 03:00", subject: "Computer Lab", teacher: "Rajesh Kumar" },
      ],

      Thursday: [
        { time: "09:00 - 09:45", subject: "Math", teacher: "Amit Sharma" },
        { time: "09:45 - 10:30", subject: "Hindi", teacher: "Priya Kumari" },
        { time: "10:30 - 11:15", subject: "EVS", teacher: "Suresh Yadav" },
        { time: "11:15 - 11:30", subject: "BREAK", teacher: "-" },
        { time: "11:30 - 03:00", subject: "Drawing", teacher: "Art Teacher" },
      ],

      Friday: [
        { time: "09:00 - 09:45", subject: "Science", teacher: "Rahul Verma" },
        { time: "09:45 - 10:30", subject: "English", teacher: "Neha Singh" },
        { time: "10:30 - 11:15", subject: "Math", teacher: "Amit Sharma" },
        { time: "11:15 - 11:30", subject: "BREAK", teacher: "-" },
        { time: "11:30 - 03:00", subject: "Revision", teacher: "Class Teacher" },
      ],

      Saturday: [
        { time: "09:00 - 10:30", subject: "Weekly Test", teacher: "All Teachers" },
        { time: "10:30 - 11:30", subject: "Quiz", teacher: "Class Teacher" },
        { time: "11:30 - 12:00", subject: "BREAK", teacher: "-" },
        { time: "12:00 - 03:00", subject: "Sports / Activity", teacher: "Sports Teacher" },
      ],
    },

    6: {
      Monday: [
        { time: "09:00 - 09:45", subject: "Science", teacher: "Rahul Verma" },
        { time: "09:45 - 10:30", subject: "Math", teacher: "Amit Sharma" },
        { time: "10:30 - 11:15", subject: "English", teacher: "Neha Singh" },
        { time: "11:15 - 11:30", subject: "BREAK", teacher: "-" },
        { time: "11:30 - 03:00", subject: "Lab Work", teacher: "Lab Teacher" },
      ],
      Tuesday: [
        { time: "09:00 - 10:30", subject: "Math Practice", teacher: "Amit Sharma" },
        { time: "10:30 - 11:30", subject: "English", teacher: "Neha Singh" },
        { time: "11:30 - 03:00", subject: "Games", teacher: "Sports Teacher" },
      ],
      Wednesday: [
        { time: "09:00 - 10:30", subject: "Science", teacher: "Rahul Verma" },
        { time: "10:30 - 11:30", subject: "Social Studies", teacher: "Suresh Yadav" },
        { time: "11:30 - 03:00", subject: "Computer", teacher: "Rajesh Kumar" },
      ],
      Thursday: [
        { time: "09:00 - 10:30", subject: "Math", teacher: "Amit Sharma" },
        { time: "10:30 - 11:30", subject: "Hindi", teacher: "Priya Kumari" },
        { time: "11:30 - 03:00", subject: "Drawing", teacher: "Art Teacher" },
      ],
      Friday: [
        { time: "09:00 - 10:30", subject: "English", teacher: "Neha Singh" },
        { time: "10:30 - 11:30", subject: "Science", teacher: "Rahul Verma" },
        { time: "11:30 - 03:00", subject: "Revision", teacher: "Class Teacher" },
      ],
      Saturday: [
        { time: "09:00 - 10:30", subject: "Test", teacher: "All Teachers" },
        { time: "10:30 - 11:30", subject: "Quiz", teacher: "Class Teacher" },
        { time: "11:30 - 03:00", subject: "Sports", teacher: "Sports Teacher" },
      ],
    },

    7: {
      Monday: [
        { time: "09:00 - 10:30", subject: "Physics", teacher: "Rahul Verma" },
        { time: "10:30 - 11:30", subject: "Math", teacher: "Amit Sharma" },
        { time: "11:30 - 03:00", subject: "Lab", teacher: "Lab Teacher" },
      ],
      Tuesday: [
        { time: "09:00 - 10:30", subject: "Chemistry", teacher: "Neha Singh" },
        { time: "10:30 - 11:30", subject: "English", teacher: "Priya Kumari" },
        { time: "11:30 - 03:00", subject: "Sports", teacher: "Sports Teacher" },
      ],
      Wednesday: [
        { time: "09:00 - 10:30", subject: "Math", teacher: "Amit Sharma" },
        { time: "10:30 - 11:30", subject: "Biology", teacher: "Suresh Yadav" },
        { time: "11:30 - 03:00", subject: "Computer", teacher: "Rajesh Kumar" },
      ],
      Thursday: [
        { time: "09:00 - 10:30", subject: "Physics", teacher: "Rahul Verma" },
        { time: "10:30 - 11:30", subject: "English", teacher: "Neha Singh" },
        { time: "11:30 - 03:00", subject: "Drawing", teacher: "Art Teacher" },
      ],
      Friday: [
        { time: "09:00 - 10:30", subject: "Chemistry", teacher: "Neha Singh" },
        { time: "10:30 - 11:30", subject: "Math", teacher: "Amit Sharma" },
        { time: "11:30 - 03:00", subject: "Revision", teacher: "Class Teacher" },
      ],
      Saturday: [
        { time: "09:00 - 10:30", subject: "Test", teacher: "All Teachers" },
        { time: "10:30 - 11:30", subject: "Quiz", teacher: "Class Teacher" },
        { time: "11:30 - 03:00", subject: "Sports", teacher: "Sports Teacher" },
      ],
    },

    // same pattern continue for 8, 9, 10 (already structured)
    8: {},
    9: {},
    10: {}
  };

  const data = timetable[selectedClass];

  return (
    <div className="p-5">

      <h1 className="text-3xl font-bold text-blue-800 mb-5">
        School Timetable (9 AM - 3 PM)
      </h1>

      {/* CLASS BUTTONS */}
      <div className="flex gap-3 mb-6">
        {classes.map((c) => (
          <button
            key={c}
            onClick={() => setSelectedClass(c)}
            className={`px-4 py-2 rounded text-white font-bold ${
              selectedClass === c ? "bg-blue-900" : "bg-blue-500"
            }`}
          >
            Class {c}
          </button>
        ))}
      </div>

      {/* DAYS TABLES */}
      <div className="space-y-6">

        {days.map((day) => (
          <div key={day} className="bg-white shadow rounded p-4">

            <h2 className="text-xl font-bold text-blue-700 mb-3">
              {day}
            </h2>

            <table className="w-full border">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border p-2">Time</th>
                  <th className="border p-2">Subject</th>
                  <th className="border p-2">Teacher</th>
                </tr>
              </thead>

              <tbody>
                {data?.[day]?.map((item, i) => (
                  <tr key={i} className="text-center">
                    <td className="border p-2">{item.time}</td>
                    <td className="border p-2">{item.subject}</td>
                    <td className="border p-2">{item.teacher}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Schedule;