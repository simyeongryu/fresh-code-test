import axios from "axios";

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
