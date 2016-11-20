import {Http, RequestMethod, RequestOptions, Request} from "@angular/http";
import {NewsService} from "./news.service";
import {Component} from "@angular/core";
@Component({
    selector: 'news-data',
    templateUrl: 'app/news-data.component.html',
})
export class NewsDataComponent {
    requestoptions: any;
    data: any;

    constructor(public http: Http,
                public newsService: NewsService) {
    }

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

    onClickGetData(url, type) {
        console.log('url', url)
        console.log('type', type)
        this.getRequest(url).subscribe(res => {
            this.newsService.displayNews= res.json();
            console.log(this.newsService.displayNews);
        });
    }

    onClickDataRefresh(url: string) {
        this.requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: url
        })
    }
}
