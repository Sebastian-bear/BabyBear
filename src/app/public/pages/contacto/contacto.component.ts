import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contacto',
  imports: [FormularioComponent, RouterModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactoComponent implements AfterViewInit, OnInit {
  @ViewChild('flecha') flechaElement!: ElementRef;

  constructor(private titleService: Title, private metaTags: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Contacto - Orsetto');
    this.metaTags.updateTag({
      name: 'description',
      content: 'Ponte en contacto con nosotros para comenzar tu transformación digital. Estamos listos para ayudarte.',
    });
    this.metaTags.updateTag({
      property: 'og:title',
      content: 'Contacto - Orsetto',
    });
    this.metaTags.updateTag({
      property: 'og:description',
      content: 'Ponte en contacto con nosotros para comenzar tu transformación digital. Estamos listos para ayudarte.',
    });
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
