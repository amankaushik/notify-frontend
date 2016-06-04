import { Component } from '@angular/core';
import { NewsListComponent } from './news-list.component';
import { NewsService } from './news.service';

@Component({
  selector: 'pm-app',
  template: `{{ pageTitle }}<news-list></news-list>`,
  directives: [NewsListComponent],
  providers: [NewsService]
})
export class AppComponent {
  pageTitle: string = 'Notify News List'
}
