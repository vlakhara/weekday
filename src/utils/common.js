import { NUMBER_EMPLOYEES, TECKS, isFilterApplied } from "./filterUtils";

export const getPostedAgoDayString = () => {
  const num = getRandomNumber(10);
  return num === 1 ? `Posted ${num} day ago` : `Posted ${num} days ago`;
};

export const getFormatedString = (str = "") => {
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

export const updateExperienceStr = (year) => {
  const exp = year;
  return exp === 1 ? `${exp} year` : `${exp} years`;
};

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

export const getRandomNoOfEmployees = () => {
  return NUMBER_EMPLOYEES[Math.floor(Math.random() * NUMBER_EMPLOYEES.length)];
};
