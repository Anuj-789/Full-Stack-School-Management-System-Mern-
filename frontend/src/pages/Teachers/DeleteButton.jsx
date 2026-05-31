function DeleteButton({ teacherId, onSuccess }) {
  const handleDelete = async () => {
    try {
      await fetch(
        `https://backend-full-stack-school-management.onrender.com/teachers/deleteteacher/${teacherId}`,
        { method: "DELETE" }
      );

      // parent ko inform karo
      onSuccess(teacherId);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-2 py-1 rounded"
    >
      Delete
    </button>
  );
}

export default DeleteButton;
