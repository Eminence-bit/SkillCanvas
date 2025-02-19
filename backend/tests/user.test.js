const request = require('supertest');
const app = require('../../app');
const User = require('../../models/user.model');
const { generateAuthToken } = require('../../utils/auth.utils');

describe('User Routes', () => {
  let token;

  beforeEach(async () => {
    await User.deleteMany({});
    const user = new User({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
    });
    await user.save();
    token = generateAuthToken(user);
  });

  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/v1/users/register')
      .send({
        name: 'New User',
        email: 'newuser@example.com',
        password: 'password123',
      })
      .expect(201);

    expect(res.body.message).toBe('User registered successfully');
    expect(res.body.token).toBeDefined();
  });

  it('should login a user', async () => {
    const res = await request(app)
      .post('/api/v1/users/login')
      .send({
        email: 'test@example.com',
        password: 'password123',
      })
      .expect(200);

    expect(res.body.message).toBe('Login successful');
    expect(res.body.token).toBeDefined();
  });

  it('should get user profile', async () => {
    const res = await request(app)
      .get('/api/v1/users/profile')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(res.body.user.name).toBe('Test User');
    expect(res.body.user.email).toBe('test@example.com');
  });

  it('should update user profile', async () => {
    const res = await request(app)
      .put('/api/v1/users/profile')
      .set('Authorization', `Bearer ${token}`)
      .send({
        skills: ['JavaScript', 'React'],
        preferences: {
          learningGoals: ['Frontend Development'],
          jobPreferences: {
            location: 'Remote',
            industry: 'Tech',
          },
        },
      })
      .expect(200);

    expect(res.body.message).toBe('Profile updated successfully');
    expect(res.body.user.skills).toEqual(['JavaScript', 'React']);
  });
});