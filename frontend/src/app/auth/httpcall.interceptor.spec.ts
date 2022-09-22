import { TestBed } from '@angular/core/testing';

import { HttpcallInterceptor } from './httpcall.interceptor';

describe('HttpcallInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpcallInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpcallInterceptor = TestBed.inject(HttpcallInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
