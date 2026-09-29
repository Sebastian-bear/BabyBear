import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, ChangeDetectionStrategy, OnInit, NgZone } from '@angular/core';
import { RouterModule } from '@angular/router';

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

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    // El SEO es manejado por el AppComponent ahora
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

  private checkScrollPosition(): void {
    if (typeof window === 'undefined') return;
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
