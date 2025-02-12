"use client";

import { useState, useEffect } from "react";
import { getFAQ } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { FAQ } from "@/types/FAQPage";

const FAQPage = () => {
  const [faq, setFAQ] = useState<FAQ | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFAQ();
      setFAQ(data);
    };

    fetchData();
  }, []);

  if (!faq) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">{faq.title}</h1>
      <div className="space-y-6">
        {faq.questions.map((q, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{q.question}</h2>
            <PortableText
              value={q.answer}
              components={{
                marks: {
                  link: ({ children, value }) => {
                    const { href } = value;
                    return (
                      <a
                        href={href}
                        className="underline text-blue-600 hover:text-blue-800"
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
};

export default FAQPage;
