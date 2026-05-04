import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { EmailComponent } from '../../components/email/email.component';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EmailComponent, RouterModule],
})
export class InicioComponent implements AfterViewInit, OnInit {
  @ViewChild('flecha') flechaElement!: ElementRef;

  constructor(private titleService: Title, private metaTags: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Orsetto - Desarrollo Web, Móvil y Transformación Digital');
    this.metaTags.updateTag({
      name: 'description',
      content: 'Orsetto: Tecnología que no hiberna. Desarrollo web, aplicaciones móviles y transformación digital estratégica.',
    });
    this.metaTags.updateTag({
      property: 'og:title',
      content: 'Orsetto - Desarrollo Web, Móvil y Transformación Digital',
    });
    this.metaTags.updateTag({
      property: 'og:description',
      content: 'Orsetto: Tecnología que no hiberna. Desarrollo web, aplicaciones móviles y transformación digital estratégica.',
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