import {defineStore} from "pinia";
import type {meal} from  "@/types/Meal"
import type {detailMeal} from "@/types/Meal";

export const useMealStore=defineStore('mealStore',{
  state:()=>({
   meals :<meal[]>[],
      FavList :<meal[]> [],
      AddToCartList :<meal[]>[],
      detailsMeal :<detailMeal[]>[]
  }),
  getters:{
        Ingredient(state:any){
            let ingredient :string[]=[]
            for (let i =0; i<20 ; i++ ){
                    if(state.detailsMeal[0][`strIngredient${i}`]){
                        ingredient.push(state.detailsMeal[0][`strIngredient${i}`])
                    }
            }
            return ingredient;
        }
  },
  actions:{
   async getMeals(){
     const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert');
     const vegetarian = await res.json();
     this.meals = vegetarian.meals
   },
      async getDetailsMealById(id:number | string){
       const res= await  fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id)
          const  meal = await res.json();
      this.detailsMeal = meal.meals

      },

      AddToFav(meal:meal){
          this.FavList.push(meal)
      },
      RemoveFromFav(meal:meal){
          this.FavList =  this.FavList.filter((item)=>item.idMeal !== meal.idMeal)

      },
      AddToCart(meal:meal){

              this.AddToCartList.push(meal)
      },
     RemoveFromCart(meal:meal){
             this.AddToCartList =  this.AddToCartList.filter((item)=>item.idMeal !== meal.idMeal)

     }

  }
})