import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { debounce } from './debounce';

@Directive({
  selector: '[appDebounceInput]'
})
export class DebounceInputDirective {
  @Output() debouncedValue = new EventEmitter<string>();

  @HostListener('input', ['$event']) inputEvent(event: Event) {
    const target = event.target as HTMLInputElement;

    debounce(() => {
      this.debouncedValue.emit(target.value);
    }, 500);
  }
}
