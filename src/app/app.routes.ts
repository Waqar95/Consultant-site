import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  // The empty path '' is the root URL. We render HomeComponent for the whole one-page site.
  { path: '', component: HomeComponent },
  // Optional fallback: if someone goes to an unknown path, send them back home.
  { path: '**', redirectTo: '' },
];
