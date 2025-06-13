const ConfirmOverview = ({ booking }) => (
  <div className="bg-blue-100 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-4">Your booking was successful!</h3>
    <ul className="list-disc pl-5">
      <li>Name: {booking.name}</li>
      <li>Email: {booking.email}</li>
      <li>Date: {booking.date}</li>
      <li>Time: {booking.time}</li>
    </ul>
  </div>
);