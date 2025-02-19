const request = require('supertest');
const app = require('../../app');
const Job = require('../../models/job.model');
const { generateAuthToken } = require('../../utils/auth.utils');

describe('Job Routes', () => {
  let token;

  beforeEach(async () => {
    await Job.deleteMany({});
    const user = {
      _id: '64f8b5c3e7d9f4a1b2c3d4e5',
      name: 'Test User',
      email: 'test@example.com',
      skills: ['Python', 'Data Analysis'],
    };
    token = generateAuthToken(user);

    const job = new Job({
      userId: user._id,
      title: 'Data Scientist',
      company: 'TechCorp',
      location: 'Remote',
      skillsRequired: ['Python', 'Machine Learning'],
      url: 'https://example.com/job1',
    });
    await job.save();
  });

  it('should search for jobs', async () => {
    const res = await request(app)
      .get('/api/v1/jobs/search?location=Remote&industry=Tech')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(res.body.jobs.length).toBe(1);
    expect(res.body.jobs[0].title).toBe('Data Scientist');
  });

  it('should save a job', async () => {
    const job = await Job.findOne({});
    const res = await request(app)
      .post('/api/v1/jobs/save')
      .set('Authorization', `Bearer ${token}`)
      .send({ jobId: job._id })
      .expect(200);

    expect(res.body.message).toBe('Job saved successfully');
    expect(res.body.job.saved).toBe(true);
  });
});