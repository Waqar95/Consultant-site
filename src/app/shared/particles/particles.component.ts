import { Component } from '@angular/core';
import { NgParticlesModule } from 'ng-particles';
import { loadFull } from 'tsparticles';

@Component({
  selector: 'app-particles',
  standalone: true,
  imports: [NgParticlesModule],
  template: `
    <ng-particles
      [id]="id"
      [options]="particlesOptions"
      (particlesInit)="particlesInit($event)"
      (particlesLoaded)="onParticlesLoaded($event)"
    >
    </ng-particles>
  `,
  styleUrls: ['./particles.component.scss'],
})
export class ParticlesComponent {
  id = 'tsparticles';

  particlesOptions = {
    background: {
      color: { value: '#ffffff' }, // background color
    },
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
        opacity: 0.5,
        width: 1,
      },
      collisions: { enable: true },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'out' },
        speed: 2,
      },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  async particlesInit(engine: any): Promise<void> {
    await loadFull(engine); // loads tsparticles bundle
  }

  onParticlesLoaded(container: any): void {
    console.log('Particles loaded', container);
  }
}
