import axios from "axios";
import { useQuery} from "react-query";

const fetchCategoryList = () => {
  return axios.get("https://dummyjson.com/products/categories");
};

export const useCategoryData = () => {
  return useQuery("category", fetchCategoryList);
};
