import { TestBed } from '@angular/core/testing';

import { NgxSimpleTextDiffService } from './ngx-simple-text-diff.service';

describe('NgxSimpleTextDiffService', () => {
  let service: NgxSimpleTextDiffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSimpleTextDiffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
