import { Component } from '@angular/core';
import { NavbarComponent } from './components/shared/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/shared/footer.component';

@Component({
  selector: 'tbui-root',
  standalone: true,
  template: `
    <tbui-navbar></tbui-navbar>
    <router-outlet></router-outlet>
    <tbui-footer></tbui-footer>
  `,
  styles: ``,
  imports: [
    FooterComponent,
    NavbarComponent,
    RouterOutlet,
  ],
})
export class AppComponent {

}
