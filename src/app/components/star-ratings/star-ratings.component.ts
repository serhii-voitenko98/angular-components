import { Component, Input } from '@angular/core';
import { faStar as fasStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss']
})
export class StarRatingsComponent {
  @Input()
  set rating(value: number) {
    this._rating = value > 5 ? 5 : value;
  };
  @Input()
  color = '#e5e510';
  @Input()
  title = '';

  faStar = fasStar;
  faStarEmpty = farStar
  faStarHalfAlt = faStarHalfAlt;

  private _rating!: number;
  private readonly HIGHEST_RATING = 5;

  get rating(): number {
    return this._rating;
  }

  get fullStars(): number[] {
    const totalFullStart = Math.floor(this.rating);

    return Array(totalFullStart).fill(0);
  }

  get hasHalfStar(): boolean {
    const hasHalfStar = (this.rating - Math.floor(this.rating)) >= 0.5
      && this.rating !== this.HIGHEST_RATING;

    return hasHalfStar;
  }

  get emptyStars(): number[] {
    let totalEmptyStars = Math.ceil(this.HIGHEST_RATING - this.rating);

    if (this.hasHalfStar) {
      totalEmptyStars -= 1
    }

    return Array(totalEmptyStars).fill(0);
  }
}
