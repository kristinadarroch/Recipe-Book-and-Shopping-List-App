import { Ingredient } from "../shared/ingredient.model";

export class Recipe{
    // a blueprint for objects we create - where you declare the objects
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, image: string, ingredients: Ingredient[]){
        // assign arguments to properties
        this.name = name;
        this.description = desc;
        this.imagePath = image;
        this.ingredients = ingredients;
    }
}