function ShowTeacher({ teacher, onClose, onEdit }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

      <div className="bg-white w-[700px] p-6 rounded-lg shadow-lg">

        <h2 className="text-2xl font-bold text-center mb-5">
          Teacher Details
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <p><b>Name:</b> {teacher.fullName}</p>
          <p><b>Age:</b> {teacher.age}</p>

          <p><b>Gender:</b> {teacher.gender}</p>
          <p><b>Subject:</b> {teacher.subject}</p>

          <p><b>Email:</b> {teacher.email}</p>
          <p><b>Teacher ID:</b> {teacher.teacherId}</p>

          <p><b>Phone:</b> {teacher.phone}</p>
          <p><b>Qualification:</b> {teacher.qualification}</p>

          <p><b>Salary:</b> ₹{teacher.salary}</p>

        </div>

        <div className="flex justify-end gap-3 mt-6">

          {/* Future Edit Button */}
            <button
            onClick={onEdit}
            className="bg-blue-500 text-white px-4 py-2"
          >
            Edit
          </button>

          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}

export default ShowTeacher;