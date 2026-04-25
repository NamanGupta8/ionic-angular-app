import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonList, IonItem } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { Recipes } from 'src/app/services/recipes';
import { Recipe } from '../recipe.model';
import { IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
  standalone: true,
  imports: [IonItem, IonList, IonImg, IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonGrid, IonRow,CommonModule, FormsModule]
})
export class RecipeDetailPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private recipeService: Recipes) { }
  loadedRecipe!: Recipe;
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap)=> {
      if(!paramMap.has('recipeId')){
        return
      }

      const recipeId = paramMap.get('recipeId') || ''
      this.loadedRecipe = this.recipeService.getRecipe(recipeId) as Recipe
    });
  }

}
