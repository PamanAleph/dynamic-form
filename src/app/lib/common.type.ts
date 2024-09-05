type Option = {
  optionID: number;
  optionText: string;
};

type Question = {
  questionID: number;
  questionText: string;
  questionType: "text" | "email" | "number" | "radio";
  options?: Option[];
};

type Section = {
  sectionID: number;
  sectionName: string;
  questions: Question[];
};

type DataForm = {
  id: number;
  formName: string;
  description: string;
  sections: Section[];
  createdAt: string;
  updatedAt: string;
};

interface FormSectionProps {
  section: Section;
  selectedOptions: { [key: number]: string | null };
  handleRadioChange: (questionID: number, value: string) => void;
  otherInputs: { [key: number]: string };
  formValues: { [key: number]: string | number };
  handleOtherInputChange: (questionID: number, value: string) => void;
  handleInputChange: (questionID: number, value: string | number) => void;
}
