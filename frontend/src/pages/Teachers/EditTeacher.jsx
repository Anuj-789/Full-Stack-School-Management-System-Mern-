import { useState } from "react";
import axios from "axios";

function EditTeacher({ teacher, onClose, refreshTeachers }) {

  const [formData, setFormData] = useState({ ...teacher });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:5000/teachers/updateteacher/${teacher.teacherId}`,
        formData
      );

      alert("Updated Successfully");

      refreshTeachers();
      onClose();

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow mt-5">

      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
        Edit Teacher Details
      </h2>

      {/* FORM GRID */}
      <div className="grid grid-cols-2 gap-5">

        {/* NAME */}
        <div>
          <label className="font-semibold">Full Name</label>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="border p-2 w-full mt-1"
            placeholder="Enter name"
          />
        </div>

        {/* AGE */}
        <div>
          <label className="font-semibold">Age</label>
          <input
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="border p-2 w-full mt-1"
            placeholder="Enter age"
          />
        </div>

        {/* GENDER */}
        <div>
          <label className="font-semibold">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border p-2 w-full mt-1"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* SUBJECT */}
        <div>
          <label className="font-semibold">Subject</label>
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="border p-2 w-full mt-1"
            placeholder="Enter subject"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="font-semibold">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full mt-1"
            placeholder="Enter email"
          />
        </div>

        {/* PHONE */}
        <div>
          <label className="font-semibold">Phone</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 w-full mt-1"
            placeholder="Enter phone"
          />
        </div>

        {/* QUALIFICATION */}
        <div>
          <label className="font-semibold">Qualification</label>
          <input
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            className="border p-2 w-full mt-1"
            placeholder="Enter qualification"
          />
        </div>

        {/* SALARY */}
        <div>
          <label className="font-semibold">Salary</label>
          <input
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="border p-2 w-full mt-1"
            placeholder="Enter salary"
          />
        </div>

        {/* TEACHER ID (READ ONLY) */}
        <div>
          <label className="font-semibold">Teacher ID</label>
          <input
            name="teacherId"
            value={formData.teacherId}
            disabled
            className="border p-2 w-full mt-1 bg-gray-100"
          />
        </div>

      </div>

      {/* BUTTONS */}
      <div className="flex justify-end gap-3 mt-6">

        <button
          onClick={handleUpdate}
          className="bg-green-600 text-white px-5 py-2 rounded"
        >
          Update
        </button>

        <button
          onClick={onClose}
          className="bg-gray-500 text-white px-5 py-2 rounded"
        >
          Cancel
        </button>

      </div>

    </div>
  );
}

export default EditTeacher;