import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { EmailComponent } from "../../components/email/email.component";
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
  constructor(
    private titleService: Title,
    private metaTags: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Orsetto - Desarrollo Web, Móvil y Transformación Digital');
    this.metaTags.updateTag({ name: 'description', content: 'Orsetto: Tecnología que no hiberna. Desarrollo web, aplicaciones móviles y transformación digital estratégica.' });
    this.metaTags.updateTag({ property: 'og:title', content: 'Orsetto - Desarrollo Web, Móvil y Transformación Digital' });
    this.metaTags.updateTag({ property: 'og:description', content: 'Orsetto: Tecnología que no hiberna. Desarrollo web, aplicaciones móviles y transformación digital estratégica.' });
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