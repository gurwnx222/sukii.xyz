"use client";

import React from "react";
import { createContext, useContext, useState } from "react";
import { ChevronDown } from "lucide-react";

// Accordion Context
const AccordionContext = createContext(undefined);

const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion");
  }
  return context;
};

// Accordion Component
const Accordion = ({ type, collapsible = false, className = "", children }) => {
  const [value, setValue] = useState("");

  const onValueChange = (newValue) => {
    if (type === "single") {
      setValue(value === newValue && collapsible ? "" : newValue);
    }
  };

  return (
    <AccordionContext.Provider
      value={{ value, onValueChange, type, collapsible }}
    >
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
};

// AccordionItem Component
const AccordionItem = ({ value, className = "", children }) => {
  return (
    <div className={className} data-state={value} data-value={value}>
      {children}
    </div>
  );
};

// AccordionTrigger Component
const AccordionTrigger = ({ className = "", children }) => {
  const { value: accordionValue, onValueChange } = useAccordion();

  const handleClick = (e) => {
    const item = e.currentTarget.closest("[data-value]");
    const itemValue = item?.getAttribute("data-value");
    if (itemValue && onValueChange) {
      onValueChange(itemValue);
    }
  };

  // Get the current item value to check if it's open
  const getCurrentItemValue = (element) => {
    const item = element.closest("[data-value]");
    return item?.getAttribute("data-value") || null;
  };

  const [triggerRef, setTriggerRef] = useState(null);
  const currentItemValue = triggerRef ? getCurrentItemValue(triggerRef) : null;
  const isOpen = accordionValue === currentItemValue;

  return (
    <button
      ref={setTriggerRef}
      className={className}
      onClick={handleClick}
      type="button"
    >
      <div className="flex items-center justify-between w-full">
        <span className="text-white font-medium text-base md:text-lg pr-4">
          {children}
        </span>
        <ChevronDown
          className="h-5 w-5 text-purple-300 shrink-0 transition-transform duration-300 ease-in-out"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>
    </button>
  );
};

// AccordionContent Component
const AccordionContent = ({ className = "", children }) => {
  const { value: accordionValue } = useAccordion();

  const getItemValue = (element) => {
    while (element) {
      const value = element.getAttribute("data-value");
      if (value) return value;
      element = element.parentElement;
    }
    return null;
  };

  const [contentRef, setContentRef] = useState(null);
  const itemValue = contentRef ? getItemValue(contentRef) : null;
  const isOpen = accordionValue === itemValue;

  return (
    <div
      ref={setContentRef}
      className={`overflow-hidden transition-all duration-300 ease-in-out`}
      style={{
        maxHeight: isOpen ? "500px" : "0",
        opacity: isOpen ? 1 : 0,
        paddingTop: isOpen ? "0" : "0",
        paddingBottom: isOpen ? "0" : "0",
      }}
    >
      <div
        className={className}
        style={{
          transform: isOpen ? "translateY(0)" : "translateY(-10px)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {children}
      </div>
    </div>
  );
};

const faqData = [
  {
    id: "item-1",
    question: "What is sukii?",
    answer:
      "Sukii is a free educational platform created by Nuru Labs, dedicated to providing high-quality knowledge in project coordination, systems analytics, and various other technology fields. Our self-paced courses are designed to help learners develop essential skills, and we also offer free certifications to validate their expertise.",
  },
  {
    id: "item-2",
    question: "Do I get a certificate after completing a course?",
    answer:
      "While our courses do not automatically grant certifications, we provide a dedicated testing environment where you can take certification exams. Our courses are designed to equip you with the knowledge and skills needed to successfully pass these exams and earn your certification.",
  },
  {
    id: "item-3",
    question: "What subjects or skills do you cover?",
    answer:
      "We offer courses in systems analytics, project coordination, blockchain analytics, and security implementation. Our goal is to equip learners with the essential skills needed to earn our certifications, as well as other industry-recognized credentials, to enhance their IT careers. Whether you're looking to advance in your current role, create job opportunities, or secure a position in the global tech industry, our courses are designed to support your growth. We continuously update our platform to provide the most relevant and up-to-date learning experience.",
  },
  {
    id: "item-4",
    question: "How can I stay involved with the Nuru Labs community?",
    answer:
      "You can stay engaged by joining our Discord community and following us on social media. There, you'll receive updates, connect with other learners, ask questions, and participate in discussions. We also welcome your feedback to help us improve the platform and enhance your learning experience!",
  },
  {
    id: "item-5",
    question: "What future updates can I expect?",
    answer:
      "We are continuously improving our platform and will share updates on new features, courses, and enhancements in our Discord community. Stay connected with us there to be the first to know about upcoming developments. Thank you for your support!",
  },
];

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background stars/dots effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-200 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Frequently Asked Questions
        </h1>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-none"
              >
                <AccordionTrigger className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-lg px-6 py-4 hover:bg-slate-700/80 transition-all duration-300 ease-in-out text-left [&[data-state=open]]:rounded-b-none [&[data-state=open]]:border-b-0 hover:no-underline w-full">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 border-t-0 rounded-b-lg px-6 py-4">
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
