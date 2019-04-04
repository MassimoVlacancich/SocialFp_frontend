import { TestBed } from '@angular/core/testing';

import { SocialfpReportService } from './socialfp-report.service';

describe('SocialfpReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocialfpReportService = TestBed.get(SocialfpReportService);
    expect(service).toBeTruthy();
  });
});
