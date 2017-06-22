import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Comic } from '../models/comic';
import { StateService } from '.././services/state.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  @Output()
  private random: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private stateService: StateService,
    private router: Router) {
  }

  loadRandom(): void {
    this.random.emit();
    if (this.router.isActive('/new', true)) {
      this.stateService.loadRandomComic();
    }
    else {
      this.router.navigateByUrl('/new');
    }
  }
}
