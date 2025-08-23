import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

/** Angular wrapper (NgModule) for tsparticles */
import { NgxParticlesModule } from '@tsparticles/angular';
/** Loads the full engine so all options work */
import { loadFull } from 'tsparticles';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxParticlesModule],
  template: `
    <!-- Full-page particles background -->
    <ngx-particles
      id="tsparticles"
      [options]="particlesOptions"
    ></ngx-particles>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  // Keep it 'any' to avoid union typing friction with Angular strict modes
  particlesOptions: any = {
    fullScreen: { enable: true, zIndex: 0 }, // behind your content
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: 'push' },
        onHover: { enable: true, mode: 'repulse' },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 120, duration: 0.4 },
      },
    },
    particles: {
      color: { value: '#14b8a6' },
      links: {
        color: '#14b8a6',
        distance: 150,
        enable: true,
        opacity: 0.35,
        width: 1,
      },
      move: {
        direction: 'none' as const, // literal cast avoids NG2 typing error
        enable: true,
        outModes: { default: 'out' as const },
        speed: 1.6,
      },
      number: { density: { enable: true, area: 900 }, value: 60 },
      opacity: { value: 0.45 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  };

  async particlesInit(engine: any) {
    // REQUIRED for @tsparticles/angular: initializes the engine
    await loadFull(engine);
  }

  ngOnInit(): void {
    this.title.setTitle(
      'Elite Consulting — Strategy, Growth & Digital Transformation'
    );
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
