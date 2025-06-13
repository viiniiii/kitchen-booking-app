const BookingSummary = ({ booking }) => (
  <div className="bg-green-100 p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-4">Booking Confirmed!</h2>
    <p>Name: {booking.name}</p>
    <p>Email: {booking.email}</p>
    <p>Date: {booking.date}</p>
    <p>Time: {booking.time}</p>
    <p>Kitchen ID: {booking.kitchenId}</p>
  </div>
);