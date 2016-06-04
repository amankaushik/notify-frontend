"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var news_service_1 = require('./news.service');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [news_service_1.NewsService, http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map