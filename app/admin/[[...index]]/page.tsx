// name of this file and folder is a wildcard to make all routes under admin direct to page.tsx
'use client';
import config from '@/sanity.config';
import { NextStudio } from 'next-sanity/studio';

export default function AdminPage() {
  return (
    <div className='absolute top-0 right-0 left-0 bottom-0 w-screen'>
      <NextStudio config={config} />
    </div>
  );
}
