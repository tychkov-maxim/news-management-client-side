import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpModule, JsonpModule} from '@angular/http';
import {NewsService} from './service/news.service';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {NewsList} from './news-list/news-list.component';
import {NewsView} from './news-view/news-view.component';

@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [AppComponent, NewsList, NewsView],
    providers: [NewsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
