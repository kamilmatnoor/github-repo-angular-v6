
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GitHubRepoService {

  constructor(private http: HttpClient) { }

  getRepoByStringAndPage(params): Promise<any> {
    params.query = params.query ? params.query : `%27%27`
    params.page = params.page ? params.page : 1
    return new Promise((resolve, reject) => {
      this.http.get(`https://api.github.com/search/repositories?per_page=${params.per_page}&q=${params.query}&page=${params.page}`).subscribe(res => {
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