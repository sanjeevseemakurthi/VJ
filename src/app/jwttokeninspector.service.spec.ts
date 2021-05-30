import { TestBed } from '@angular/core/testing';

import { JwttokeninspectorService } from './jwttokeninspector.service';

describe('JwttokeninspectorService', () => {
  let service: JwttokeninspectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwttokeninspectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
