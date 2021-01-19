import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipesModule } from './components/recipes/recipes.module';

import { BrowserComponent } from './components/browser/browser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BrowserComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RecipesModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
