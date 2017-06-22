import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { routes } from './app.router';

import 'hammerjs';

import { ComicService } from './services/comic.service';
import { StateService } from './services/state.service';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NewComicComponent } from './new-comic/new-comic.component';
import { LastComicComponent } from './last-comic/last-comic.component';
import { ComicComponent } from './comic/comic.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    NewComicComponent,
    LastComicComponent,
    ComicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    MaterialModule,
    routes
  ],
  exports: [
    MaterialModule
  ],
  providers: [
    ComicService,
    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
