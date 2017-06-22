import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NewComicComponent } from './new-comic/new-comic.component';
import { LastComicComponent } from './last-comic/last-comic.component';


export const router: Routes = [
    { path: '', redirectTo: 'new', pathMatch: 'full' },
    { path: 'new', component: NewComicComponent },
    { path: 'last', component: LastComicComponent }

];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);