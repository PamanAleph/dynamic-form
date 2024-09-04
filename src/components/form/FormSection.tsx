import React from 'react'

export default function FormSection({
    section,
    selectedOption,
    handleRadioChange,
  }: FormSectionProps) {

    function renderInput(
        question: Question,
        selectedOption: string | null,
        handleRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void
      ) {
        switch (question.questionType) {
          case "text":
            return (
              <input
                type="text"
                id={question.questionID}
                name={question.questionID}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            );
          case "email":
            return (
              <input
                type="email"
                id={question.questionID}
                name={question.questionID}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            );
          case "number":
            return (
              <input
                type="number"
                id={question.questionID}
                name={question.questionID}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            );
          case "radio":
            return (
              <div className="flex flex-col space-y-2">
                {question.options?.map((option) => (
                  <label key={option.optionID} className="inline-flex items-center">
                    <input
                      type="radio"
                      name={question.questionID}
                      value={option.optionText}
                      className="form-radio text-blue-600"
                      onChange={handleRadioChange}
                    />
                    <span className="ml-2 text-gray-700">{option.optionText}</span>
                  </label>
                ))}
                {selectedOption === "Other" && (
                  <input
                    type="text"
                    placeholder="Please specify"
                    className="mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                )}
              </div>
            );
          default:
            return null;
        }
      }
      
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-medium text-gray-700 mb-3">
          {section.sectionName}
        </h3>
        {section.questions.map((question) => (
          <div key={question.questionID} className="mb-4">
            <label
              htmlFor={question.questionID}
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              {question.questionText}
            </label>
            {renderInput(question, selectedOption, handleRadioChange)}
          </div>
        ))}
      </div>
    );
  }
