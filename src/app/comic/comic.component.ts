import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Comic } from '.././models/comic';
import { ComicService } from '.././services/comic.service';
import { StateService } from '.././services/state.service';
import { Router } from '@angular/router';

@Component({
    selector: 'comicul',
    templateUrl: './comic.component.html',
    styleUrls: ['./comic.component.css']
})
export class ComicComponent {

    constructor(
        private comicService: ComicService,
        private stateService: StateService,
        private snackBar: MdSnackBar,
        private router: Router) {
    }

    // private loadNew(): void {
    //     this.stateService.loadRandomComic();
    // }
}
