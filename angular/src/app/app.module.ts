import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppComponent } from './app.component';
import { GitHubRepoComponent } from './pages/git-hub-repo/git-hub-repo.component';
import { GitHubRepoService } from './services/git-hub-repo/git-hub-repo.service';

@NgModule({
  declarations: [
    AppComponent,
    GitHubRepoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/git-hub-repo',
        pathMatch: 'full'
      }, {
        path: 'git-hub-repo',
        component: GitHubRepoComponent
      }, {
        path: '**',
        component: GitHubRepoComponent
      }
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    GitHubRepoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
