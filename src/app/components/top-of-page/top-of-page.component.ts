import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { ViewportScroller } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss']
})
export class TopOfPageComponent {
  @Input() borderValue = 400;

  isShown = false;
  faChevronUp = faChevronUp;

  constructor(private viewportScroller: ViewportScroller) {}

  @HostListener('window:scroll') onWindowScroll() {
    const [x, y] = this.viewportScroller.getScrollPosition();
    this.isShown = y > this.borderValue;
  }

  goToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
