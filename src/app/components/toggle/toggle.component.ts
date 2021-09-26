import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Input() isOn = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isOn = !this.isOn;
  }
}
