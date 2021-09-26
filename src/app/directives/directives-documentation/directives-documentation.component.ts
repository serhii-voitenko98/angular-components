import { Component } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-directives-documentation',
  templateUrl: './directives-documentation.component.html',
  styleUrls: ['./directives-documentation.component.scss']
})
export class DirectivesDocumentationComponent {
  faInfoCircle = faInfoCircle;

  log(value: unknown) {
    console.log(value);
  }

  valueChanged(event: any) {
    console.log(event);
  }

}
