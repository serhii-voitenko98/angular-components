import { Component } from '@angular/core';

import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { AccordionItem } from '../accordion/accordion-item.interface';
import { LoaderTypeEnum } from '../loader/loader-type.enum';

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss']
})
export class ComponentDocumentationComponent {
  faInfoCircle = faInfoCircle;
  progressValue = 40;
  rating = 3.85;
  accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Exampled Content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Exampled Content 2',
      isExpanded: false,
    },
  ];
  borderValue = 400;
  isLoaderLoading = false;
  loaderCountOfSeconds = 2;
  loaderType = LoaderTypeEnum.CIRCULAR;
  LoaderTypeEnum = LoaderTypeEnum;
  toggleValue = true;

  ratingInputChanged(event: Event): void {
    const target = event.target as HTMLInputElement;

    const value = target.value.trim() ? parseFloat(target.value) : 0;
    this.rating = value > 5 ? 5 : value >= 0 ? value : 0;
  }

  topOfPageInputChanged(event: Event): void {
    const target = event.target as HTMLInputElement;

    const value = target.value.trim() ? parseInt(target.value) : 0;
    this.borderValue = value;
  }

  showLoader(): void {
    this.isLoaderLoading = true;

    setTimeout(() => this.isLoaderLoading = false, this.loaderCountOfSeconds * 1000);
  }

  loaderTypeChanged(event: Event): void {
    const target = event.target as HTMLSelectElement;

    const value = target.value as LoaderTypeEnum;
    this.loaderType = value;
  }
}
