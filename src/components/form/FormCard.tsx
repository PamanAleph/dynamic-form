"use client"
import React, { useState } from "react";
import FormSection from "./FormSection";
import { sectionDataLAMTEKNIK, questionData } from "@/app/lib/data";

export default function FormCard() {
  const [formValues, setFormValues] = useState<{ [key: number]: string | number }>({});

  const handleInputChange = (questionID: number, value: string | number) => {
    setFormValues((prev) => ({ ...prev, [questionID]: value }));
  };

  const renderQuestion = (question: any, numberPrefix: string = "") => (
    <FormSection
      key={question.id}
      question={question}
      numberPrefix={numberPrefix}
      formValues={formValues}
      handleInputChange={handleInputChange}
    />
  );

  const renderQuestions = (sectionID: number) => {
    const sectionQuestions = questionData.filter((question) => question.section_id === sectionID);
    const renderedChildQuestions = new Set<number>(); 
    let questionNumber = 1;

    return sectionQuestions.map((question) => {
      if (renderedChildQuestions.has(question.id)) {
        return null;
      }

      let result = [];

      // Render the root question
      result.push(renderQuestion(question, String(questionNumber)));

      // cek question apakah memiliki children berdasarkan children_value
      if (question.children_value && question.children_value.id) {
        question.children_value.id.forEach((childId: number, childIndex: number) => {
          const childQuestion = questionData.find((child) => child.id === childId);
          if (childQuestion) {
            const childNumber = `${questionNumber}.${childIndex + 1}`; // Child numbering 
            result.push(renderQuestion(childQuestion, childNumber));
            renderedChildQuestions.add(childId); // Mark this child question as rendered
          }
        });
      }

      // numbering
      questionNumber++;

      return <div key={question.id}>{result}</div>;
    });
  };

  return (
    <form className="w-full space-y-2" onSubmit={(e) => e.preventDefault()}>
      {sectionDataLAMTEKNIK.map((section) => (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 max-w-3xl mx-auto" key={section.section_id}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 ">{section.section_name}</h2>
          <p className="text-gray-600 mb-6 text-justify">{section.section_description}</p>
          {renderQuestions(section.section_id)}
        </div>
      ))}
      <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md shadow hover:bg-blue-700 transition duration-150">
        Submit
      </button>
    </form>
  );
}
