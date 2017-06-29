import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpModule, JsonpModule} from '@angular/http';
import {NewsService} from './service/news.service';

@NgModule({
  imports: [BrowserModule, HttpModule, JsonpModule],
  declarations: [AppComponent],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
