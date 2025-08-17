import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class AppComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    // Runtime title (reinforces index.html <title>)
    this.title.setTitle(
      'Elite Consulting — Strategy, Growth & Digital Transformation'
    );

    // Runtime meta (search engines and social crawlers can pick these up)
    this.meta.updateTag({
      name: 'description',
      content:
        'Elite Consulting helps SMEs and startups grow with strategy, branding, and digital transformation. Get measurable results with tailored consulting services.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'consulting, business consulting, strategy consulting, digital transformation, branding, marketing, growth consulting, SME consulting, startup consulting',
    });
  }
}
