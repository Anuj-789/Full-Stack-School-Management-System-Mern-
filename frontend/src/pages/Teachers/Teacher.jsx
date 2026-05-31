import { useEffect, useState } from "react";
import GetTeacherList from "./GetTeacherList";
import AddTeacher from "./AddTeacher";
import ShowTeacher from "./ShowTeacher";
import EditTeacher from "./EditTeacher"

function Teacher() {
  const [teachers, setTeachers] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [message, setMessage] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
const [showTeacherModal, setShowTeacherModal] = useState(false);
const [showEditModal, setShowEditModal] = useState(false);

  // ALL DATA
  const loadTeachers = () => {
    fetch("https://backend-full-stack-school-management.onrender.com/teachers/getteacherdata")
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data.data);
      });
  };

  useEffect(() => {
    loadTeachers();
  }, []);

  // SEARCH
  const searchTeacher = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/teachers/getteacherdata/${searchId}`
      );

      const data = await res.json();
    if (!data.data) {
      setTeachers([]); // empty table
      setMessage(`Teacher ID ${searchId} not found`);
       setTimeout(() => {
    setMessage("");
  }, 2000);
      return;
    }
      // 👇 IMPORTANT FIX (table me show karne ke liye array)
      setTeachers([data.data]);

      
    } catch (err) {
      console.log(err);
    }
  };

  // RESET
  const resetList = () => {
    loadTeachers();
    setSearchId("")
  };

  const handleDeleteSuccess = (teacherId) => {
  setTeachers((prev) =>
    prev.filter((t) => t.teacherId !== teacherId)
  );

  setMessage(`Teacher ID ${teacherId} deleted successfully`);

  setTimeout(() => {
    setMessage("");
  }, 2000);
};


const handleAddSuccess = (newTeacher) => {
  setTeachers((prev) => [...prev, newTeacher]);
  setShowAddForm(false);
};


  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-bold text-blue-900 ">
          Teacher-section
        </h1>

        <button className="text-blue-800 text-3xl font-extrabold ">
          Total Teacher - {teachers.length}
        </button>
      </div>

      {/* SEARCH */}
      <div className="flex justify-between ">
        <div className=" flex mt-5 gap-3">
           <input
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="Enter Teacher ID"
          className="border p-2 rounded"
        />

        <button onClick={searchTeacher} className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
          Search
        </button>

        <button onClick={resetList} className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer">
          Reset
        </button>
        </div>
        <div className="mt-5 mr-10">
          <button className=" bg-orange-400 text-white px-4 py-3 rounded cursor-pointer hover:bg-orange-600"
          onClick={() => setShowAddForm(true)}
          >Add Teacher+</button>
        </div>
       
      </div>



      {message && (
  <div className="text-center mt-3">
    <p className="bg-white-500 text-red-800 px-4 py-2 inline-block rounded">
      {message}
    </p>
  </div>
)}
      {showAddForm && (
  <AddTeacher
    onAddSuccess={handleAddSuccess}
    onClose={() => setShowAddForm(false)}
    refreshTeachers={loadTeachers}
  />
)}

{showEditModal && (
  <EditTeacher
    teacher={selectedTeacher}
    refreshTeachers={loadTeachers}
    onClose={() => setShowEditModal(false)}
  />
)}

      {/* 👇 IMPORTANT: pass data */}
      <GetTeacherList teachers={teachers}  setTeachers={setTeachers}  onDeleteSuccess={handleDeleteSuccess}
       onShowTeacher={(teacher) => {
    setSelectedTeacher(teacher);
    setShowTeacherModal(true);
  }}
      />


{showTeacherModal && (
  <ShowTeacher
    teacher={selectedTeacher}
    onClose={() => setShowTeacherModal(false)}
     onEdit={() => {
      setShowTeacherModal(false);
      setShowEditModal(true);
    }}
  />
)}
   
    </>
  );
}

export default Teacher;
