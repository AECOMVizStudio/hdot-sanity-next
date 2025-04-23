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

    if (!name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Name and email are required.' }),
      };
    }

    const doc = {
      _type: 'formSubmission',
      name,
      email,
      subject: subject || '',
      message: message || '',
      subscriber: !!subscriber,
      submittedAt: new Date().toISOString(),
    };

    await serverClient.create(doc);

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
