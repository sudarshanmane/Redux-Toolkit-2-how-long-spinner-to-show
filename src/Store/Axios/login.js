import { message } from "antd";
import { http } from "./baseUrl";

export const userLogin = async (action) => {
  try {
    const response = await http.post(action.URL, action.payload);
    return response;
  } catch (error) {
    console.log(error);
    message.error(error.response.data);
    return;
  }
};
