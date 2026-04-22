import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-movil',
  imports: [RouterModule],
  templateUrl: './movil.component.html',
  styleUrl: './movil.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovilComponent implements OnInit { 
  constructor(
    private titleService: Title,
    private metaTags: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Desarrollo de Aplicaciones Móviles - Orsetto');
    this.metaTags.updateTag({ name: 'description', content: 'Apps para iOS y Android que automatizan, fidelizan y multiplican tu impacto en los clientes.' });
    this.metaTags.updateTag({ property: 'og:title', content: 'Desarrollo de Aplicaciones Móviles - Orsetto' });
    this.metaTags.updateTag({ property: 'og:description', content: 'Apps para iOS y Android que automatizan, fidelizan y multiplican tu impacto en los clientes.' });
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
