export const ROLES = [
  { label: "Backend", category: "" },
  { label: "Frontend", category: "" },
  { label: "Fullstack", category: "" },
  { label: "IOS", category: "" },
  { label: "Flutter", category: "" },
  { label: "React Native", category: "" },
  { label: "Android", category: "" },
  { label: "Tect Lead", category: "" },
  { label: "Dev-Ops", category: "" },
  { label: "Data Engineer", category: "" },
  { label: "Data Science", category: "" },
  { label: "Computer Vision", category: "" },
  { label: "Nlp", category: "" },
  { label: "Deep-Learning", category: "" },
  { label: "Test / Qa", category: "" },
  { label: "Web3", category: "" },
  { label: "Sre", category: "" },
  { label: "Data-Infrastructure", category: "" },
  { label: "Design", category: "" },
  { label: "Design-Manager", category: "" },
  { label: "Graphic-Designer", category: "" },
  { label: "Product-Manager", category: "" },
  { label: "Operations-Manager", category: "" },
  { label: "Founder's Office/Chief Of Staff", category: "" },
  { label: "Sales Development Representative", category: "" },
  { label: "Account Excutive", category: "" },
  { label: "Account Manager", category: "" },
  { label: "Degital Marketing Manager", category: "" },
  { label: "Growth Hacker", category: "" },
  { label: "Marketing", category: "" },
  { label: "Product Marketing Manager", category: "" },
  { label: "Hardware", category: "" },
  { label: "Mechanical", category: "" },
  { label: "Systems", category: "" },
  { label: "Business Analyst", category: "" },
  { label: "Data Analyst", category: "" },
  { label: "Project Management", category: "" },
  { label: "Management", category: "" },
  { label: "Legal", category: "" },
  { label: "HR", category: "" },
  { label: "Finance", category: "" },
];

export const NUMBER_EMPLOYEES = [
  "1-10",
  "11-20",
  "21-50",
  "51-100",
  "101-200",
  "201-500",
  "500+",
];

export const EXPERIENCE = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export const JOB_TYPE = ["Remote", "Hybrid", "In-Office"];

export const MIN_BASE_SALARY = ["0", "10", "20", "30", "40", "50", "60", "70"];

export const TECKS = [
  "Python",
  "Java",
  "GoLang",
  "Ruby/Rails",
  "C++",
  "Kotlin",
  "Django",
  "C#",
  "GraphQL",
  "Flask",
  "TypeScript",
  "AWS",
  "JavaScript",
  "Rust",
  "NodeJS",
  "React",
];

export const isFilterApplied = (filter) => {
  const filterKeys = Object.keys(filter)
    .map((item) => {
      if (filter[item].length > 0) {
        return item;
      }
      return null;
    })
    .filter((item) => item);
  return { isApplied: !!filterKeys.length, filterKeys };
};
