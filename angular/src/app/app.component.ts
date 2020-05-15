import { Component } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  constructor() {
    $(function () {
      $("form").submit(function () { return false; });
    })
  }
}
