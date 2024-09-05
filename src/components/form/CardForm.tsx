"use client"
import { useState } from "react";
import FormSection from "./FormSection";
import { formData } from "@/app/lib/data";

export default function CardForm() {
  const [formValues, setFormValues] = useState<{ [key: number]: string | number }>({});
  const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: string | null }>({});
  const [otherInputs, setOtherInputs] = useState<{ [key: number]: string }>({});
  

  const handleInputChange = (questionID: number, value: string | number) => {
    setFormValues((prev) => ({ ...prev, [questionID]: value }));
  };

  const handleRadioChange = (questionID: number, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [questionID]: value }));

    // Clear other input if not "Other"
    if (value !== "Other") {
      setOtherInputs((prev) => ({ ...prev, [questionID]: "" }));
    }
  };

  const handleOtherInputChange = (questionID: number, value: string) => {
    setOtherInputs((prev) => ({ ...prev, [questionID]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    const formDataToSave = {
      formValues,
      selectedOptions,
      otherInputs,
    };

    console.log("Form Data to Save:", formDataToSave);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      {formData.map((form) => (
        <div key={form.id}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
           {form.formName}
          </h2>
          <p className="text-gray-600 mb-6">{form.description}</p>
          {form.sections.map((section) => (
            <FormSection
              key={section.sectionID}
              section={section as Section}
              formValues={formValues}
              selectedOptions={selectedOptions}
              handleRadioChange={handleRadioChange}
              otherInputs={otherInputs}
              handleOtherInputChange={handleOtherInputChange}
              handleInputChange={handleInputChange} // Pass input change handler
            />
          ))}
        </div>
      ))}
      <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md shadow hover:bg-blue-700 transition duration-150">
        Submit
      </button>
    </form>
  );
}
