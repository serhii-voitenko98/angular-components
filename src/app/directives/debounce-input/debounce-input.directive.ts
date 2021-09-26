import { Directive, Output, Input, ElementRef } from '@angular/core';

import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: 'input[appDebounceInput]'
})
export class DebounceInputDirective {
  @Input('appDebounceInput') timeInMs = 500;

  @Output() debouncedValue = fromEvent(this.elRef.nativeElement, 'input').pipe(debounceTime(this.timeInMs));

  constructor(private elRef: ElementRef) {}
}
