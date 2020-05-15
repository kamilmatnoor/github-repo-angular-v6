import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { GitHubRepoService } from './git-hub-repo.service';
import { GitResponse } from 'src/app/shared/git_response';
import { Observable } from 'rxjs';
import { HttpClientMock } from 'src/app/mock/HttpClientMock';

describe('GitHubRepoService', () => {
  let service: GitHubRepoService
  let http: HttpClient;
  let getSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: HttpClient,
        useClass: HttpClientMock
      }]
    });

    service = TestBed.get(GitHubRepoService)
  });

  beforeEach(() => {
    http = TestBed.get(HttpClient);

    const res: Observable<GitResponse> = new Observable<GitResponse>(observer => {
      observer.next({
        "total_count": 4330301,
        "incomplete_results": false,
        "items": [
          {
            "full_name": "pytest-dev/pytest",
            "description": "The pytest framework makes it easy to write small tests, yet scales to support complex functional testing",
            "updated_at": "2020-05-14T13:58:12Z",
            "stargazers_count": 5919,
            "language": "Python",
          }
        ]
      })
      observer.complete()
    })

    getSpy = spyOn(http, 'get').and.returnValue(res)
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getRepoByStringAndPage()', () => {
    it('should return an Promise<GitResponse>', async done => {
      const params = {
        per_page: 1,
        page: 1,
        query: 'test'
      }

      const res = await service.getRepoByStringAndPage(params)
      expect(getSpy).toHaveBeenCalledTimes(1);
      expect(getSpy).toHaveBeenCalledWith(`https://api.github.com/search/repositories?per_page=1&q=test&page=1`);
      expect(res.total_count).toEqual(4330301)
      expect(res.incomplete_results).toEqual(false)
      expect(res.items.length).toEqual(1)
      done()
    });
  });
});

export class GitHubRepoServiceMock {
  getRepoByStringAndPage(params): Promise<GitResponse> {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }
}