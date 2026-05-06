import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contacto',
  imports: [FormularioComponent, RouterModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactoComponent implements AfterViewInit, OnInit {
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
