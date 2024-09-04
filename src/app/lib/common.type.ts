type Option = {
  optionID: string;
  optionText: string;
};

type Question = {
  questionID: string;
  questionText: string;
  questionType: string;
  options?: Option[];
};

type Section = {
  sectionID: string;
  sectionName: string;
  questions: Question[];
};

type DataForm = {
  id: string;
  formName: string;
  description: string;
  sections: Section[];
  createdAt: string;
  updatedAt: string;
};
