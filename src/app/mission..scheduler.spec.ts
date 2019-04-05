import { TestBed } from '@angular/core/testing';

import { MissionScheduler } from './mission.scheduler';

describe('MissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MissionScheduler = TestBed.get(MissionScheduler);
    expect(service).toBeTruthy();
  });
});
