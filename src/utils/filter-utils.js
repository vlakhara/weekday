export const ROLES = [
  { label: "Backend", category: "Engineering" },
  { label: "Frontend", category: "Engineering" },
  { label: "Fullstack", category: "Engineering" },
  { label: "IOS", category: "Engineering" },
  { label: "Flutter", category: "Engineering" },
  { label: "React Native", category: "Engineering" },
  { label: "Android", category: "Engineering" },
  { label: "Tect Lead", category: "Engineering" },
  { label: "Dev-Ops", category: "Engineering" },
  { label: "Data Engineer", category: "Engineering" },
  { label: "Data Science", category: "Engineering" },
  { label: "Computer Vision", category: "Engineering" },
  { label: "Nlp", category: "Engineering" },
  { label: "Deep-Learning", category: "Engineering" },
  { label: "Test / Qa", category: "Engineering" },
  { label: "Web3", category: "Engineering" },
  { label: "Sre", category: "Engineering" },
  { label: "Data-Infrastructure", category: "Engineering" },
  { label: "Design", category: "Design" },
  { label: "Design-Manager", category: "Design" },
  { label: "Graphic Designer", category: "Design" },
  { label: "Product Designer", category: "Design" },
  { label: "Product Manager", category: "Product" },
  { label: "Operations-Manager", category: "Operations" },
  { label: "Founder's Office/Chief Of Staff", category: "Operations" },
  { label: "Sales Development Representative", category: "Sales" },
  { label: "Account Excutive", category: "Sales" },
  { label: "Account Manager", category: "Sales" },
  { label: "Degital Marketing Manager", category: "Marketing" },
  { label: "Growth Hacker", category: "Marketing" },
  { label: "Marketing", category: "Marketing" },
  { label: "Product Marketing Manager", category: "Marketing" },
  { label: "Hardware", category: "Other Engineering" },
  { label: "Mechanical", category: "Other Engineering" },
  { label: "Systems", category: "Other Engineering" },
  { label: "Business Analyst", category: "Business Analyst" },
  { label: "Data Analyst", category: "Data Analyst" },
  { label: "Project Manager", category: "Project Manager" },
  { label: "Management", category: "Management" },
  { label: "Legal", category: "Legal" },
  { label: "Hr", category: "HR" },
  { label: "Finance", category: "Finance" },
];

export const NUMBER_EMPLOYEES = [
  { label: "1-10" },
  { label: "11-20" },
  { label: "21-50" },
  { label: "51-100" },
  { label: "101-200" },
  { label: "201-500" },
  { label: "500+" },
];

export const EXPERIENCE = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export const JOB_TYPE = [
  { label: "Remote" },
  { label: "Hybrid" },
  { label: "In-Office" },
];

export const MIN_BASE_SALARY = ["0", "10", "20", "30", "40", "50", "60", "70"];

export const TECKS = [
  { label: "Python" },
  { label: "Java" },
  { label: "GoLang" },
  { label: "Ruby/Rails" },
  { label: "C++" },
  { label: "Kotlin" },
  { label: "Django" },
  { label: "C#" },
  { label: "GraphQL" },
  { label: "Flask" },
  { label: "TypeScript" },
  { label: "AWS" },
  { label: "JavaScript" },
  { label: "Rust" },
  { label: "NodeJS" },
  { label: "React" },
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
