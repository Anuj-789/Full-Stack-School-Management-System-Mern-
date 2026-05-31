import { useState } from "react";
import axios from "axios";

function AddTeacher({ onClose, refreshTeachers }) {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    subject: "",
    email: "",
    teacherId: "",
    phone: "",
    qualification: "",
    salary: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let temp = {};

    if (!formData.fullName) temp.fullName = "Full Name required";
    if (!formData.age) temp.age = "Age required";
    if (!formData.gender) temp.gender = "Gender required";
    if (!formData.subject) temp.subject = "Subject required";
    if (!formData.email) temp.email = "Email required";
    if (!formData.teacherId) temp.teacherId = "Teacher ID required";

    if (!formData.phone) temp.phone = "Phone required";
    else if (!/^[0-9]{10}$/.test(formData.phone)) {
      temp.phone = "Phone must be 10 digits";
    }

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      await axios.post("https://backend-full-stack-school-management.onrender.com/teachers/addteacher", {
        ...formData,
        age: Number(formData.age),
        salary: Number(formData.salary),
        gender: formData.gender, // safe pass
      });

      alert("Teacher Added Successfully");

      refreshTeachers();
      onClose();

    } catch (error) {
      console.log(error.response?.data || error.message);
      alert(error.response?.data?.message || "Error adding teacher");
    }
  };

  return (
    <div className="bg-white p-5 rounded shadow mt-5">

      <h2 className="text-xl font-bold mb-4">Add Teacher</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">

        {/* FULL NAME */}
        <div>
          <input
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <p className="text-red-500 text-sm">{errors.fullName}</p>
        </div>

        {/* AGE */}
        <div>
          <input
            name="age"
            placeholder="Age"
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <p className="text-red-500 text-sm">{errors.age}</p>
        </div>

        {/* GENDER FIXED 🔥 */}
        <div>
          <select
            name="gender"
            onChange={handleChange}
            className="border p-2 w-full"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <p className="text-red-500 text-sm">{errors.gender}</p>
        </div>

        {/* SUBJECT */}
        <div>
          <input
            name="subject"
            placeholder="Subject"
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <p className="text-red-500 text-sm">{errors.subject}</p>
        </div>

        {/* EMAIL */}
        <div>
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <p className="text-red-500 text-sm">{errors.email}</p>
        </div>

        {/* TEACHER ID */}
        <div>
          <input
            name="teacherId"
            placeholder="Teacher ID"
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <p className="text-red-500 text-sm">{errors.teacherId}</p>
        </div>

        {/* PHONE */}
        <div>
          <input
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <p className="text-red-500 text-sm">{errors.phone}</p>
        </div>

        {/* QUALIFICATION */}
        <div>
          <input
            name="qualification"
            placeholder="Qualification"
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        {/* SALARY */}
        <div>
          <input
            name="salary"
            placeholder="Salary"
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        {/* BUTTONS */}
        <div className="col-span-2 flex gap-3 justify-end mt-2">

          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Save Teacher
          </button>

        </div>

      </form>
    </div>
  );
}

export default AddTeacher;
