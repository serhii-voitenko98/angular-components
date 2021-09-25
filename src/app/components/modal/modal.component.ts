import { Component, Input } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title = '';
  @Input() isHidden = true;

  faTimes = faTimes

  close(): void {
    this.isHidden = true;
  }

  open(): void {
    this.isHidden = false;
  }
}
