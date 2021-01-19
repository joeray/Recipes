import { Component, Output, Input, EventEmitter } from '@angular/core';
import { RecipesService } from '../../recipes.service';
import { Subscription } from 'rxjs';
import { Browser } from '../../models/browser';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.sass']
})

export class BrowserComponent {
  recipesSubscription: Subscription;
  @Input() title: String;
  @Output() recipesFound = new EventEmitter<any>();

  public model: Browser = {
    ingredients: '', query: ''
  };

  constructor(
    private appService: RecipesService
  ) { }

  onSubmit() {
    this.dataRequest()
  }

  dataRequest() {
    const { ingredients, query } = this.model
    this.recipesSubscription = this.appService.getRecipes(ingredients, query)
      .subscribe(
        (recipes) => { this.recipesFound.emit(recipes.results); },
        (error) => { console.log('Error Getting repos: ', error); }
      );
  }

  cleanData() {
    this.model = {
      ingredients: '',
      query: ''
    }
    this.recipesFound.emit(null);
  }
}