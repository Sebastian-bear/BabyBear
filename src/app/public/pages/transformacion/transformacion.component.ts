import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-transformacion',
  imports: [RouterModule],
  templateUrl: './transformacion.component.html',
  styleUrl: './transformacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransformacionComponent implements OnInit { 
  constructor(
    private titleService: Title,
    private metaTags: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Transformacion Digital Estrategica - Orsetto');
    this.metaTags.updateTag({ name: 'description', content: 'Moderniza tu negocio con soluciones tecnologicas innovadoras. Diagnostico y consultoria digital.' });
    this.metaTags.updateTag({ property: 'og:title', content: 'Transformacion Digital Estrategica - Orsetto' });
    this.metaTags.updateTag({ property: 'og:description', content: 'Moderniza tu negocio con soluciones tecnologicas innovadoras. Diagnostico y consultoria digital.' });
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
