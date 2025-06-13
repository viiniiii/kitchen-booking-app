import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from '../src/components/booking/BookingForm';

// Mock kitchen data
const mockKitchen = {
  id: 1,
  name: 'Test Kitchen',
  price: 100, 
  location: 'Test Location'
};

// Reset mocks before each test
beforeEach(() => {
  global.fetch = jest.fn();
  fetch.mockClear();
});

test('submits form with valid data', async () => {
  // Mock successful fetch response with booking data
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({
      booking: {
        name: 'Edvin',
        email: 'edvinperfundi@gmail.com',
        date: '2025-07-01',
        time: '12:00',
        hours: 1,
        totalPrice: 100
      }
    })
  });

  const handleSubmit = jest.fn();

  render(<BookingForm kitchen={mockKitchen} onSubmit={handleSubmit} />);

  // Fill out the form
  fireEvent.change(screen.getByLabelText(/full name/i), {
    target: { value: 'Edvin' }
  });
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: 'edvinperfundi@gmail.com' }
  });
  fireEvent.change(screen.getByLabelText(/date/i), {
    target: { value: '2025-07-01' }
  });
  fireEvent.change(screen.getByLabelText(/start time/i), {
    target: { value: '12:00' }
  });
  fireEvent.change(screen.getByLabelText(/duration/i), {
    target: { value: '1' }
  });

  // Submit the form
  fireEvent.click(screen.getByRole('button', { name: /confirm booking/i }));

  await waitFor(() => {
    expect(handleSubmit).toHaveBeenCalled();
  });

  // Verify correct data passed to onSubmit
  expect(handleSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      name: 'Edvin',
      email: 'edvinperfundi@gmail.com',
      date: '2025-07-01',
      time: '12:00',
      hours: 1,
      totalPrice: 100,
      kitchen: mockKitchen
    })
  );
});

test('handles form submission error', async () => {
  // Mock fetch failure
  fetch.mockRejectedValueOnce(new Error('Network error'));

  const handleSubmit = jest.fn();
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

  render(<BookingForm kitchen={mockKitchen} onSubmit={handleSubmit} />);

  // Fill required fields
  fireEvent.change(screen.getByLabelText(/full name/i), {
    target: { value: 'Edvin' }
  });
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: 'edvinperfundi@gmail.com' }
  });
  fireEvent.change(screen.getByLabelText(/date/i), {
    target: { value: '2025-07-01' }
  });
  fireEvent.change(screen.getByLabelText(/start time/i), {
    target: { value: '12:00' }
  });

  fireEvent.click(screen.getByRole('button', { name: /confirm booking/i }));

  // Wait for error handling
  await waitFor(() => {
    expect(consoleSpy).toHaveBeenCalledWith(
      'Error submitting booking:',
      expect.any(Error)
    );
  });

  consoleSpy.mockRestore();
});