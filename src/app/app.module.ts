import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpModule, JsonpModule} from '@angular/http';
import {NewsService} from './service/news.service';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {NewsList} from './news-list/news-list.component';
import {NewsView} from './news-view/news-view.component';
import {NewsForm} from './news-form/news-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule,
        RouterModule.forRoot(routes), FormsModule
    ],
    declarations: [AppComponent, NewsList, NewsView, NewsForm],
    providers: [NewsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
