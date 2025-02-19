const request = require('supertest');
const app = require('../app');
const CareerRoadmap = require('../models/career.model');
const { generateAuthToken } = require('../utils/auth.utils');

describe('Career Routes', () => {
  let token;

  beforeEach(async () => {
    await CareerRoadmap.deleteMany({});
    const user = {
      _id: '64f8b5c3e7d9f4a1b2c3d4e5',
      name: 'Test User',
      email: 'test@example.com',
    };
    token = generateAuthToken(user);
  });

  it('should generate a career roadmap', async () => {
    const res = await request(app)
      .post('/api/v1/careers/roadmap')
      .set('Authorization', `Bearer ${token}`)
      .send({
        role: 'Software Engineer',
        company: 'TechCorp',
      })
      .expect(201);

    expect(res.body.message).toBe('Roadmap generated successfully');
    expect(res.body.roadmap.role).toBe('Software Engineer');
    expect(res.body.roadmap.company).toBe('TechCorp');
  });
});