import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';

let getUrl = 'http://localhost:59346/surveys.json';

@inject(HttpClient)
export class SurveyRetriever {

    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    getAll() {
        return this.httpClient.get('http://localhost:59346/surveys.json').then(response => {
            return response.content
        });
    }
}