import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, ChangeDetectionStrategy } from '@angular/core';
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
export class InicioComponent implements AfterViewInit {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Orsetto | Desarrollo de software');
    this.metaService.updateTag({
      name: 'description',
      content: 'Creamos soluciones digitales con un enfoque humano. Desarrollo de software web, móvil y transformación digital para empresas.'
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