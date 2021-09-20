import { Component, Input } from '@angular/core';
import { LoaderTypeEnum } from './loader-type.enum';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input()
  set isLoading(value: boolean) {
    if (!value) {
      clearInterval(this.periodInterval);
    }

    if (this.loaderType === LoaderTypeEnum.LOADING && value) {
      this.updateLoaderPeriods();
    }

    this._isLoading = value;
  }
  @Input()
  loaderType = LoaderTypeEnum.CIRCULAR;

  private _isLoading = false;
  private _loadingText = 'Loading';
  private loadingPeriods = '.';
  private periodInterval!: any;

  LoaderTypeEnum = LoaderTypeEnum;

  get loadingText(): string {
    return `${this._loadingText}${this.loadingPeriods}`;
  }

  get isLoading(): boolean {
    return this._isLoading;
  }

  private updateLoaderPeriods(): void {
    let currentStep = 0;

    this.periodInterval = setInterval(() => {
      switch(currentStep) {
        case 0:
          this.loadingPeriods = '..';
          currentStep++;
          break;
        case 1:
          this.loadingPeriods = '...';
          currentStep++;
          break;
        case 2:
          this.loadingPeriods = '.';
          currentStep = 0;
          break;
      }
    }, 500);
  }
}
