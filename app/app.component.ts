import { Component } from '@angular/core';
import { NewsListComponent } from './news-list.component';
import { NewsService } from './news.service';
import {NewsDataComponent} from "./news-data.component";

@Component({
  selector: 'nn-app',
  templateUrl: 'app/app.component.html',
  directives: [NewsListComponent, NewsDataComponent],
  providers: [NewsService]
})
export class AppComponent {
  pageTitle: string = 'Notify News'
}
