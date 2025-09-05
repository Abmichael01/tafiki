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
        question: "What is Tafiki?",
        answer:
          "Tafiki is a revolutionary food logistics brand that transforms the way food moves. We use AI, Data, and a Virtual Distribution model to bridge the gap between food producers, processors, and retailers, without warehouses or middlemen.",
      },
      {
        question: "How does the Tafiki model work?",
        answer: [
          "We connect virtual distributors with retail shops in a seamless food logistics platform.",
          "Retail-ready food products are funded by virtual distributors and fulfilled by Hybrid.",
          "Shops stock on credit and pay only after making sales.",
          "We use real-time inventory sync with AI to match demand and supply.",
          "The entire process eliminates MOQ barriers and reduces overstock and waste.",
        ],
      },
      {
        question: "Who can become a partner?",
        answer:
          "Anyone looking to invest in food logistics and retail can become a partner with Tafiki. We welcome both individual investors and institutional partners who want to participate in our virtual distribution model.",
      },
      {
        question: "What type of shops are involved?",
        answer:
          "We work with small and medium-sized retail shops that have established customer bases but need capital to stock products. These include grocery stores, convenience stores, and food retail outlets across our operational regions.",
      },
    ],
  },
  {
    category: "Investment & Returns",
    questions: [
      {
        question: "How does the investment cycle work?",
        answer: [
          "Partners invest in virtual distribution opportunities through our platform.",
          "Funds are used to supply retail shops with food products on credit.",
          "Shops pay back the investment plus returns after sales are made.",
          "Returns are typically structured over 5-15 week cycles depending on the investment type.",
          "All transactions are tracked and managed through our online portal.",
        ],
      },
      {
        question: "How does Tafiki ensure financial security for partners?",
        answer: [
          "Pre-screened retail shops: Only verified shops with proven sales track records participate.",
          "Real-time inventory monitoring: AI-powered systems track stock movement and sales.",
          "Diversified portfolio: Partners can invest across multiple shops and product categories.",
          "Automated payment systems: All returns are processed automatically through our platform.",
          "Risk management protocols: We maintain strict controls to minimize investment risks.",
        ],
      },
      {
        question: "Is my capital safe with Tafiki?",
        answer: [
          "Your capital is always linked to real food stock and retail operations.",
          "We maintain strict financial controls and monitoring systems.",
          "All transactions are transparent and tracked through our online portal.",
          "We have established partnerships with verified retail shops only.",
          "Our business model is built on actual food sales, not speculative investments.",
        ],
      },
      {
        question: "Can I track my investment?",
        answer:
          "Yes. The Tafiki online portal provides real-time tracking of your investments, showing stock movement, sales progress, and return payments. You can monitor your portfolio performance 24/7.",
      },
      {
        question: "What happens if the shop does not sell all the products?",
        answer:
          "Our AI-powered inventory management system helps prevent overstocking by matching supply with actual demand. In rare cases of slow sales, we work with shops to optimize their inventory and may extend the cycle slightly. We only supply high-demand food products to minimize such risks.",
      },
    ],
  },
  {
    category: "Shop Selection & Stocking",
    questions: [
      {
        question: "How do I choose a shop to invest in?",
        answer:
          "Available retail shops are listed on the Tafiki online portal with detailed information including sales history, location, and performance metrics. Partners can review these details and select shops that align with their investment preferences.",
      },
      {
        question: "Is there a maximum investment limit?",
        answer:
          "Yes. Each shop has a maximum stock capacity to ensure quick sales turnover and optimal inventory management. The online portal prevents over-supply to any single shop, maintaining the efficiency of our virtual distribution model.",
      },
    ],
  },
  {
    category: "Risk & Security",
    questions: [
      {
        question: "How does Tafiki ensure my investment is secure?",
        answer: [
          "The entire process is controlled through our secure online portal for full transparency.",
          "Shops are pre-screened and verified to ensure they have consistent sales history.",
          "AI-powered inventory management prevents excess supply and ensures quicker turnover.",
          "Automated tracking and structured payment schedules prevent financial mismanagement.",
          "Partners receive regular updates and detailed reports via the portal.",
        ],
      },
      {
        question: "Is Tafiki a legally registered company?",
        answer:
          "Yes, Tafiki operates as a fully registered and compliant business entity, operating under established laws and regulations in all our operational regions including Nigeria, UK, and USA.",
      },
      {
        question: "What happens if a shop fails to return sales revenue?",
        answer: [
          "The shop is immediately flagged and removed from our platform.",
          "We implement alternative recovery measures and work with legal channels if necessary.",
          "Our diversified portfolio and risk management systems help mitigate such occurrences.",
          "We maintain reserve funds and insurance coverage to protect partner investments.",
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
          "Yes. Unlike traditional models, Tafiki allows partners to invest in multiple shops simultaneously, providing better diversification and risk management for your investment portfolio.",
      },
      {
        question: "How do I track my investment and returns?",
        answer:
          "The Tafiki online portal provides a comprehensive dashboard where you can track all your investments, monitor stock movement, sales progress, and returns in real time. You'll receive regular updates and detailed reports.",
      },
      {
        question: "Can I withdraw my investment early?",
        answer:
          "Investment terms vary depending on the specific opportunity. Some investments allow for early withdrawal with certain conditions, while others are committed for the full cycle. All terms are clearly outlined before you make an investment decision.",
      },
    ],
  },
];

const AnswerToQuestions: React.FC = () => {
  return (
    <motion.section
      initial="initial"
      className="section-padding space-y-[20px] lg:space-y-[60px] section-spacing"
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
