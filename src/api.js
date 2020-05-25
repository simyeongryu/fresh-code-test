import axios from "axios";

// const url = axios.create({
//   baseURL: "https://exam.freshcode.me/front/"
// })

export const api = {
  banners() {
    return axios.get("banners");
  },
  salads() {
    return axios.get("salads");
  },
  dayoff() {
    return axios.get("dayoff");
  }
};
