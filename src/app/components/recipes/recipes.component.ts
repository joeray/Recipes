import { Component, OnChanges, Input } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.sass']
})

export class RecipesComponent {
    @Input() recipes: Array<Recipe>;
    recipesFavorites: Array<Recipe>;

    ngOnInit() {
        this.recipesFavorites = []
    }

    recipesFound($event: any) {
        this.recipes = $event
    }

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }

    onDeleteFavorite(deleteIndex) {
        this.recipesFavorites = this.recipesFavorites.filter((item, index) => index !== deleteIndex)
    }

}