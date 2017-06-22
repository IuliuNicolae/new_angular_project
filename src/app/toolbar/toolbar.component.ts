import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '.././services/state.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private stateService: StateService,
    private router: Router) {
  }

  toggleSidenav(): void {
    this.toggle.emit();
  }

  goBack(): void {
    this.router.navigateByUrl("/last");    
  }
}
