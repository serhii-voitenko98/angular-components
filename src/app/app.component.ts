import { AccordionItem } from './components/accordion/accordion-item.interface';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  ratingInputChanged(event: Event): void {
    const target = event.target as HTMLInputElement;

    const value = target.value.trim() ? parseFloat(target.value) : 0;
    this.rating = value > 5 ? 5 : value >= 0 ? value : 0;
  }
}
