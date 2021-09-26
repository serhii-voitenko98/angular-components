import { Directive, EventEmitter, Output, OnInit, OnDestroy, HostListener, Input } from '@angular/core';

import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  @Input('appDebounceClick') debounceTimeInMs = 500;
  @Output() debounceClick = new EventEmitter();
  public clicks = new Subject();
  public subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.clicks.pipe(
      debounceTime(this.debounceTimeInMs)
    ).subscribe(value => this.debounceClick.emit(value));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event']) clickEvent(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next();
  }
}
