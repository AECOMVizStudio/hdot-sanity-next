import React from 'react';
// component import
import FooterLogos from './FooterLogos';

const Footer = () => {
  async function emailSignup(formData: FormData) {
    'use server';
    const email = formData.get('email');
    await console.log(email);
  }
  return (
    <footer className='bg-hdotHoverTeal text-white pt-12 pb-4 px-4 text-center'>
      <div className='grid grid-cols-2 mx-auto max-w-7xl text-left'>
        <div className='flex flex-col'>
          <p className='text-4xl font-bold'>Sign up for our email list!</p>
          <p className='text-xl'>
            Stay up to date with the latest news and updates.
          </p>
          <form
            action={emailSignup}
            className='flex flex-col justify-start max-w-2xl py-4'
          >
            <label htmlFor='email' className='mb-2 font-semibold'>
              Email: <span className='text-red-500'>*</span>
            </label>
            <input
              className='border-2 border-black text-black h-12 md:max-w-[350px] p-2 mb-4'
              id='email'
              type='email'
              name='email'
              placeholder='email@example.com'
              required
              aria-required='true'
              aria-describedby='email-description'
            />
            <span id='email-description' className='hidden'>
              Enter a valid email address to sign up for updates.
            </span>
            <button
              type='submit'
              className='btn max-w-xs'
              aria-label='Submit your email to sign up for updates'
            >
              Submit
            </button>
          </form>
        </div>

        <FooterLogos />
      </div>
    </footer>
  );
};

export default Footer;
