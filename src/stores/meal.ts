import {defineStore} from "pinia";
import type {meal} from  "@/types/Meal"
import type {category} from "@/types/Meal";

export const useMealStore=defineStore('mealStore',{
  state:()=>({
   meals :<meal[]>[],
      FavList :<meal[]> [],
      AddToCartList :<meal[]>[],
      Category  : <category[]>[],
      SelectedCategory:''
  }),
  getters:{
        getSomeMeals:(state:any)=>{
            return state.meals.slice(0,8)
        }
  },
  actions:{
   async getMeals(){
     const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert');
     const vegetarian = await res.json();
       console.log(vegetarian.meals)
     this.meals = vegetarian.meals
   },
      async getCategory(){
       const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
       const result = await res.json()
          this.Category= result.categories
      },
      async getMealsByCategory(name:string){
       const res = await  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+name);
       const result = await res.json();
       this.meals = result.meals
          this.SelectedCategory = name
      },
      async searchByName(name:string){
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+name);
        const result = await res.json();
        this.meals = result.meals
      },
   toggleFav(meal:meal){
      if(!this.FavList.includes(meal)) {
          this.FavList.push(meal)
      }else {
          this.FavList =  this.FavList.filter((item)=>item.idMeal !== meal.idMeal)
      }
   },
      AddToCart(meal:meal){
          if(!this.AddToCartList.includes(meal)) {
              this.AddToCartList.push(meal)
          }else {
              this.AddToCartList =  this.AddToCartList.filter((item)=>item.idMeal !== meal.idMeal)

          }
      }

  },

})