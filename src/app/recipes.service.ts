import { Injectable } from '@angular/core';
import { Observable, from, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Recipe } from './models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  public BASE_URL = 'http://www.recipepuppy.com/api/';
  public ingredients: string;
  public query: string;

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  getRecipes(ingredients, query): Observable<any> {
    console.log('getrepos', ingredients);
    this.messageService.clear();
    this.ingredients = ingredients || '';
    this.query = query || '';
    let recipesUrl = `${this.BASE_URL}/?i=${this.ingredients}&q=${this.query}&p=3`;
    const res = this.http.get<Array<Recipe>>(recipesUrl)
      .pipe(
        catchError(this.handleError.bind(this))
      );
    console.log("and res ", res)
    return res
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
      this.messageService.add(errorMessage);
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      this.messageService.add(errorMessage);
    }
    return throwError(errorMessage);
  }
}
