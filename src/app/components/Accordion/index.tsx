import React from 'react'
import AccordionItem from './AccordionItem';

export default function Accordion() {
  return (
    <div className="grid gap-6 md:w-240 w-full mx-auto">
        {questionsAnswers.map((item, i) => (
            <AccordionItem key={i} idAccordion={i} question={item.question} answer={item.answer} />
        ))}
    </div>
  )
}

const questionsAnswers = [
    {
      open: false,
      question: "What is a cryptocurrency exchange?",
      answer:
        "A cryptocurrency exchange is a platform that allows the purchase, sale, and exchange of cryptocurrencies. Users can exchange digital currencies for other digital currencies or for fiat currencies such as the dollar or euro.",
    },
    {
        open: false,
        question: "How does the exchange integration work on my platform?",
        answer:
            "A cryptocurrency exchange is a platform that allows the purchase, sale, and exchange of cryptocurrencies. Users can exchange digital currencies for other digital currencies or for fiat currencies such as the dollar or euro.",
    },
    {
    open: false,
    question: "What are the requirements for integration?",
    answer:
        "A cryptocurrency exchange is a platform that allows the purchase, sale, and exchange of cryptocurrencies. Users can exchange digital currencies for other digital currencies or for fiat currencies such as the dollar or euro.",
    },
    {
    open: false,
    question: "How long does it take to integrate an exchange?",
    answer:
        "A cryptocurrency exchange is a platform that allows the purchase, sale, and exchange of cryptocurrencies. Users can exchange digital currencies for other digital currencies or for fiat currencies such as the dollar or euro.",
    },
];
