import { AccordionItem } from './accordion-item.interface';
import { Component, Input } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() items: AccordionItem[] = [];
  faChevronDown = faChevronDown;

  toggle(item: AccordionItem): void {
    item.isExpanded = !item.isExpanded;
  }
}
