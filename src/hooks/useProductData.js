import axios from "axios";
import { useQuery } from "react-query";

export const useProductData = (id) => {
  return useQuery(["product-detail", id], ()=>{
    return axios.get(`https://dummyjson.com/products/${id}`)
  });
};
