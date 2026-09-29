import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { SeoService } from './core/services/seo.service';
import { SEO_CONFIG } from './core/config/seo.config';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Orsetto';

  constructor(
    private router: Router,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    // Escuchar cambios de ruta y actualizar SEO
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: any) => {
        this.updateSeoForRoute(event.urlAfterRedirects);
      });
  }

  private updateSeoForRoute(url: string): void {
    // Quitar query, ancla y diagonales inicial/final: '/web/' -> 'web'
    const path = url.split('?')[0].split('#')[0].replace(/^\/+|\/+$/g, '');

    // Mapear rutas a claves de configuración
    const routeMap: { [key: string]: string } = {
      '': 'home',
      'nosotros': 'nosotros',
      'web': 'web',
      'movil': 'movil',
      'transformacion': 'transformacion',
      'contacto': 'contacto'
    };

    const configKey = routeMap[path];
    
    if (configKey && SEO_CONFIG[configKey]) {
      this.seoService.setSeoConfig(SEO_CONFIG[configKey]);
    }
  }
}
