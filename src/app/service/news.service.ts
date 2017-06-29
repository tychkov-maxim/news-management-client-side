import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {News} from '../model/news';

@Injectable()
export class NewsService {

    private getNewsURL = 'http://localhost:1234/rest/news/';

    constructor(private http: Http) {
    }


    getNewsById(id: number): Observable<News> {
        return this.http.get(`${this.getNewsURL}${id}`)
            .map(resp => resp.json())
            .catch(this.handleError);
    }

    getAllNews(): Observable<News[]> {
        return this.http.get(this.getNewsURL)
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
