import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  template: `
    <section class="demo-shell" aria-label="Demo completa">
      <iframe
        #demoFrame
        src="/pages/demo/demo.html"
        title="Demo completa de constructora"
        loading="eager"
        referrerpolicy="no-referrer"
        (load)="resizeFrame()"
      ></iframe>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      background: #f5f2eb;
    }

    .demo-shell {
      width: 100%;
      overflow: hidden;
    }

    iframe {
      width: 100%;
      height: auto;
      border: 0;
      display: block;
      background: #f5f2eb;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('demoFrame') demoFrame?: ElementRef<HTMLIFrameElement>;
  private resizeObserver?: MutationObserver;

  ngAfterViewInit(): void {
    this.resizeFrame();
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }

  resizeFrame(): void {
    const iframe = this.demoFrame?.nativeElement;
    const contentDocument = iframe?.contentDocument;

    if (!iframe || !contentDocument) {
      return;
    }

    const documentHeight = Math.max(
      contentDocument.documentElement.scrollHeight,
      contentDocument.body?.scrollHeight ?? 0,
      contentDocument.documentElement.offsetHeight,
      contentDocument.body?.offsetHeight ?? 0,
    );

    iframe.style.height = `${documentHeight}px`;

    if (!this.resizeObserver && contentDocument.body) {
      this.resizeObserver = new MutationObserver(() => this.syncFrameHeight());
      this.resizeObserver.observe(contentDocument.body, {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true,
      });
    }
  }

  private syncFrameHeight(): void {
    window.requestAnimationFrame(() => this.resizeFrame());
  }
}