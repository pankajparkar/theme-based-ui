import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';
import { DashboardComponent } from './app/components/dashboard.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FancyDashboardComponent } from './app/components/fancy-dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'fancy-dashboard', component: FancyDashboardComponent },
  { path: '**', redirectTo: 'dashboard' },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), provideAnimationsAsync(),
  ]
})
