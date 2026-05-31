function ViewStudent({ student, onClose, onEdit  }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 mb-5 mt-5">

      <div className="flex justify-between items-center mb-4">

  <h2 className="text-2xl font-bold text-blue-900">
    Student Details
  </h2>

  <div className="flex gap-2">

    <button
      onClick={onEdit}
      className="bg-green-500 text-white px-3 py-1 rounded cursor-pointer"
    >
      Edit
    </button>

    <button
      onClick={onClose}
      className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
    >
      Close
    </button>

  </div>

</div>

      <div className="grid grid-cols-2 gap-3 text-gray-700">

        <p><b>Name:</b> {student.fullname}</p>
        <p><b>Age:</b> {student.age}</p>
        <p><b>Gender:</b> {student.gender}</p>
        <p><b>Class:</b> {student.class}</p>
        <p><b>Roll No:</b> {student.rollno}</p>
        <p><b>Email:</b> {student.email}</p>
        <p><b>Phone:</b> {student.phone}</p>
        <p><b>Guardian:</b> {student.guardianname}</p>

      </div>

      <div className="mt-3">
        <p><b>Address:</b> {student.address}</p>
      </div>

    </div>
  );
}

export default ViewStudent;