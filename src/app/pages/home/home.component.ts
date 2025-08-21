import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  year: number = new Date().getFullYear();

  // simple click-based active state; can upgrade to scrollspy later
  activeLink:
    | 'about'
    | 'services'
    | 'why'
    | 'contact'
    | 'testimonials'
    | 'more' = 'about';

  setActive(link: typeof this.activeLink) {
    this.activeLink = link;
  }
}
