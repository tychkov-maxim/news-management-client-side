import {Component} from '@angular/core';
import {NewsService} from './service/news.service';
import {News} from './model/news';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    private news: News;
    private errMsa: string;

    constructor(private newsSerivce: NewsService) {
    }


    getById(id: number) {
        this.newsSerivce.getNewsById(id).subscribe(
            news => this.news = news,
            error => this.errMsa = error
        );

    }
}
