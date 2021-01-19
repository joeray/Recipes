import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-element',
  templateUrl: './recipe-element.component.html',
  styleUrls: ['./recipe-element.component.sass']
})
export class RecipeElementComponent {
  @Input() recipe: Recipe = { title: '', href: '', ingredients: '', thumbnail: '' };
  @Output() deleteFavorite = new EventEmitter<any>();
  @Input() favorite: Boolean;

  deleteFavoriteRecipe() {
    this.deleteFavorite.emit()
  }
}
