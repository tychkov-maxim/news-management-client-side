import {Component, OnInit} from '@angular/core';
import {NewsService} from './service/news.service';
import {News} from './model/news';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    private newsList: News[];
    private news: News;
    private errMsa: string;

    constructor(private newsSerivce: NewsService) {
    }

    ngOnInit(): void {
        this.getAll();
    }


    getAll() {
        this.newsSerivce.getAllNews().subscribe(
            newsList => this.newsList = newsList,
            error => this.errMsa = error
        );
    }

    getById(id: number) {
        this.newsSerivce.getNewsById(id).subscribe(
            news => this.news = news,
            error => this.errMsa = error
        );

    }
}
