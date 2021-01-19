import { Component, Input } from '@angular/core';
import { Recipe } from './models/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent{
  @Input() recipes: Recipe;
  title = 'Recipes browser';

  onRecipesFound($event: any) {
    this.recipes = $event;
  }
}
