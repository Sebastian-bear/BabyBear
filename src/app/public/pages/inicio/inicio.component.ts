import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { EmailComponent } from '../../components/email/email.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EmailComponent, RouterModule],
})
export class InicioComponent implements AfterViewInit, OnInit {
  @ViewChild('flecha') flechaElement!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    // El SEO es manejado por el AppComponent ahora
  }

  ngAfterViewInit(): void {
    this.checkScrollPosition();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.checkScrollPosition();
  }

  private checkScrollPosition(): void {
    if (typeof window === 'undefined') return;
    if (!this.flechaElement) return;

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    const isNearBottom = scrollPosition + windowHeight >= documentHeight - 100;

    this.flechaElement.nativeElement.style.opacity = isNearBottom ? '0' : '1';
    this.flechaElement.nativeElement.style.pointerEvents = isNearBottom ? 'none' : 'auto';
  }

  scrollTo(id: string): void {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}