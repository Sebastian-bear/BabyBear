import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-otros',
  imports: [RouterModule],
  templateUrl: './otros.component.html',
  styleUrl: './otros.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtrosComponent implements OnInit {
    constructor(
      private titleService: Title,
      private metaTags: Meta
    ) {}

  ngOnInit() {
    this.titleService.setTitle('Otros Servicios - Realidad Aumentada e IA - Orsetto');
    this.metaTags.updateTag({ name: 'description', content: 'Realidad Aumentada, Virtual, Mixta e Inteligencia Artificial. Soluciones innovadoras para tu negocio.' });
    this.metaTags.updateTag({ property: 'og:title', content: 'Otros Servicios - Realidad Aumentada e IA - Orsetto' });
    this.metaTags.updateTag({ property: 'og:description', content: 'Realidad Aumentada, Virtual, Mixta e Inteligencia Artificial. Soluciones innovadoras para tu negocio.' });
  }
  @ViewChild('flecha') flechaElement!: ElementRef;
  
  ngAfterViewInit() {
    this.checkScrollPosition();
  }

  @HostListener('window:scroll')
  onWindowScroll() { 
    this.checkScrollPosition();
  }

  private checkScrollPosition() {
    if (this.flechaElement) {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      
      // Ocultar flecha cuando estamos cerca del final de la página
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        this.flechaElement.nativeElement.style.opacity = '0';
        this.flechaElement.nativeElement.style.pointerEvents = 'none';
      } else {
        this.flechaElement.nativeElement.style.opacity = '1';
        this.flechaElement.nativeElement.style.pointerEvents = 'auto';
      }
    }
  }

  scrollTo(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

 }

 
