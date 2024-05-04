import { addJobs, setLoading, setTotal } from "../store/jobs";

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
      dispatch(addJobs([...oldData, ...data?.jdList]));
      dispatch(setTotal(data?.totalCount));
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
