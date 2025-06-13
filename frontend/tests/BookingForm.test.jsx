import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from '../src/components/booking/BookingForm'; // adjust path
import '@testing-library/jest-dom/extend-expect';

test('submits form with valid data', async () => {
  const handleSubmit = jest.fn();
  const mockKitchen = { id: 'kitchen1', price: 50 };

  render(
    <BookingForm onSubmit={handleSubmit} kitchen={mockKitchen} selectedDate={new Date('2025-07-01')} />
  );

  fireEvent.change(screen.getByLabelText(/full name/i), {
    target: { value: 'Alice' },
  });

  fireEvent.change(screen.getByLabelText(/email address/i), {
    target: { value: 'alice@example.com' },
  });

  fireEvent.change(screen.getByLabelText(/date/i), {
    target: { value: '2025-07-01' },
  });

  fireEvent.change(screen.getByLabelText(/start time/i), {
    target: { value: '12:00' },
  });

  fireEvent.change(screen.getByLabelText(/duration/i), {
    target: { value: '2' },
  });

  fireEvent.click(screen.getByText('Confirm Booking'));

  await waitFor(() => {
    expect(handleSubmit).toHaveBeenCalled();
  });
});
