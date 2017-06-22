import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Comic } from '../models/comic';

@Injectable()
export class ComicService {

    constructor(private jsonp: Jsonp) { 
    }

    getComic(id: number): Promise<Comic> {
        const url = `http://dynamic.xkcd.com/api-0/jsonp/comic/${id}?callback=JSONP_CALLBACK`;
        return this.jsonp
            .get(url)
            .toPromise()
            .then(response => response.json() as Comic);
    }

   }
