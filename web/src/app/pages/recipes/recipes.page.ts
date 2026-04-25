import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonAvatar, IonImg, IonLabel } from '@ionic/angular/standalone';
import { Recipe } from './recipe.model';
import { Recipes } from 'src/app/services/recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  standalone: true,
  imports: [IonLabel, IonImg, IonAvatar, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] =[];
  constructor(private recipesService: Recipes) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes()

  }

}
