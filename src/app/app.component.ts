import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { NgxParticlesModule } from '@tsparticles/angular';
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
      (particlesInit)="particlesInit($event)"
    >
    </ngx-particles>

    <!-- Render pages through the router ONLY -->
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  // keep options typed as any to avoid strict union typing issues
  particlesOptions: any = {
    fullScreen: { enable: true, zIndex: 0 },
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
        direction: 'none' as const, // literal cast for Angular’s type checker
        enable: true,
        outModes: { default: 'out' as const }, // literal cast
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
    await loadFull(engine); // load tsparticles engine/features
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
