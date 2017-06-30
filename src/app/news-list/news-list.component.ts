import {Component, OnInit} from '@angular/core';
import {NewsService} from '../service/news.service';
import {News} from '../model/news';
import {Router} from '@angular/router';

@Component({
    selector: 'news-list',
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.css']
})
export class NewsList implements OnInit {


    private newsList: News[];
    private errMsa: string;

    constructor(private newsService: NewsService, private router: Router) {
    }

    ngOnInit(): void {
        this.getAll();
    }

    getAll() {
        this.newsService.getAllNews().subscribe(
            newsList => this.newsList = newsList,
            error => this.errMsa = error
        );
    }

    onClick(news: News) {
        this.router.navigate(['news', news.id]);
    }
}
