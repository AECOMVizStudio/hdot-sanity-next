import { getFAQ } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import { FAQ } from '@/types/FAQPage';

async function FAQPage() {
  const faq: FAQ = await getFAQ();

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold text-center mb-8 text-hdotTeal'>
        {faq.title}
      </h1>
      <div className='space-y-6'>
        {faq.questions.map((q, index) => (
          <div key={index} className='bg-hdotBgAqua p-6 rounded-lg shadow-md'>
            <h2 className='text-2xl font-semibold mb-4 text-hdotHoverTeal'>
              {q.question}
            </h2>
            <PortableText
              value={q.answer}
              components={{
                marks: {
                  link: ({ children, value }) => {
                    const { href } = value;
                    return (
                      <a
                        href={href}
                        className='underline text-hdotTeal hover:text-hdotAqua'
                      >
                        {children}
                      </a>
                    );
                  },
                },
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQPage;
