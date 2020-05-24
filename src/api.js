import axios from "axios";

const url = axios.create({
  baseURL: "https://exam.freshcode.me/front/"
})

export const api = {
  banners() {
    return url.get("banners");
  },
  salads() {
    return url.get("salads");
  },
  dayoff() {
    return url.get("dayoff");
  }
};
