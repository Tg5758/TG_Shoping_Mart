import axios from "axios";
import { useMutation } from "react-query";

export const useLoginData = (payload) => {
  return useMutation(() => {
    return axios.post(
      "https://dummyjson.com/auth/login",
      JSON.stringify(payload),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  });
};
