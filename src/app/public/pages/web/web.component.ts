import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, ChangeDetectionStrategy, OnInit, NgZone } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-web',
  imports: [RouterModule],
  templateUrl: './web.component.html',
  styleUrl: './web.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebComponent implements OnInit, AfterViewInit {
  @ViewChild('flecha') flechaElement!: ElementRef;
  private lastScrollCheck = 0;
  private readonly SCROLL_CHECK_INTERVAL = 250;

  constructor(
    private titleService: Title,
    private metaTags: Meta,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.setPageMetadata();
  }

  ngAfterViewInit(): void {
    this.checkScrollPosition();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const now = Date.now();
    if (now - this.lastScrollCheck >= this.SCROLL_CHECK_INTERVAL) {
      this.lastScrollCheck = now;
      this.checkScrollPosition();
    }
  }

  private setPageMetadata(): void {
    const description = 'Sitios web rápidos, claros y orientados a conversión. Una presencia digital profesional que explica, convence y genera oportunidades reales.';
    const title = 'Desarrollo Web Estratégico - Orsetto';
    
    this.titleService.setTitle(title);
    this.metaTags.updateTag({ name: 'description', content: description });
    this.metaTags.updateTag({ property: 'og:title', content: title });
    this.metaTags.updateTag({ property: 'og:description', content: description });
  }

  private checkScrollPosition(): void {
    if (this.flechaElement) {
      this.ngZone.runOutsideAngular(() => {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;
        const isNearEnd = scrollPosition + windowHeight >= documentHeight - 100;
        
        this.ngZone.run(() => {
          const style = this.flechaElement.nativeElement.style;
          style.opacity = isNearEnd ? '0' : '1';
          style.pointerEvents = isNearEnd ? 'none' : 'auto';
        });
      });
    }
  }

  scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
