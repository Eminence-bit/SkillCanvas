const request = require('supertest');
const app = require('../../app');
const TechUpdate = require('../../models/tech.model');
const { generateAuthToken } = require('../../utils/auth.utils');

describe('Tech Routes', () => {
  let token;

  beforeEach(async () => {
    await TechUpdate.deleteMany({});

    const user = {
      _id: '64f8b5c3e7d9f4a1b2c3d4e5',
      name: 'Test User',
      email: 'test@example.com',
    };
    token = generateAuthToken(user);

    const techUpdate = new TechUpdate({
      userId: user._id,
      categories: ['AI', 'Blockchain'],
      frequency: 'daily',
    });
    await techUpdate.save();
  });

  it('should fetch tech updates', async () => {
    const res = await request(app)
      .get('/api/v1/tech-updates/feed')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(res.body.techUpdates.categories).toEqual(['AI', 'Blockchain']);
  });

  it('should update tech preferences', async () => {
    const res = await request(app)
      .put('/api/v1/tech-updates/preferences')
      .set('Authorization', `Bearer ${token}`)
      .send({
        categories: ['AI', 'Data Science'],
        frequency: 'weekly',
      })
      .expect(200);

    expect(res.body.message).toBe('Preferences updated successfully');
    expect(res.body.techUpdate.categories).toEqual(['AI', 'Data Science']);
    expect(res.body.techUpdate.frequency).toBe('weekly');
  });
});