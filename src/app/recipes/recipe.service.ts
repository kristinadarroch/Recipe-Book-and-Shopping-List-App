import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

    private recipes: Recipe[] = [
        new Recipe('Peanut Butter Chocolate Smoothie', 
        'A really yummy smoothie for breakfast', 
        'https://lmld.org/wp-content/uploads/2016/12/chocolate-peanut-butter-banana-smoothie-5.jpg', 
        [
            new Ingredient('Peanut Butter', 2),
            new Ingredient('Chocolate Protein Powder', 1),
            new Ingredient('Frozen Banana', 1),
            new Ingredient('Almond Milk', 1)
        ]),
        new Recipe('Protein Pancakes', 
        'A healthier alternative to pancakes', 
        'http://cf.thecreativebite.com/wp-content/uploads/2016/02/Light-Fluffy-Banana-Protein-Pancakes-6.jpg', 
        [
            new Ingredient('Egg', 2),
            new Ingredient('Almond Butter', 1),
            new Ingredient('Vanilla Protein Powder', 1),
            new Ingredient('Almond Milk', 1)
        ])
      ];

      constructor(private slService: ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index: number){
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}