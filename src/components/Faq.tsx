'use client';
import React, { useState } from 'react';
import { Faq as FaqProps } from '@/types';

const Faq = ({ faqs }: { faqs: FaqProps[] }) => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (faqId: number) => {
    setOpenFAQ(openFAQ === `faq-${faqId}` ? null : `faq-${faqId}`);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq) => {
        const isOpen = openFAQ === `faq-${faq.id}`;
        return (
          <div
            key={faq.id}
            className="mb-0 border-b border-gray-200 last:border-b-0"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="flex  w-full cursor-pointer items-center justify-between py-4 text-left font-semibold transition-all duration-300"
            >
              {faq.question}
              <span
                className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-200 ease-in-out ${
                isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="px-2 pb-2 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Faq;
