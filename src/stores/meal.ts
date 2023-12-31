import {defineStore} from "pinia";
import type {meal} from "@/types/Meal"
import type {detailMeal} from "@/types/Meal";
import type {category} from "@/types/Meal";
// @ts-ignore
import {axiosInstance, getAllMeals, getCategory} from "@/service/api.js"
import {useLoading} from "vue-loading-overlay";


export const useMealStore = defineStore('mealStore', {
    state: () => ({
        meals: <meal[]>[],
        FavList: <meal[]>[],
        AddToCartList: <meal[]>[],
        detailsMeal: <detailMeal[]>[],
        Category: <category[]>[],
        SelectedCategory: '',
        searchbyName: '',
        isOpenDrawer: <boolean>false,
        isLoading:false,
        notFound:false
    }),
    getters: {
        Ingredient(state: any) {
            let ingredient: string[] = []
            for (let i = 0; i < 20; i++) {
                if (state.detailsMeal[0][`strIngredient${i}`]) {
                    ingredient.push(state.detailsMeal[0][`strIngredient${i}`])
                }
            }
            return ingredient;
        },
        getSomeMeals(state: any) {

            if (state.meals?.length > 8) {
                return state.meals.slice(0, 8)
            } else {
                return state.meals?.slice(0, state.meals.length + 1)
            }
        }
    },
    actions: {
        async getMeals() {
            this.isLoading = true;
            const vueLoading = useLoading({
                active: this.isLoading,
                isFullPage: true,
                loader: 'dots',
            })
            const loader = vueLoading.show();
            try {
                const res = await getAllMeals;
                this.meals = res.data.meals
                loader.hide()
            } catch (e: any) {
                console.log(e.message)
            }

        },
        async getDetailsMealById(id:any) {
            //Loading
            this.isLoading=true;
            const vueLoading = useLoading({
                active: this.isLoading,
                isFullPage: true,
                loader: 'dots',
            })
            const loader = vueLoading.show();

            //Call api
            this.detailsMeal = []
            try {
                const res = await axiosInstance.get(`lookup.php?i=` + id)
                this.detailsMeal = res.data.meals
                this.isLoading=false
                loader.hide()
            } catch (e) {
                console.log(e)
            }

        },
        async getCategory() {
            try {
                const res = await getCategory;
                this.Category = res.data.categories
            } catch (e) {
                console.log(e)
            }

        },
        async getMealsByCategory(name: string) {
            this.meals=[]
            //loader
            this.isLoading = true;
            const vueLoading = useLoading({
                active: this.isLoading,
                isFullPage: true,
                loader: 'dots',
            })
            const loader = vueLoading.show();
            //Call api
            try {
                const res = await axiosInstance.get("filter.php?c=" + name);
                this.meals = res.data.meals;
                this.SelectedCategory = name;
                this.isLoading = false;
                loader.hide();
            } catch (e) {
                console.log(e)
            }

        },
        async searchByName(name: string) {
            this.SelectedCategory=''

            //Loading
            this.isLoading=true;
            const vueLoading = useLoading({
                active: this.isLoading,
                isFullPage: true,
                loader: 'dots',
            })
            const loader = vueLoading.show();
            this.meals=[]

            try {
                const res = await axiosInstance.get("search.php?s=" + name);
                this.meals = res.data.meals
                if(!this.meals){
                    this.notFound=true
                }else {
                    this.notFound=false
                }
                this.searchbyName = ""
                this.isLoading=false
                loader.hide()


            } catch (e) {
                console.log(e)
            }

        },
        AddToFav(meal: meal) {
            this.FavList.push(meal)
        },
        RemoveFromFav(meal: meal) {
            this.FavList = this.FavList.filter((item: any) => item.idMeal !== meal.idMeal)

        },
        AddToCart(meal: meal) {
            this.AddToCartList.push(meal)
        },
        RemoveFromCart(meal: meal) {
            this.AddToCartList = this.AddToCartList.filter((item: any) => item.idMeal !== meal.idMeal)
        },
        toggleDrawer() {
            this.isOpenDrawer = !this.isOpenDrawer
        }
    }
})