"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var news_service_1 = require('app/news.service');
var NewsListComponent = (function () {
    function NewsListComponent(http, newsService) {
        this.http = http;
        this.newsService = newsService;
    }
    NewsListComponent.prototype.getRequest = function (url) {
        this.requestoptions = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
            url: url
        });
        return this.http.request(new http_1.Request({
            method: http_1.RequestMethod.Get,
            url: url
        }));
    };
    NewsListComponent.prototype.onClickGetNew = function (url) {
        var _this = this;
        this.getRequest(url).subscribe(function (res) {
            console.log('Res', res.json());
            _this.data = res.json();
            _this.newsService.newNews.push(_this.data);
        });
    };
    NewsListComponent.prototype.onClickDataRefresh = function (url) {
        this.requestoptions = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
            url: url
        });
    };
    NewsListComponent = __decorate([
        core_1.Component({
            selector: 'news-list',
            templateUrl: 'app/newsList/news-list.component.html',
            providers: [news_service_1.NewsService]
        }), 
        __metadata('design:paramtypes', [http_1.Http, (typeof (_a = typeof news_service_1.NewsService !== 'undefined' && news_service_1.NewsService) === 'function' && _a) || Object])
    ], NewsListComponent);
    return NewsListComponent;
    var _a;
}());
exports.NewsListComponent = NewsListComponent;
//# sourceMappingURL=news-list.component.js.map