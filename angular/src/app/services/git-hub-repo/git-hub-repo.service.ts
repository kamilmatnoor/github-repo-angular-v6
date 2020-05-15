
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitResponse } from 'src/app/shared/git_response';

@Injectable({
  providedIn: 'root'
})
export class GitHubRepoService {

  readonly API_URL = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getRepoByStringAndPage(params): Promise<GitResponse> {
    params.query = params.query ? params.query : `%27%27`
    params.page = params.page ? params.page : 1
    return new Promise((resolve, reject) => {
      this.http.get(`${this.API_URL}/search/repositories?per_page=${params.per_page}&q=${params.query}&page=${params.page}`).subscribe((res: GitResponse) => {
        if (!res) {
          reject(true)
        }
        resolve(res)
      },
        err => {
          console.error(err)
          reject(true)
        })
    })
  }
}