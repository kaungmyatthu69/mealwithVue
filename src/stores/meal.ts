import {defineStore} from "pinia";
import type {meal} from  "@/types/Meal"

import type {detailMeal} from "@/types/Meal";

import type {category} from "@/types/Meal";


export const useMealStore=defineStore('mealStore',{
    state:()=>({
   meals :<meal[]>[],
      FavList :<meal[]> [],
      AddToCartList :<meal[]>[],
      detailsMeal :<detailMeal[]>[],
      Category  : <category[]>[],
      SelectedCategory:'',
        searchbyName :''
  }),
    getters:{
        Ingredient(state:any) {
            let ingredient: string[] = []
            for (let i = 0; i < 20; i++) {
                if (state.detailsMeal[0][`strIngredient${i}`]) {
                    ingredient.push(state.detailsMeal[0][`strIngredient${i}`])
                }
            }
            return ingredient;
        },
      getSomeMeals(state:any){
          return state.meals.slice(0,8)
      }
    },
    actions:{
        async getMeals(){
     const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert');
     const vegetarian = await res.json();
     this.meals = vegetarian.meals
   },
    async getDetailsMealById(id:number | string){
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
    const meal = await res.json();
    this.detailsMeal = meal.meals
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
this.searchbyName = ""
      },
      AddToFav(meal:meal){
          this.FavList.push(meal)
      },
      RemoveFromFav(meal:meal){
          this.FavList =  this.FavList.filter((item:any)=>item.idMeal !== meal.idMeal)

      },
      AddToCart(meal:meal){
              this.AddToCartList.push(meal)
      },
     RemoveFromCart(meal:meal){
             this.AddToCartList =  this.AddToCartList.filter((item:any)=>item.idMeal !== meal.idMeal)

     }
    }
})