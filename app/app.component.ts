import { Component } from '@angular/core';
@Component({
  selector: 'pm-app',
  template: `{{ pageTitle }}`
})
export class AppComponent {
  pageTitle: string = 'Angular Tutorial'
}
