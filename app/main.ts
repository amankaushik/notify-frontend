import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { NewsService } from './news.service';
import {HTTP_PROVIDERS, Http, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';
import {enableProdMode} from '@angular/core';

enableProdMode();
bootstrap(AppComponent, [NewsService, HTTP_PROVIDERS]);
