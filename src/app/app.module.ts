import { AccordionModule } from './components/accordion/accordion.module';
import { CardModule } from './components/card/card.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { AppRoutingModule } from './app-routing.module';
import { ProgressBarModule } from './components/progress-bar/progress-bar.module';
import { StarRatingsModule } from './components/star-ratings/star-ratings.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CardModule,
    FormsModule,
    BrowserModule,
    ToolbarModule,
    AccordionModule,
    AppRoutingModule,
    FontAwesomeModule,
    ProgressBarModule,
    StarRatingsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
