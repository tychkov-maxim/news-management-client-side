import {Component, OnInit} from '@angular/core';
import {NewsService} from '../service/news.service';
import {News} from '../model/news';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
    selector: 'news-form',
    templateUrl: './news-form.component.html',
    styleUrls: ['./news-form.component.css']
})
export class NewsForm implements OnInit {


    errMes: string;

    currentDateTime: Date = new Date;
    model: News = new News(null, '', this.currentDateTime, '', '');

    constructor(private newsService: NewsService, private router: Router, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        if (this.router.url.indexOf('edit-news') !== -1) {
            this.activatedRoute.params.forEach((params: Params) => {
                let id = +params['id'];
                this.newsService.getNewsById(id).subscribe(
                    news => this.model = news,
                    error => this.errMes = error
                );
            });
        }
    }

    onSubmit() {
        this.newsService.saveNews(this.model).subscribe(
            news => this.router.navigate(['news', news.id]),
            error => this.errMes = error
        );
    }


}
