import {Component} from '@angular/core';
import {NewsService} from './news.service';
import {NgClass} from '@angular/common';
import any = jasmine.any;

@Component({
    selector: 'news-list',
    templateUrl: 'app/news-list.component.html',
    directives: [NgClass]
})
export class NewsListComponent {
    constructor(public newsService: NewsService) {
    }
}
