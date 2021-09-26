import { ToggleModule } from './../toggle/toggle.module';
import { ModalModule } from './../modal/modal.module';
import { LinkedinPostModule } from './../linkedin-post/linkedin-post.module';
import { TwitterPostModule } from './../twitter-post/twitter-post.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CardModule } from '../card/card.module';
import { LoaderModule } from '../loader/loader.module';
import { AccordionModule } from '../accordion/accordion.module';
import { TopOfPageModule } from '../top-of-page/top-of-page.module';
import { ProgressBarModule } from '../progress-bar/progress-bar.module';
import { StarRatingsModule } from '../star-ratings/star-ratings.module';
import { CreditCardInputModule } from '../credit-card-input/credit-card-input.module';
import { ComponentDocumentationComponent } from './component-documentation.component';
import { ComponentDocumentationRouterModule } from './component-documentation-router.module';

@NgModule({
  declarations: [
    ComponentDocumentationComponent
  ],
  imports: [
    CardModule,
    ModalModule,
    FormsModule,
    CommonModule,
    LoaderModule,
    ToggleModule,
    AccordionModule,
    TopOfPageModule,
    ProgressBarModule,
    StarRatingsModule,
    TwitterPostModule,
    LinkedinPostModule,
    CreditCardInputModule,
    ComponentDocumentationRouterModule,
  ],
})
export class ComponentDocumentationModule { }
