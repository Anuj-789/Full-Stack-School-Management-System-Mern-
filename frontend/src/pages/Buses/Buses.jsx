function Buses() {

  const buses = [
    {
      id: 1,
      busNo: "JH01AB101",
      driver: "Ramesh Kumar",
      route: "Ranchi - Bokaro",
      seats: 40,
      status: "Active"
    },
    {
      id: 2,
      busNo: "JH01AB102",
      driver: "Suresh Singh",
      route: "Ranchi - Hazaribagh",
      seats: 35,
      status: "Active"
    },
    {
      id: 3,
      busNo: "JH01AB103",
      driver: "Amit Verma",
      route: "Ranchi - Dhanbad",
      seats: 45,
      status: "Maintenance"
    },
    {
      id: 4,
      busNo: "JH01AB104",
      driver: "Rajesh Yadav",
      route: "Ranchi - Jamshedpur",
      seats: 50,
      status: "Active"
    },
    {
      id: 5,
      busNo: "JH01AB105",
      driver: "Manoj Kumar",
      route: "Ranchi - Gumla",
      seats: 30,
      status: "Inactive"
    }
  ];

  return (
    <div className="p-5">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold text-blue-800">
          Buses Section
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          + Add Bus
        </button>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-3 gap-5">

        {buses.map((bus) => (
          <div
            key={bus.id}
            className="bg-white shadow-md border rounded-lg p-4 hover:shadow-xl transition"
          >

            <h2 className="text-xl font-bold text-blue-700">
              Bus No: {bus.busNo}
            </h2>

            <p><b>Driver:</b> {bus.driver}</p>
            <p><b>Route:</b> {bus.route}</p>
            <p><b>Seats:</b> {bus.seats}</p>

            <p>
              <b>Status:</b>{" "}
              <span
                className={
                  bus.status === "Active"
                    ? "text-green-600"
                    : bus.status === "Maintenance"
                    ? "text-yellow-600"
                    : "text-red-600"
                }
              >
                {bus.status}
              </span>
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex gap-2 mt-3">

              <button className="bg-green-500 text-white px-3 py-1 rounded">
                View
              </button>

              <button className="bg-blue-500 text-white px-3 py-1 rounded">
                Edit
              </button>

              <button className="bg-red-500 text-white px-3 py-1 rounded">
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Buses;