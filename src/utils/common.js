import { NUMBER_EMPLOYEES, TECKS } from "./filter-utils";

export const getPostedAgoDayString = () => {
  const num = getRandomNumber(10);
  return num === 1 ? `Posted ${num} day ago` : `Posted ${num} days ago`;
};

// Format Common String
export const getFormattedString = (str = "") => {
  const nameArr = str?.split(" ");
  return nameArr
    .map((item) => item?.charAt(0).toLocaleUpperCase() + item.slice(1))
    .join(" ");
};

export const truncateString = (string) => {
  return string?.length > 600 ? string.substring(0, 597) + "..." : string;
};

export const getRandomNumber = (range) => {
  return Math.ceil(Math.random() * range);
};

// Get Formatted Experience String
export const formattedExperienceString = (year) => {
  const exp = year;
  return exp === 1 ? `${exp} year` : `${exp} years`;
};

// Get Formatted Salary String
export const formattedSalaryString = (min, max) => {
  let str = `$${min ?? max} - ${max ?? min} USD`; // Set range of salary to any one if min or max is missing
  return str;
};

// Get Random Tecks
export const getRandomTecks = () => {
  const tecks = [];
  while (true) {
    const randomTech = TECKS[Math.floor(Math.random() * TECKS.length)];
    if (tecks.includes(randomTech)) continue;
    tecks.push(randomTech);
    if (tecks.length === 3) break;
  }
  return tecks;
};

/**
 * Get Random Number Of Employees
 *  This might generate different no of employess for same company,
 *  but by having this we can check filter properly
 * @returns String
 */
export const getRandomNoOfEmployees = () => {
  return NUMBER_EMPLOYEES[Math.floor(Math.random() * NUMBER_EMPLOYEES.length)];
};
