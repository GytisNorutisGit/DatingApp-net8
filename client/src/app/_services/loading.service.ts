import { inject, Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loadingRequestCount = 0;
  private spinnerService = inject(NgxSpinnerService);

  loading() {
    this.loadingRequestCount++;
    this.spinnerService.show(undefined, {
      type: 'ball-clip-rotate',
      bdColor: 'rgba(255, 255, 255, 0)',
      color: '#333333'
    })  
  }

  idle() {
    this.loadingRequestCount--;
    if (this.loadingRequestCount <=0 ) {
      this.loadingRequestCount = 0;
      this.spinnerService.hide();
    }
  }

  constructor() { }
}
