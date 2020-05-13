import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubRepoComponent } from './git-hub-repo.component';

describe('GitHubRepoComponent', () => {
  let component: GitHubRepoComponent;
  let fixture: ComponentFixture<GitHubRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
