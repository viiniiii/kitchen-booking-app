import request from 'supertest';
import express from 'express';
import bookingRouter from '../routes/booking.js';

// Setup minimal express app for testing only
const app = express();
app.use(express.json());
app.use('/api/bookings', bookingRouter);

describe('POST /api/bookings', () => {
  it('should return success when valid booking is submitted', async () => {
    const bookingData = {
      kitchenId: 1,
      name: 'Test User',
      email: 'test@example.com',
      date: '2025-07-01',
      time: '12:00',
      hours: 2,
      totalPrice: 100
    };

    const res = await request(app)
      .post('/api/bookings')
      .send(bookingData);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('booking');
    expect(res.body.booking).toMatchObject({
      kitchenId: 1,
      name: 'Test User',
      email: 'test@example.com',
      date: '2025-07-01',
      time: '12:00',
      hours: 2,
      totalPrice: 100
    });
  });
});
