import { Component } from '@angular/core';
import { NgxParticlesComponent } from '@tsparticles/angular';

@Component({
  selector: 'app-particles',
  standalone: true,
  imports: [NgxParticlesComponent],
  template: `
    <ng-particles id="tsparticles" [options]="particlesOptions"></ng-particles>
  `,
})
export class ParticlesComponent {
  particlesOptions = {
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
        direction: 'none' as const, // ✅ FIXED typing issue
        enable: true,
        outModes: { default: 'out' },
        speed: 1.6,
      },
      number: {
        density: { enable: true, area: 900 },
        value: 60,
      },
      opacity: { value: 0.45 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  };
}
