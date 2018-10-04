import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  // the only thing that will be stored in recipes is a Recipe object that will ALWAYS be an array.
  recipes: Recipe[] = [
    new Recipe('a test recipe', 'this is a test', 'http://hips.hearstapps.com/del.h-cdn.co/assets/16/21/1464124800-delish-grilled-chicken-sweet-chili.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
