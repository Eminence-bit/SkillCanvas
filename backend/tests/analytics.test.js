
const request = require('supertest');
const app = require('../../app');
const LearningPath = require('../../models/learning.model');
const { generateAuthToken } = require('../../utils/auth.utils');

describe('Analytics Routes', () => {
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
        { moduleId: 'module1', title: 'Basics', status: 'completed', score: 90 },
        { moduleId: 'module2', title: 'Functions', status: 'in_progress', score: 0 },
        { moduleId: 'module3', title: 'Advanced Topics', status: 'not_started', score: 0 },
      ],
    });
    await learningPath.save();
  });

  it('should fetch learning progress analytics', async () => {
    const res = await request(app)
      .get('/api/v1/analytics/progress')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(res.body.totalModules).toBe(3);
    expect(res.body.completedModules).toBe(1);
    expect(res.body.completionRate).toBe('33.33'); 
  });

  it('should handle no learning paths gracefully', async () => {
 
    await LearningPath.deleteMany({});

    const res = await request(app)
      .get('/api/v1/analytics/progress')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(res.body.totalModules).toBe(0);
    expect(res.body.completedModules).toBe(0);
    expect(res.body.completionRate).toBe('0.00'); 
  });
});