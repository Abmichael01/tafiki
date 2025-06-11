// AnswerToQuestions.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { slideInLeft, staggerContainer, slideInRight } from "@/lib/animations";

const answers = [
  {
    category: "General",
    questions: [
      {
        question: "What is Food Hybrid?",
        answer:
          "Food Hybrid is a platform that connects investors to local shops where they can invest in food products that are resold for profit.",
      },
      {
        question: "How does the Food Hybrid model work?",
        answer:
          "Investors fund the purchase of products which are stocked in shops. These products are sold to customers, and the investor earns a return on investment from the sales.",
      },
      {
        question: "Who can become a partner?",
        answer:
          "Any individual or entity that meets the criteria set by Food Hybrid can become a partner.",
      },
      {
        question: "What type of shops are involved?",
        answer:
          "Shops that meet Food Hybrid's quality and location standards, typically located in high-footfall areas and serving a consistent customer base.",
      },
    ],
  },
  {
    category: "Investment & Returns",
    questions: [
      {
        question: "How does the investment cycle work?",
        answer:
          "The cycle begins with product purchase and stocking. Once the products are sold, returns (profit) are generated and distributed to investors.",
      },
      {
        question:
          "How does Food Hybrid ensure financial security for partners?",
        answer:
          "By only collaborating with verified shops and providing full transparency through tracking systems and real-time updates.",
      },
      {
        question: "Is my capital safe with Food Hybrid?",
        answer:
          "Yes, your capital is used specifically for purchasing products and is tracked throughout the process. Shops are vetted to reduce risk.",
      },
      {
        question: "Can I track my investment?",
        answer:
          "Yes, all investments can be tracked via the Food Hybrid app or web dashboard, including stock levels, sales progress, and returns.",
      },
      {
        question: "What happens if the shop does not sell all the products?",
        answer:
          "In such rare cases, products may be rotated or moved to another shop for better turnover. Full accountability is maintained.",
      },
    ],
  },
  {
    category: "Shop Selection & Stocking",
    questions: [
      {
        question: "How do I choose a shop to invest in?",
        answer:
          "You can choose from a list of available shops in the app, each showing its performance history, location, and potential ROI.",
      },
      {
        question: "Is there a maximum investment limit?",
        answer:
          "No, you can invest as much as you're comfortable with, depending on shop availability and your preferred level of diversification.",
      },
    ],
  },
  {
    category: "Risk & Security",
    questions: [
      {
        question: "How does Food Hybrid ensure my investment is secure?",
        answer:
          "Shops go through a strict verification process, and all transactions are recorded digitally for full traceability and accountability.",
      },
      {
        question: "Is Food Hybrid a legally registered company?",
        answer:
          "Yes, Food Hybrid operates as a legally registered business entity complying with relevant laws and regulations.",
      },
      {
        question: "What happens if a shop fails to return sales revenue?",
        answer:
          "A contingency plan is in place, including legal recourse and inventory rotation, to protect investor interests.",
      },
    ],
  },
  {
    category: "Operational",
    questions: [
      {
        question: "Can I invest in multiple shops at the same time?",
        answer:
          "Yes, you can diversify your investment across multiple shops simultaneously.",
      },
      {
        question: "How do I track my investment and returns?",
        answer:
          "Use the Food Hybrid app or web portal to view live updates on your investments, including product movement and profit generation.",
      },
      {
        question: "Can I withdraw my investment early?",
        answer:
          "Early withdrawal depends on the stage of the investment cycle, but every effort is made to accommodate requests when possible.",
      },
    ],
  },
];

const AnswerToQuestions: React.FC = () => {
  return (
    <motion.section
      initial="initial"
      className="section-padding space-y-[20px] lg:space-y-[60px] mt-[200px]"
    >
      <h1 className="font-[700] text-[#15221B] text-[20px] sm:text-[24px] lg:text-[32px] text-center">
        Answers to Your Questions
      </h1>

      <div className="space-y-[40px] py-[48px] sm:px-[24px] lg:bg-[#F9F9F9] rounded-[24px]">
        {answers.map((category, index) => (
          <motion.div
            key={index}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="space-y-[10px]"
          >
            <h2 className="text-lg font-[700] text-[#D3D3D3]">{category.category}</h2>
            <Accordion type="single" collapsible className="pl-3">
              {category.questions.map((question, qIndex) => (
                <motion.div
                  key={qIndex}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  className="w-full"
                >
                  <AccordionItem value={String(qIndex)}>
                    <AccordionTrigger className="text-[16px]">
                      {question.question}
                    </AccordionTrigger>
                    <AccordionContent>{question.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default AnswerToQuestions;