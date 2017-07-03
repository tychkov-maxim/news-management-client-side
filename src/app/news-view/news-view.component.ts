import {Component, OnInit} from '@angular/core';
import {NewsService} from '../service/news.service';
import {News} from '../model/news';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
    selector: 'news-view',
    templateUrl: './news-view.component.html',
    styleUrls: ['./news-view.component.css']
})
export class NewsView implements OnInit {


    private news: News;
    private errMsa: string;

    constructor(private newsService: NewsService, private activatedRoute: ActivatedRoute, private router: Router) {
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

    deleteNews(news: News) {
        this.newsService.deleteNewsById(news.id).subscribe(
            error => this.errMsa = error
        );

        this.router.navigate(['all-news']);
    }

    forwardEditNews(news: News) {
        this.router.navigate(['edit-news', news.id]);
    }
}
