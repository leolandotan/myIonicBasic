import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {
    baseUrl: string = 'http://localhost/';

    constructor(public http: Http) {

    }

    getArticles() {
        return this.http.get(this.baseUrl + 'api/node/articles')
            .map(data => data.json());
    }
}