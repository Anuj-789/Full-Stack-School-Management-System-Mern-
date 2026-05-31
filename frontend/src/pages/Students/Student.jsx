import { useEffect, useState } from "react";
import axios from "axios";
import AddStudent from "./AddStudent";
import ViewStudent from "./ViewStudent";
import EditStudent from "./EditStudent";

function Student() {
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
const [showView, setShowView] = useState(false);
const [showEdit, setShowEdit] = useState(false);
const [editStudent, setEditStudent] = useState(null);

  // Fetch students
  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/students/getstudentdata");
      setStudents(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (rollno, name) => {
  try {
    await axios.delete(
      `http://localhost:5000/students/deletestudent/rollno/${rollno}`
    );

    setMessage(`${name} deleted successfully`);

    fetchStudents();

    setTimeout(() => {
      setMessage("");
    }, 2000);

  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="w-full h-full p-5 bg-gray-50">

      {/* HEADER SECTION */}
      <div className="flex justify-between items-center mb-6">

        {/* Title */}
        <h1 className="text-4xl font-bold text-blue-900">
          Students
        </h1>

        {/* STATS BOXES */}
        <div className="flex gap-4">

          <div className="bg-blue-500 text-white px-5 py-3 rounded-4xl shadow ">
            Total Students: {students.length}
          </div>

       <button
  onClick={() => setShowForm(true)}
  className="bg-yellow-500 text-white px-5 py-3 rounded-4xl cursor-pointer"
>
  New Student+
</button>


        </div>

      </div>

{showForm && (
  <AddStudent
    onClose={() => setShowForm(false)}
    refreshStudents={fetchStudents}
  />
)}

{showView && selectedStudent && (
  <ViewStudent
    student={selectedStudent}
    onClose={() => setShowView(false)}
    onEdit={() => {
      setShowView(false);
      setEditStudent(selectedStudent);
      setShowEdit(true);
    }}
  />
)}

{showEdit && editStudent && (
  <EditStudent
    student={editStudent}
    onClose={() => setShowEdit(false)}
    refreshStudents={fetchStudents}
  />
)}

{message && (
  <div className="bg-green-500 text-white p-3 rounded mb-3">
    {message}
  </div>
)}
      {/* TABLE SECTION */}
      <div className="bg-white shadow-md rounded-xl overflow-hidden">

        {/* TABLE HEADER */}
        <div className="grid grid-cols-6 bg-blue-900 text-white p-5 font-bold">
          <div >S.No</div>
          <div>Name</div>
          <div>Roll No</div>
          <div>Class</div>
          <div>Email</div>
          <div>Actions</div>
        </div>

        {/* TABLE BODY */}
        {students.map((stu) => (
          <div
            key={stu._id}
            className="grid grid-cols-6 p-3 border-b items-center hover:bg-gray-100"
          >
              <div>{students.indexOf(stu) + 1}</div>
            <div>{stu.fullname}</div>
            <div>{stu.rollno}</div>
            <div>{stu.class}</div>
            <div>{stu.email}</div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-2">

            <button
  onClick={() => {
    setSelectedStudent(stu);
    setShowView(true);
  }}
  className="bg-blue-500 text-white px-3 py-1 rounded cursor-pointer"
>
  View
</button>

             <button
  onClick={() => {
    setEditStudent(stu);
    setShowEdit(true);
     setShowView(false);
  }}
  className="bg-green-500 text-white px-3 py-1 rounded cursor-pointer"
>
  Edit
</button>

              <button
onClick={() => handleDelete(stu.rollno, stu.fullname)}           
  className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
              >
                Delete
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Student;