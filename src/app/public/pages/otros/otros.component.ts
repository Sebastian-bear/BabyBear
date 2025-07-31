import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-otros',
  imports: [RouterModule],
  templateUrl: './otros.component.html',
  styleUrl: './otros.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtrosComponent {
    constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Inteligencia artificial y más');
    this.metaService.updateTag({
      name: 'description',
      content: 'Explora nuestras soluciones en Realidad Aumentada, Realidad Virtual, Realidad Mixta e Inteligencia Artificial para potenciar tu organización.'
    });
  }
  @ViewChild('flecha') flechaElement!: ElementRef;
  
  ngAfterViewInit() {
    this.checkScrollPosition();
  }

  @HostListener('window:scroll', ['$event'])
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

 
