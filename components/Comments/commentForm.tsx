'use client';

import { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  subscriber: boolean;
};

const initialFormData: FormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
  subscriber: false,
};

export default function CommentForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    const newValue =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const res = await fetch('/.netlify/functions/submitForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err?.error || 'Submission failed');
      }
      console.log(res);

      setStatusMessage('Thanks! Your message has been submitted.');
      setFormData(initialFormData);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setStatusMessage(err.message);
      } else {
        setStatusMessage('Something went wrong.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label htmlFor='name' className='block'>
          Name *
        </label>
        <input
          id='name'
          name='name'
          type='text'
          required
          value={formData.name}
          onChange={handleChange}
          className='w-full p-2 border border-hdotAqua'
        />
      </div>

      <div>
        <label htmlFor='email' className='block'>
          Email *
        </label>
        <input
          id='email'
          name='email'
          type='email'
          required
          value={formData.email}
          onChange={handleChange}
          className='w-full p-2 border border-hdotAqua'
        />
      </div>

      <div>
        <label htmlFor='subject' className='block'>
          Subject
        </label>
        <input
          id='subject'
          name='subject'
          type='text'
          value={formData.subject}
          onChange={handleChange}
          className='w-full p-2 border border-hdotAqua'
        />
      </div>

      <div>
        <label htmlFor='message' className='block'>
          Message
        </label>
        <textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          className='w-full p-2 border border-hdotAqua'
        />
      </div>

      <div className='flex flex-row'>
        <input
          id='subscriber'
          name='subscriber'
          type='checkbox'
          checked={formData.subscriber}
          onChange={handleChange}
          className='w-4 h-4 border border-hdotAqua'
        />
        <label htmlFor='subscriber' className='block px-2'>
          Keep me informed! I want to subscribe to the project email list.
        </label>
      </div>

      <button type='submit' className='btn' disabled={isSubmitting}>
        {isSubmitting ? 'Submitting…' : 'Submit'}
      </button>

      {statusMessage && (
        <p className='text-hdotAqua font-medium'>{statusMessage}</p>
      )}
    </form>
  );
}
