import { Injectable } from '@angular/core';
import { Recipe } from '../pages/recipes/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class Recipes {
  private recipes: Recipe[] =[
    {
      id: 'r1',
      title:'Schnitzel',
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/960px-Wiener-Schnitzel02.jpg?_=20061220124834',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title:'Spaghetti',
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Spaghetti_1.jpg/960px-Spaghetti_1.jpg?_=20140203060102',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    },
  ]
  constructor(){}

  getAllRecipes() {
    return [...this.recipes];
  }
  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe=> {
      return recipe.id == recipeId;
    })}
  }
}
