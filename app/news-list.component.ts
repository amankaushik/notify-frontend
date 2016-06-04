import { Component } from '@angular/core';
import {Http, RequestOptions, Request, RequestMethod} from '@angular/http';
import { NewsService } from './news.service';
import {NgClass} from '@angular/common';
@Component({
  selector: 'news-list',
  templateUrl: 'app/news-list.component.html',
  directives: [NgClass]
})

export class NewsListComponent{
  requestoptions: any;
  data: any;
  constructor(public http : Http,
    public newsService: NewsService) {}
  public getRequest(url) {
    this.requestoptions = new RequestOptions({
      method: RequestMethod.Get,
      url: url
    })
    return this.http.request(new Request({
      method: RequestMethod.Get,
      url: url
    }));
  }
  onClickGetNew(url){
    this.getRequest(url).subscribe(res => {
      //console.log('Res', res.json());
      this.newsService.newNews = res.json();
      console.log(this.newsService.newNews);
    });
  }
  onClickDataRefresh(url:string) {
  this.requestoptions = new RequestOptions({
    method: RequestMethod.Get,
    url: url
  })
}
}
