import { Component, OnInit } from '@angular/core';
import { GitHubRepoService } from 'src/app/services/git-hub-repo/git-hub-repo.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { GitResponse } from 'src/app/shared/git_response';
import { Repository } from 'src/app/shared/repository';

@Component({
  selector: 'app-git-hub-repo',
  templateUrl: './git-hub-repo.component.html',
  styleUrls: ['./git-hub-repo.component.scss']
})
export class GitHubRepoComponent implements OnInit {

  repos: Repository[] = []
  per_page: number = 10
  query: string = ''
  p: number = 1

  total_repos: number = 0
  total_repos_desc: string = ''


  searching: boolean = false
  loading: boolean = false

  no_matching_data: string = ''
  search_again: string = ''

  days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

  constructor(
    public gitHubRepoService: GitHubRepoService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.repos = []
  }

  onRetrieving(page): void {
    this.repos = []
    this.searching = true
    this.p = page
    this.loading = true

    this.spinner.show()

    this.gitHubRepoService.getRepoByStringAndPage({
      per_page: this.per_page,
      query: this.query,
      page: this.p
    }).then((res: GitResponse) => {
      this.loading = false
      this.total_repos = res.total_count
      this.total_repos_desc = `${res.total_count} repository results`

      for (let i = 0; i < res.items.length; i++) {
        let o = res.items[i]
        let s = `Updated on ${this.days[new Date(o.updated_at).getDay()]} ${this.months[new Date().getMonth()]} ${new Date().getDate()} ${new Date().getFullYear()}`
        res.items[i].updated_date = s
        res.items[i].language = res.items[i].language ? res.items[i].language : 'N/A'
      }
      this.repos = res.items
      this.spinner.hide()
    }, (err) => {
      this.repos = []
    })
  }

  onEnterPressed(e): void {
    this.query = e.target.value
    this.no_matching_data = `We couldn't find any repository that match your search for ${this.query.italics().bold()}`
    this.search_again = `Please try to search again by using different words`
    this.onRetrieving(1)
  }
}