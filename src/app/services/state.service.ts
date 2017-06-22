import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Comic } from '../models/comic';
import { ComicService } from '.././services/comic.service';

@Injectable()
export class StateService {
    public previousComic: Comic = null;
    public comic: Comic = null;
    public loading: boolean = false;

    constructor(
        private comicService: ComicService,
        private snackBar: MdSnackBar) {
    }

    public loadPreviousComic(): void {
        this.comic = this.previousComic;
        this.previousComic = null;
    }

    public loadRandomComic(): void {
        let comicId: number = this.getRandomNumber();
        this.previousComic = this.comic;
        this.comic = null;
        this.startLoading();

        this.comicService
            .getComic(comicId)
            .then((comic: Comic) => this.comicLoaded(comic))
            .catch((error: any) => this.comicError(error));
    }

    private getRandomNumber(): number {
        return Math.floor(Math.random() * 1000) + 1;
    }

    private startLoading(): void {
        this.loading = true;
    }

    private endLoading(): void {
        this.loading = false;
    }

    private comicError(error: any): void {
        this.endLoading();
        this.openSnackBar('An error occured while retrieving comic');
    }

    private comicLoaded(comic: Comic): void {
        this.openSnackBar(`Comic '${comic.safe_title}' retrieved`);
        this.endLoading();
        this.comic = comic;
    }

    private openSnackBar(message: string) {
        this.snackBar.open(message, null, {
            duration: 2000,
        });
    }
}