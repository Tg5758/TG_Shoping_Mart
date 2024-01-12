import axios from "axios";
import { useQuery } from "react-query";

export const useProductList = (params, data) => {
  const { categoryName, searchText, page } = data;
  return useQuery(
    ["product-list", params, page, searchText, categoryName],
    () => {
      return axios.get(`https://dummyjson.com/products${params}`);
    }
  );
};
