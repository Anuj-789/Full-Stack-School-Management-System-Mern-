import DeleteButton from "./DeleteButton";

function GetTeacherList({ teachers, setTeachers , onDeleteSuccess , onShowTeacher }) {
  return (

 <div className="mt-10 overflow-x-auto">
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border p-3">S.No</th>
            <th className="border p-3">Name</th>
            <th className="border p-3">Teacher ID</th>
            <th className="border p-3">Phone No</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {teachers.map((t, i) => (
            <tr key={t._id} className="text-center">
              <td className="border p-2">{i + 1}</td>
              <td className="border p-2">{t.fullName}</td>
              <td className="border p-2">{t.teacherId}</td>
              <td className="border p-2">{t.phone}</td>

              <td className="border p-2">



                <button
  onClick={() => onShowTeacher(t)}
  className="bg-green-500 px-2 text-white mx-1 cursor-pointer"
>
  View
</button>



                  <DeleteButton
              teacherId={t.teacherId}
              setTeachers={setTeachers}
              onSuccess={onDeleteSuccess}
            />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetTeacherList;