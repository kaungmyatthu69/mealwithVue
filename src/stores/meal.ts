import {defineStore} from "pinia";
import type {meal} from  "@/types/Meal"
export const useMealStore=defineStore('mealStore',{
  state:()=>({
   meals :<meal[]>[],
      FavList :<meal[]> [],
      AddToCartList :<meal[]>[]
  }),
  getters:{

  },
  actions:{
   async getMeals(){
     const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert');
     const vegetarian = await res.json();
       console.log(vegetarian.meals)
     this.meals = vegetarian.meals
   },
   toggleFav(meal:meal){
      if(!this.FavList.includes(meal)) {
          this.FavList.push({...meal})
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

  }
})