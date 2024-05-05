import { addJobs, setLoading, setTotal } from "../store/jobs";
import {
  getPostedAgoDayString,
  getRandomNoOfEmployees,
  getRandomNumber,
  getRandomTecks,
} from "./common";
import { isFilterApplied } from "./filterUtils";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const LIMIT = 10;
let offset = 0;

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

export const filterdData = (tempJobsData, filter) => (dispatch) => {
  dispatch(setLoading(true));
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
      flag.basePay = item.minJdSalary >= filter.basePay;
    }
    if (filter.employees.length) {
      flag.employees = filter.employees.includes(item.noOfEmployees);
    }
    return filterKeys.every((item) => flag[item]);
  });
  dispatch(setLoading(false));
  return data;
};
