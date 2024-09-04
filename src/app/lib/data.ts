export const greetings = {
  description: `Dear Alumni, President University July 2023 Graduates,
Greeting from President University!

We hope this message finds you well. As part of President University commitment to continuously improve the quality of education and better understand the outcomes of our programs, we are excited to invite you to participate in Alumni Tracer Study.

The Alumni Tracer Study is an important initiative that helps us gather valuable information about your post- graduation experiences and achievements. Your input will provide us with valuable insights that will contribute to enhancing our programs and services for now on and in the future.

The survey will take approximately 15 minutes to complete and your responses will remain confidential.
If you have any questions or require further assistance, please do not hesitate to contact Arya Ferdinan at WA 0822-9973-1571, Email: alumni@president.ac.id.

Thank you for your continued support and commitment to President University.

Sincerely, 
Matnur Syuryadi
Head of Alumni Relations Bureau 
Email: matnurs@president.ac.id 
WA: 0813 1991 9369
`,
};

export const formData = [
  {
    id: "form1",
    formName: "Survey Form",
    description: "Assessment Form",
    sections: [
      {
        sectionID: 1,
        sectionName: "Personal Information",
        questions: [
          {
            questionID: "q1",
            questionText: "What is your full name?",
            questionType: "text",
          },
          {
            questionID: "q2",
            questionText: "What is your email address?",
            questionType: "email",
          },
          {
            questionID: "q3",
            questionText: "What is your phone number?",
            questionType: "number",
          },
        ],
      },
      {
        sectionID: 2,
        sectionName: "Preferences",
        questions: [
          {
            questionID: "q4",
            questionText: "What is your preferred contact method?",
            questionType: "radio",
            options: [
              { optionID: "o1", optionText: "Email" },
              { optionID: "o2", optionText: "Phone" },
              { optionID: "o3", optionText: "Other" },
            ],
          },
        ],
      },
    ],
    createdAt: "2024-09-03T00:00:00Z",
    updatedAt: "2024-09-03T00:00:00Z",
  },
];
