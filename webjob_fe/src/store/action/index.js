import { LOGIN_USER, FETCH_LIST_JOB, FETCH_DETAILS_JOB } from "./actionType";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export const loginSuccess = (payload) => {
  return {
    type: LOGIN_USER,
    payload,
  };
};

export const loginUser = (credential, callback = () => {}) => {
  return async (dispatch, getState) => {
    try {
      let { data } = await axios.post(`${baseUrl}/login`, {
        email: credential.email,
        password: credential.password,
      });
      if (data.access_token) {
        const access_token = data.access_token;
        localStorage.setItem("access_token", access_token);
        callback();
      }
    } catch (error) {
      console.log(error, "err fe");
    }
  };
};

export const fetchListJobsSuccess = (payload) => {
  return {
    type: FETCH_LIST_JOB,
    payload,
  };
};

export const fetchListJob = (query) => {
  return async (dispatch, getState) => {
    try {
      console.log(query, "query <><>");
      let url = `${baseUrl}/list_job?`;
      if (query) {
        if (query.description) {
          url += `description=${query.description}`;
        }
        if (query.location) {
          url += `&location=${query.location}`;
        }
        if (query.full_time) {
          url += `&full_time=${query.full_time}`;
        }
        if (query.page) {
          url += `&page=${query.page}`;
        } else {
          url += `&page=1`;
        }
      }
      //   callback();
      let { data } = await axios.get(url, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      console.log(data, "ini datanya <<");
      dispatch(fetchListJobsSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchDetailsJobSuccess = (payload) => {
  return {
    type: FETCH_DETAILS_JOB,
    payload,
  };
};

export const fetchDetailsJob = (id, callback = () => {}) => {
  return async (dispatch, getState) => {
    try {
      let { data } = await axios.get(`${baseUrl}/list_job/${id}`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      console.log(data, "details");
      dispatch(fetchDetailsJobSuccess(data));
      callback();
    } catch (error) {
      console.log(error);
    }
  };
};
