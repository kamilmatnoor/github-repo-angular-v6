import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';

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
    RouterModule.forRoot([
      {
         path: '',
         component: GitHubRepoComponent
      }
   ])
  ],
  providers: [
    GitHubRepoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
