import { useState } from "react";
import axios from "axios";

function AddStudent({ onClose, refreshStudents }) {

    const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullname: "",
    age: "",
    gender: "",
    class: "",
    rollno: "",
    email: "",
    phone: "",
    address: "",
    guardianname: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const validate = () => {
  let tempErrors = {};

  if (!formData.fullname) tempErrors.fullname = "Full Name is required";
  if (!formData.age) tempErrors.age = "Age is required";
  if (!formData.gender) tempErrors.gender = "Gender is required";
  if (!formData.class) tempErrors.class = "Class is required";
  if (!formData.rollno) tempErrors.rollno = "Roll No is required";
  if (!formData.email) tempErrors.email = "Email is required";
  if (!formData.phone) tempErrors.phone = "Phone is required"; else if (!/^[0-9]{10}$/.test(formData.phone)) {
  tempErrors.phone = "Phone must be exactly 10 digits";
}
  if (!formData.address) tempErrors.address = "Address is required";
  if (!formData.guardianname) tempErrors.guardianname = "Guardian Name is required";

  setErrors(tempErrors);

  return Object.keys(tempErrors).length === 0;
};



 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return; // ❌ stop submit if errors

  try {
    await axios.post("https://backend-full-stack-school-management.onrender.com/students/addstudent", formData);

    alert("Student Added Successfully");

    refreshStudents();
    onClose();

  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="bg-white shadow-md rounded-xl p-5 mb-5">

      <h2 className="text-2xl font-bold text-blue-900 mb-4">
        Add New Student
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">

        <input
  name="fullname"
  value={formData.fullname}
  onChange={handleChange}
  placeholder="Full Name"
  className={`border p-2 rounded ${
    errors.fullname ? "border-red-500" : "border-gray-300"
  }`}
/>

{errors.fullname && (
  <p className="text-red-500 text-sm">{errors.fullname}</p>
)}
       <input
  name="age"
  value={formData.age}
  onChange={handleChange}
  placeholder="Age"
  className={`border p-2 rounded ${
    errors.age ? "border-red-500" : "border-gray-300"
  }`}
/>
{errors.age && (
  <p className="text-red-500 text-sm">{errors.age}</p>
)}

        <select
  name="gender"
  value={formData.gender}
  onChange={handleChange}
  className={`border p-2 rounded ${
    errors.gender ? "border-red-500" : "border-gray-300"
  }`}
>
  <option value="">Gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
</select>

{errors.gender && (
  <p className="text-red-500 text-sm">{errors.gender}</p>
)}
<select
  name="class"
  value={formData.class}
  onChange={handleChange}
  className={`border p-2 rounded ${
    errors.class ? "border-red-500" : "border-gray-300"
  }`}
>
  <option value="">Select Class</option>
  {[5,6,7,8,9,10,11,12].map((c) => (
    <option key={c} value={String(c)}>
      {c}
    </option>
  ))}
</select>

{errors.class && (
  <p className="text-red-500 text-sm">{errors.class}</p>
)}

       <input
  name="rollno"
  value={formData.rollno}
  onChange={handleChange}
  placeholder="Roll No"
  className={`border p-2 rounded ${
    errors.rollno ? "border-red-500" : "border-gray-300"
  }`}
/>
{errors.rollno && (
  <p className="text-red-500 text-sm">{errors.rollno}</p>
)}
        <input
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Email"
  className={`border p-2 rounded ${
    errors.email ? "border-red-500" : "border-gray-300"
  }`}
/>
{errors.email && (
  <p className="text-red-500 text-sm">{errors.email}</p>
)}
<input
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  maxLength={10}
  placeholder="Phone"
  className={`border p-2 rounded ${
    errors.phone ? "border-red-500" : "border-gray-300"
  }`}
/> 

<input
  name="guardianname"
  value={formData.guardianname}
  onChange={handleChange}
  placeholder="Guardian Name"
  className={`border p-2 rounded ${
    errors.guardianname ? "border-red-500" : "border-gray-300"
  }`}
/>
{errors.guardianname && (
  <p className="text-red-500 text-sm">{errors.guardianname}</p>
)}
<textarea
  name="address"
  value={formData.address}
  onChange={handleChange}
  placeholder="Address"
  className={`border p-2 rounded col-span-2 ${
    errors.address ? "border-red-500" : "border-gray-300"
  }`}
/>

{errors.address && (
  <p className="text-red-500 text-sm col-span-2">
    {errors.address}
  </p>
)}
        <div className="col-span-2 flex justify-end gap-3">

          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
          >
            Save Student
          </button>

        </div>

      </form>
    </div>
  );
}

export default AddStudent;
