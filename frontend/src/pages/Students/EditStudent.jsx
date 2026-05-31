import { useState, useEffect } from "react";
import axios from "axios";

function EditStudent({ student, onClose, refreshStudents }) {

  const [formData, setFormData] = useState(student);

  useEffect(() => {
    setFormData(student);
  }, [student]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/students/updatestudent/rollno/${student.rollno}`,
        formData
      );

      alert("Student Updated Successfully");

      refreshStudents();
      onClose();

    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message);
    }
  };

  if (!formData) return null;

  return (
    <div className="bg-white shadow-md rounded-xl p-6 mb-5 mt-5">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold text-green-700">
          Edit Student
        </h2>

        <button
          onClick={onClose}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Close
        </button>
      </div>

      {/* FORM */}
      <form onSubmit={handleUpdate} className="grid grid-cols-2 gap-4">

        {/* FULL NAME */}
        <div>
          <label className="text-sm font-semibold text-gray-600">
            Full Name
          </label>
          <input
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
          />
        </div>

        {/* AGE */}
        <div>
          <label className="text-sm font-semibold text-gray-600">
            Age
          </label>
          <input
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
          />
        </div>

        {/* GENDER */}
        <div>
          <label className="text-sm font-semibold text-gray-600">
            Gender
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* CLASS */}
        <div>
          <label className="text-sm font-semibold text-gray-600">
            Class
          </label>
          <select
            name="class"
            value={formData.class}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
          >
            <option value="">Select Class</option>
            {[5,6,7,8,9,10,11,12].map((c) => (
              <option key={c} value={String(c)}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* ROLL NO */}
        <div>
          <label className="text-sm font-semibold text-gray-600">
            Roll No
          </label>
          <input
            name="rollno"
            value={formData.rollno}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-sm font-semibold text-gray-600">
            Email
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
          />
        </div>

        {/* PHONE */}
        <div>
          <label className="text-sm font-semibold text-gray-600">
            Phone
          </label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
          />
        </div>

        {/* GUARDIAN */}
        <div>
          <label className="text-sm font-semibold text-gray-600">
            Guardian Name
          </label>
          <input
            name="guardianname"
            value={formData.guardianname}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
          />
        </div>

        {/* ADDRESS */}
        <div className="col-span-2">
          <label className="text-sm font-semibold text-gray-600">
            Address
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded col-span-2 hover:bg-green-700 cursor-pointer"
        >
          Update Student
        </button>

      </form>

    </div>
  );
}

export default EditStudent;