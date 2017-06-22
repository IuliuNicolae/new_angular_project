import { Component, OnInit } from '@angular/core';
import { StateService } from '.././services/state.service';

@Component({
  selector: 'app-last-comic',
  templateUrl: './last-comic.component.html'
})
export class LastComicComponent implements OnInit {

  constructor(private stateService: StateService) {
  }

  ngOnInit() {
    this.stateService.loadPreviousComic();
  }
}
