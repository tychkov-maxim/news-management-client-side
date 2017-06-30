import {Component, OnInit} from '@angular/core';
import {NewsService} from '../service/news.service';
import {News} from '../model/news';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'news-view',
    templateUrl: './news-view.component.html'
})
export class NewsView implements OnInit {


    private news: News;
    private errMsa: string;

    constructor(private newsService: NewsService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params['id'];
            this.getNewsById(id);
        });
    }

    getNewsById(id: number) {
        this.newsService.getNewsById(id).subscribe(
            news => this.news = news,
            error => this.errMsa = error
        );
    }
}
