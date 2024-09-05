import React from "react";

export default function FormSection({
  section,
  formValues,
  selectedOptions,
  handleRadioChange,
  otherInputs,
  handleOtherInputChange,
  handleInputChange,
}: FormSectionProps) {
  function renderInput(question: Question) {
    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      if (value < 0) {
        e.target.value = "0";
      }
      handleInputChange(question.questionID, value);
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleInputChange(question.questionID, e.target.value);
    };

    switch (question.questionType) {
      case "text":
      case "email":
        return (
          <input
            type={question.questionType}
            id={question.questionID.toString()}
            name={question.questionID.toString()}
            value={formValues[question.questionID] || ""}
            onChange={handleTextChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        );
      case "number":
        return (
          <input
            type="number"
            id={question.questionID.toString()}
            name={question.questionID.toString()}
            min="0"
            value={formValues[question.questionID] || ""}
            onChange={handleNumberChange}
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
                  name={question.questionID.toString()}
                  value={option.optionText}
                  className="form-radio text-blue-600"
                  checked={selectedOptions[question.questionID] === option.optionText}
                  onChange={(e) => handleRadioChange(question.questionID, e.target.value)}
                />
                <span className="ml-2 text-gray-700">{option.optionText}</span>
              </label>
            ))}
            {selectedOptions[question.questionID] === "Other" && (
              <input
                type="text"
                placeholder="Please specify"
                value={otherInputs[question.questionID] || ""}
                onChange={(e) => handleOtherInputChange(question.questionID, e.target.value)}
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
       {section.sectionID}. {section.sectionName}
      </h3>
      {section.questions.map((question, index) => (
        <div key={question.questionID} className="mb-4">
          <label
            htmlFor={question.questionID.toString()}
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            <span className="font-semibold">
              {section.sectionID}.{index + 1}
            </span>{" "}
            {question.questionText}
          </label>
          {renderInput(question)}
        </div>
      ))}
    </div>
  );
}
