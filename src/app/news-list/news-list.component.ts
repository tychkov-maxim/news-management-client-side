import {Component, OnInit} from '@angular/core';
import {NewsService} from '../service/news.service';
import {News} from '../model/news';
import {Router} from '@angular/router';

let breakException = {};

@Component({
    selector: 'news-list',
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.css']
})
export class NewsList implements OnInit {


    private newsList: News[];
    private errMsa: string;
    private selectedNews: number[] = [];


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

    deleteSelectedNews() {
        this.newsService.deleteListNewsByIds(this.selectedNews).subscribe(
            error => this.errMsa = error
        );
    }

    onClick(news: News) {
        this.router.navigate(['news', news.id]);
    }

    onClickCheckBox(news: News) {
        try {
            this.selectedNews.forEach((value, index) => {
                if (value === news.id) {
                    delete this.selectedNews.splice(index, 1);
                    throw breakException;
                }
            });
        } catch (e) {
            if (e !== breakException) {
                throw e;
            }
            return;
        }
        this.selectedNews.push(news.id);
    }

}
