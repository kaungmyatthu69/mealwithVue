import axios from "axios";
export  const domainUrl = "https://www.themealdb.com/api/json/v1/1/"
export const axiosInstance = axios.create({
    baseURL :domainUrl,
    timeout:100000
})

export const getAllMeals = axiosInstance.get(`filter.php?c=Dessert`);

export const getCategory=axiosInstance.get("https://www.themealdb.com/api/json/v1/1/categories.php")