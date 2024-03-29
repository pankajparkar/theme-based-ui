import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';
import { DashboardComponent } from './app/components/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: 'dashboard' },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
  ]
})
