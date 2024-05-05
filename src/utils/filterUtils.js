export const ROLES = [
  "Backend",
  "Frontend",
  "Fullstack",
  "Flutter",
  "React Native",
  "Android",
  "Frontend",
  "Tect Lead",
  "Dev-Ops",
  "Data Engineer",
  "Data Science",
  "Computer Vision",
  "Nlp",
  "Deep-Learning",
  "Test / Qa",
  "Web3",
  "Deep-Learning",
  "Sre",
  "Data-Infrastructure",
  "Design",
  "Design-Manager",
  "Graphic-Designer",
  "Product-Manager",
  "Operations-Manager",
  "Founder's Office/Chief Of Staff",
  "Sales Development Representative",
  "Account Excutive",
  "Account Manager",
  "Degital Marketing Manager",
  "Growth Hacker",
  "Marketing",
  "Product Marketing Manager",
  "Hardware",
  "Mechanical",
  "Systems",
  "Business Analyst",
  "Data Analyst",
  "Project Management",
  "Management",
  "Legal",
  "HR",
  "Finance",
  "IOS",
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
