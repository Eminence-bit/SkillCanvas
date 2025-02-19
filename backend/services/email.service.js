const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Send a job alert email
exports.sendJobAlertEmail = async (email, jobs) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your Personalized Job Alerts',
      html: `
        <h1>New Job Opportunities</h1>
        <ul>
          ${jobs
            .map(
              (job) =>
                `<li><a href="${job.url}">${job.title} at ${job.company}</a> (${job.location})</li>`
            )
            .join('')}
        </ul>
      `,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error.message);
    throw new Error('Failed to send job alert email');
  }
};