import axios from "axios";

export const api = {
  banners() {
    return axios({
      method: "GET",
      url: "banners",
      "Access-Control-Allow-Origin": "*"
    });
  },
  salads() {
    return axios.get("salads");
  },
  dayoff() {
    return axios.get("dayoff");
  }
};
