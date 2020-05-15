import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubRepoComponent } from './git-hub-repo.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { GitHubRepoService } from 'src/app/services/git-hub-repo/git-hub-repo.service';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http';
import { GitHubRepoServiceMock } from 'src/app/services/git-hub-repo/git-hub-repo.service.spec';

describe('GitHubRepoComponent', () => {
  let component: GitHubRepoComponent;
  let fixture: ComponentFixture<GitHubRepoComponent>;

  let service: GitHubRepoService;
  let getAllSpy: jasmine.Spy;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GitHubRepoComponent],
      imports: [
        NgxPaginationModule,
        NgxSpinnerModule,
        HttpClientModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{
        provide: GitHubRepoService,
        useClass: GitHubRepoServiceMock
      }]
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(GitHubRepoService);
    getAllSpy = spyOn(service, 'getRepoByStringAndPage').and.returnValue(Promise.resolve({
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
    }))
    fixture = TestBed.createComponent(GitHubRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Initialization GitHubComponent...', () => {
    it("should have days 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ", async done => {
      let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      expect(component.days).toEqual(days);
      done();
    });

    it("should have months 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ", async done => {
      let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
      expect(component.months).toEqual(months);
      done();
    })

    it("should set a default 10 data per page ", async done => {
      let per_page = 10
      expect(component.per_page).toEqual(per_page);
      done();
    })

    it("should set first page as default page", async done => {
      let page = 1
      expect(component.p).toEqual(page);
      done();
    })

    it("should set no data/no server call on load of the page", async done => {
      let repos = []
      expect(component.repos).toEqual(repos);
      done();
    })

    it("should have onRetrieving()", async done => {
      expect(component.onRetrieving).toBeDefined();
      done();
    });

    it("should have onEnterPressed()", async done => {
      expect(component.onEnterPressed).toBeDefined();
      done();
    });
  })

  describe('Starting to retrieve repositories...', ()=>{
    describe('onRetrieving()', ()=> {
      it('should set #searching to be true', () => {
        expect(component.searching).toBe(false, 'initial searching');
        component.onRetrieving(1);
        expect(component.searching).toBe(true, 'searching to be #true');
      });
    
      it('should set #loading to be true', () => {
        expect(component.loading).toBe(false, 'No loading');
        component.onRetrieving(1);
        expect(component.loading).toBe(true, 'Loading started');
      });

      it("should fetch data asynchronously", async () => {
        const fakedFetchedList = {
          "total_count": 4330301,
          "incomplete_results": false,
          "items": [
            {
              "full_name": "pytest-dev/pytest",
              "updated_date": "2020-05-14T13:58:12Z",
              "stargazers_count": 5919,
              "description": "string",
              "language": "Python"
            }
          ]
        };

        //test retrieving
        //test populate into DOM
      });
    });
  });
});