import React from 'react';
import Image from 'next/image';

const Footer = () => {
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  async function emailSignup(formData: FormData) {
    'use server';
    const email = formData.get('email');
    await console.log(email);
  }
  return (
    <footer className='bg-hdotHoverTeal text-white pt-12 pb-4 px-4 text-center'>
      <div className='flex flex-col mx-auto max-w-7xl text-left'>
        <p className='text-4xl font-bold'>Sign up for our email list!</p>
        <p className='text-xl'>
          Stay up to date with the latest news and updates.
        </p>
        <form
          action={emailSignup}
          className='flex flex-col justify-start max-w-2xl py-4'
        >
          <label htmlFor='email'>Email: *</label>
          <input
            className='border-2 border-black text-black h-12 p-2 mb-4'
            id='email'
            type='email'
            name='email'
            placeholder='email@example.com'
            required
          />
          <button type='submit' className='btn max-w-xs'>
            Submit
          </button>
        </form>

        <div className='flex space-x-8'>
          <p className='py-8'>Copyright © {getCurrentYear()} AECOM</p>
          <Image
            src={'/hdot_logo.svg'}
            width={100}
            height={100}
            alt='Hawaii Department of Transportation Logo'
            className=''
            priority={false}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
