const request = require('supertest');
const app = require('../app');
const LearningPath = require('../models/learning.model');
const { generateAuthToken } = require('../utils/auth.utils');

describe('Learning Routes', () => {
  let token;

  beforeEach(async () => {
    await LearningPath.deleteMany({});

    const user = {
      _id: '64f8b5c3e7d9f4a1b2c3d4e5',
      name: 'Test User',
      email: 'test@example.com',
    };
    token = generateAuthToken(user);

    const learningPath = new LearningPath({
      userId: user._id,
      title: 'Introduction to JavaScript',
      modules: [
        { moduleId: 'module1', title: 'Basics', status: 'not_started' },
        { moduleId: 'module2', title: 'Functions', status: 'not_started' },
      ],
    });
    await learningPath.save();
  });

  it('should fetch personalized learning paths', async () => {
    const res = await request(app)
      .get('/api/v1/learning/paths')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(res.body.learningPaths.length).toBe(1);
    expect(res.body.learningPaths[0].title).toBe('Introduction to JavaScript');
  });

  it('should update learning progress', async () => {
    const res = await request(app)
      .put('/api/v1/learning/progress')
      .set('Authorization', `Bearer ${token}`)
      .send({
        moduleId: 'module1',
        status: 'completed',
        score: 90,
      })
      .expect(200);

    expect(res.body.message).toBe('Progress updated successfully');
    expect(res.body.learningPath.modules[0].status).toBe('completed');
    expect(res.body.learningPath.modules[0].score).toBe(90);
  });
});