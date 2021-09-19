import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() icon!: IconDefinition;
  @Input() title!: string;
  @Input() subTitle!: string;

  constructor() { }

  ngOnInit(): void {}

}
