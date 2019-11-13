import { TestBed } from '@angular/core/testing';

import { ItmRepoService } from './itm-repo.service';

describe('ItmRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItmRepoService = TestBed.get(ItmRepoService);
    expect(service).toBeTruthy();
  });
});
