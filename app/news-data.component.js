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
var http_1 = require("@angular/http");
var news_service_1 = require("./news.service");
var core_1 = require("@angular/core");
var NewsDataComponent = (function () {
    function NewsDataComponent(http, newsService) {
        this.http = http;
        this.newsService = newsService;
    }
    NewsDataComponent.prototype.getRequest = function (url) {
        this.requestoptions = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
            url: url
        });
        return this.http.request(new http_1.Request({
            method: http_1.RequestMethod.Get,
            url: url
        }));
    };
    NewsDataComponent.prototype.onClickGetData = function (url, type) {
        var _this = this;
        console.log('url', url);
        console.log('type', type);
        this.getRequest(url).subscribe(function (res) {
            _this.newsService.displayNews = res.json();
            console.log(_this.newsService.displayNews);
        });
    };
    NewsDataComponent.prototype.onClickDataRefresh = function (url) {
        this.requestoptions = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
            url: url
        });
    };
    NewsDataComponent = __decorate([
        core_1.Component({
            selector: 'news-data',
            templateUrl: 'app/news-data.component.html',
        }), 
        __metadata('design:paramtypes', [http_1.Http, news_service_1.NewsService])
    ], NewsDataComponent);
    return NewsDataComponent;
}());
exports.NewsDataComponent = NewsDataComponent;
//# sourceMappingURL=news-data.component.js.map