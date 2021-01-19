
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipeElementComponent } from '../recipe-element/recipe-element.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeElementComponent
    ],
    imports: [
        CommonModule,
        DragDropModule
    ],
    exports: [
        RecipesComponent
    ]
})
export class RecipesModule { }
