import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-transformacion',
  imports: [RouterModule],
  templateUrl: './transformacion.component.html',
  styleUrl: './transformacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransformacionComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('flecha') flechaElement!: ElementRef;
  private scrollTimeout: any;

  constructor(
    private titleService: Title,
    private metaTags: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Transformacion Digital Estrategica - Orsetto');
    this.metaTags.updateTag({ 
      name: 'description', 
      content: 'Moderniza tu negocio con soluciones tecnologicas innovadoras. Diagnostico y consultoria digital.' 
    });
    this.metaTags.updateTag({ 
      property: 'og:title', 
      content: 'Transformacion Digital Estrategica - Orsetto' 
    });
    this.metaTags.updateTag({ 
      property: 'og:description', 
      content: 'Moderniza tu negocio con soluciones tecnologicas innovadoras. Diagnostico y consultoria digital.' 
    });
  }

  ngAfterViewInit() {
    this.checkScrollPosition();
  }

  ngOnDestroy() {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    // Throttle scroll events para mejor rendimiento
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    this.scrollTimeout = setTimeout(() => {
      this.checkScrollPosition();
    }, 100);
  }

  private checkScrollPosition() {
    if (!this.flechaElement) return;

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    
    // Ocultar flecha cuando estamos cerca del final de la página
    const isNearEnd = scrollPosition + windowHeight >= documentHeight - 100;
    const element = this.flechaElement.nativeElement;
    
    element.style.opacity = isNearEnd ? '0' : '1';
    element.style.pointerEvents = isNearEnd ? 'none' : 'auto';
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
