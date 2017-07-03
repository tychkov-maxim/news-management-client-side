import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {News} from '../model/news';

const NEWS_GET_URL = 'http://localhost:1234/rest/news/';
const NEWS_SAVE_URL = 'http://localhost:1234/rest/news/save';
const NEWS_DELETE_LIST_URL = 'http://localhost:1234/rest/news/deleteList';

@Injectable()
export class NewsService {

    constructor(private http: Http) {
    }


    deleteNewsById(id: number): Observable<any> {
        return this.http.delete(`${NEWS_GET_URL}${id}`)
            .catch(this.handleError);
    }

    deleteListNewsByIds(ids: number[]): Observable<any> {
        return this.http.delete(NEWS_DELETE_LIST_URL, new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json; utf-8'
            }),
            body: JSON.stringify(ids)
        }))
            .catch(this.handleError);
    }

    saveNews(news: News): Observable<News> {
        return this.http.post(NEWS_SAVE_URL, JSON.stringify(news), {
            headers: new Headers({
                'Content-Type': 'application/json; utf-8'
            })
        })
            .map(resp => resp.json())
            .catch(this.handleError);
    }

    getNewsById(id: number): Observable<News> {
        return this.http.get(`${NEWS_GET_URL}${id}`)
            .map(resp => resp.json())
            .catch(this.handleError);
    }

    getAllNews(): Observable<News[]> {
        return this.http.get(NEWS_GET_URL)
            .map(res => <News[]> res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
