"use client";
import { formData } from "@/app/lib/data";
import { useState } from "react";
import FormSection from "./FormSection";


export default function CardForm() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="w-full p-4">
      {formData.map((form) => (
        <div key={form.id}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {form.formName}
          </h2>
          <p className="text-gray-600 mb-6">{form.description}</p>
          {form.sections.map((section) => (
            <FormSection
              key={section.sectionID}
              section={section}
              selectedOption={selectedOption}
              handleRadioChange={handleRadioChange}
            />
          ))}
        </div>
      ))}
      <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md shadow hover:bg-blue-700 transition duration-150">
        Submit
      </button>
    </div>
  );
}
