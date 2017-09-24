import { Injectable } from '@angular/core';

import { Sport } from './sport';
import { SPORTS } from './sports';

@Injectable()
export class SportService {
  getSports(): Promise<Sport[]> {
    return Promise.resolve(SPORTS);
  }

  getSportsSlowly(): Promise<Sport[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getSports()), 2000);
    });
  }
}