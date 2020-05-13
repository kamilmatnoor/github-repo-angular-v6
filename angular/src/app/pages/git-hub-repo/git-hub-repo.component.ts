import { Component, OnInit } from '@angular/core';
import { GitHubRepoService } from 'src/app/services/git-hub-repo/git-hub-repo.service';

@Component({
  selector: 'app-git-hub-repo',
  templateUrl: './git-hub-repo.component.html',
  styleUrls: ['./git-hub-repo.component.css']
})
export class GitHubRepoComponent implements OnInit {

  repos = []
  per_page: number = 10
  query: string = ''
  p: number = 1

  constructor(
    private gitHubRepoService: GitHubRepoService
  ) { }

  ngOnInit() {
    this.gitHubRepoService.getRepoByStringAndPage({
      per_page: this.per_page,
      query: this.query,
      page: this.p
    }).then((res: GitResponse) => {
      console.log(res)
      this.repos = res.items
    }, (err) => {
      this.repos = []
    })
  }
}

interface GitResponse {
  incomplete_results: boolean,
  items: any,
  total_count: number
}
