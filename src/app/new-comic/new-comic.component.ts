import { Component, OnInit } from '@angular/core';
import { StateService } from '.././services/state.service';

@Component({
  selector: 'app-new-comic',
  templateUrl: './new-comic.component.html'
})
export class NewComicComponent implements OnInit {

  constructor(private stateService: StateService) {
  }

  ngOnInit() {
    this.stateService.loadRandomComic();
  }
}
