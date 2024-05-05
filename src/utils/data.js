import { addJobs, setLoading, setTotal } from "../store/jobs";
import {
  getPostedAgoDayString,
  getRandomNoOfEmployees,
  getRandomNumber,
  getRandomTecks,
} from "./common";
import { isFilterApplied } from "./filter-utils";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const LIMIT = 10;
let offset = 0;

/**
 * @purpose Fetch Jobs Data
 * @param {*}
 * @returns Filtered Data
 */
export const fetchData =
  (page = 1, oldData = []) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      offset = (page - 1) * LIMIT;
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          method: "POST",
          headers: myHeaders,
          payload: JSON.stringify({
            limit: LIMIT,
            offset,
          }),
        }
      );
      const data = await response.json();

      /**
       * Some Data were not in job item, so I added some data to make filters work
       * getPostedAgoDayString, getRandomNumber from minExp if Null, getRandomTecks, getRandomNoOfEmployees
       */

      const updatedDate = data?.jdList?.map((item) => ({
        ...item,
        postedDate: getPostedAgoDayString(),
        minExp: item?.minExp ?? getRandomNumber(10),
        tecks: getRandomTecks(),
        noOfEmployees: getRandomNoOfEmployees(),
      }));
      dispatch(addJobs([...oldData, ...updatedDate]));
      dispatch(setTotal(data?.totalCount));
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

/**
 * @purpose Get Filtered Data
 * @param {*} tempJobsData
 * @param {*} filter
 * @returns Filtered Data
 */
export const filterdData = (tempJobsData, filter) => {
  const { filterKeys } = isFilterApplied(filter);
  const data = tempJobsData?.filter((item) => {
    let flag = {};
    if (filter.searchText) {
      flag.searchText = item.companyName.includes(filter["searchText"]);
    }
    if (filter.roles.length) {
      const roles = [...filter.roles.map((item) => item.toLowerCase())];
      flag.roles = roles.includes(item.jobRole);
    }
    if (filter.remote.length) {
      const remote = [...filter.remote.map((item) => item.toLowerCase())];
      flag.remote =
        remote.includes(item.location) ||
        (remote.includes("in-office") &&
          !["remote", "hybrid"].includes(item.location));
    }
    if (filter.experience.length) {
      flag.experience = item.minExp <= filter.experience;
    }
    if (filter.tecks.length) {
      flag.tecks = filter.tecks.some((tech) => item.tecks.includes(tech));
    }
    if (filter.basePay.length) {
      const salaryToCompare = item.minJdSalary ?? item.maxJdSalary;
      flag.basePay = salaryToCompare >= filter.basePay;
    }
    if (filter.employees.length) {
      flag.employees = filter.employees.includes(item.noOfEmployees);
    }
    return filterKeys.every((item) => flag[item]);
  });
  return data;
};
