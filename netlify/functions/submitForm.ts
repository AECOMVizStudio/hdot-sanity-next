import type { Handler } from '@netlify/functions';
import { serverClient } from '../../lib/sanity-server';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const { name, email, subject, message, subscriber } = JSON.parse(
      event.body || '{}'
    );

    // Basic validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields.' }),
      };
    }

    // Sanity document structure
    const submission = {
      _type: 'formSubmission',
      name,
      email,
      subject,
      message,
      subscriber,
      submittedAt: new Date().toISOString(),
    };

    await serverClient.create(submission);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error('Form submission failed:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error' }),
    };
  }
};
