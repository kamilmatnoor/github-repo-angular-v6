import { TestBed } from '@angular/core/testing';

import { GitHubRepoService } from './git-hub-repo.service';

describe('GitHubRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitHubRepoService = TestBed.get(GitHubRepoService);
    expect(service).toBeTruthy();
  });
});
