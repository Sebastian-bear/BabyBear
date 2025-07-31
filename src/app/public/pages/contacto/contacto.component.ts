import {  Component, ElementRef, ViewChild, AfterViewInit, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { FormularioComponent } from "../../components/formulario/formulario.component";
import { Router, RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-contacto',
  imports: [FormularioComponent, RouterModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactoComponent implements AfterViewInit{ 
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Contactanos');
    this.metaService.updateTag({
      name: 'description',
      content: '¿Necesitas una solución digital? Contáctanos para desarrollar software a medida, automatizar procesos o transformar tu organización.'
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
