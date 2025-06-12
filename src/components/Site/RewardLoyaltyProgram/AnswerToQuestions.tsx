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
          "Food Hybrid is a trading name of Hybrid Food & Mart Limited, a company that connects investors (partners) with food retail stores that need capital to stock food products. Partners fund the supply of goods, and profits are shared between the shop and the partner.",
      },
      {
        question: "How does the Food Hybrid model work?",
        answer: [
          "A partner selects a shop through our online portal and funds the supply of food stock.",
          "The company supplies the staple food goods and shop confirms receipt.",
          "The shop sells the products and returns the sales revenue.",
          "The partner and the shop share the profit based on a set percentage.",
          "The entire process is monitored and managed online to ensure full transparency and security.",
        ],
      },
      {
        question: "Who can become a partner?",
        answer:
          "Anyone looking for a passive business opportunity can invest through Food Hybrid. No prior experience in food retail is needed.",
      },
      {
        question: "What type of shops are involved?",
        answer:
          "Shops are small and medium-sized food retail stores that have an established customer base but limited capital to stock products.",
      },
    ],
  },
  {
    category: "Investment & Returns",
    questions: [
      {
        question: "How does the investment cycle work?",
        answer: [
          "The investment cycle lasts 5 weeks from the time a partner funds stock to when they receive their first return.",
          "Partners earn a 3% return at the end of each 5-week cycle.",
          "On week 5, they receive their first 3% return.",
          "On week 10, they receive another 3% return.",
          "On week 15, they receive their capital plus the final 3% return.",
        ],
      },
      {
        question:
          "How does Food Hybrid ensure financial security for partners?",
        answer: [
          "Pre-screened retail shops: Only verified food retail shops with a proven sales track record are allowed to participate.",
          "Controlled stock limits: Each store has a maximum stock allocation to prevent over-supply and ensure a quick turnaround.",
          "Smart financial controls: All payments, transactions, and profit sharing are automated and monitored through the online portal, ensuring transparency.",
          "Diversified revenue model: Food Hybrid earns from the supply of goods, not from partner investments, ensuring a sustainable business model.",
        ],
      },
      {
        question: "Is my capital safe with Food Hybrid?",
        answer: [
          "No funds are held without stock allocation—your capital is always linked to real food stock.",
          "Sales data is monitored in real time to ensure timely returns.",
          "Partners receive structured payments every cycle, reducing risk exposure.",
          "Business continuity is secured through our diversified operations in food supply and retail partnerships.",
        ],
      },
      {
        question: "Can I track my investment?",
        answer:
          "Yes. The Food Hybrid online portal provides real-time tracking, showing stock movement, sales progress, and return payments.",
      },
      {
        question: "What happens if the shop does not sell all the products?",
        answer:
          "Shops are carefully selected based on their sales performance. However, in rare cases of slow sales, the cycle may extend slightly until all stock is sold. Food Hybrid ensures that only high-demand food products are supplied to minimize delays.",
      },
    ],
  },
  {
    category: "Shop Selection & Stocking",
    questions: [
      {
        question: "How do I choose a shop to invest in?",
        answer:
          "Available food retail shops are listed on the Food Hybrid online portal, where partners can review details and select one.",
      },
      {
        question: "Is there a maximum investment limit?",
        answer:
          "Yes. Each shop has a maximum stock capacity to ensure quick sales turnover. The online portal prevents over-supply to any shop.",
      },
    ],
  },
  {
    category: "Risk & Security",
    questions: [
      {
        question: "How does Food Hybrid ensure my investment is secure?",
        answer: [
          "The entire process is controlled through our online portal for full transparency.",
          "Shops are pre-screened to ensure they have consistent sales history.",
          "Stock limits prevent excess supply, ensuring quicker turnover.",
          "Automated tracking and structured payment schedules prevent financial mismanagement.",
          "Partners receive regular updates and reports via the portal.",
        ],
      },
      {
        question: "Is Food Hybrid a legally registered company?",
        answer:
          "Yes, Hybrid Food & Mart Limited is a fully registered and compliant business entity, operating under established laws and regulations.",
      },
      {
        question: "What happens if a shop fails to return sales revenue?",
        answer: [
          "The shop is blacklisted from future participation.",
          "Alternative recovery measures are applied.",
          "The company maintains reserve stock and liquidity strategies to cover unforeseen risks.",
        ],
      },
    ],
  },
  {
    category: "Operational",
    questions: [
      {
        question: "Can I invest in multiple shops at the same time?",
        answer:
          "No. Each partner can invest in only one shop at a time to maintain fairness and ensure quick stock turnover.",
      },
      {
        question: "How do I track my investment and returns?",
        answer:
          "The Food Hybrid online portal provides a dashboard where you can track your stock, sales, and profit in real time.",
      },
      {
        question: "Can I withdraw my investment early?",
        answer:
          "No. Once an investment cycle starts, the funds are committed for the full 15-week period until the capital and all returns are received.",
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
            <h2 className="text-lg font-[700] text-[#D3D3D3]">
              {category.category}
            </h2>
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
                    <AccordionContent>
                      {Array.isArray(question.answer) ? (
                        <ul className="list-disc pl-5 space-y-2">
                          {question.answer.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        question.answer
                      )}
                    </AccordionContent>
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
