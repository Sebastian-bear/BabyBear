import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { OG_IMAGE } from '../config/seo.config';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  schema?: any;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private baseUrl = 'https://orsetto.pro';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  /**
   * Configura todos los metatags de SEO para una página.
   * Funciona tanto en el navegador como durante el prerenderizado.
   */
  setSeoConfig(config: SeoConfig): void {
    this.titleService.setTitle(config.title);
    this.updateMetaTag('description', config.description);

    if (config.keywords) {
      this.updateMetaTag('keywords', config.keywords);
    }

    // Open Graph
    this.updateMetaTag('og:title', config.ogTitle || config.title, 'property');
    this.updateMetaTag('og:description', config.ogDescription || config.description, 'property');
    this.updateMetaTag('og:url', config.ogUrl || this.baseUrl, 'property');
    this.updateMetaTag('og:type', 'website', 'property');
    this.updateMetaTag('og:site_name', 'Orsetto', 'property');
    this.updateMetaTag('og:locale', 'es_MX', 'property');

    const image = config.ogImage || OG_IMAGE.url;
    this.updateMetaTag('og:image', image, 'property');
    this.updateMetaTag('og:image:type', OG_IMAGE.type, 'property');
    this.updateMetaTag('og:image:width', OG_IMAGE.width, 'property');
    this.updateMetaTag('og:image:height', OG_IMAGE.height, 'property');
    this.updateMetaTag('og:image:alt', OG_IMAGE.alt, 'property');

    // Twitter / X
    this.updateMetaTag('twitter:card', 'summary_large_image');
    this.updateMetaTag('twitter:title', config.twitterTitle || config.ogTitle || config.title);
    this.updateMetaTag('twitter:description', config.twitterDescription || config.ogDescription || config.description);
    this.updateMetaTag('twitter:image', config.twitterImage || image);
    this.updateMetaTag('twitter:image:alt', OG_IMAGE.alt);

    if (config.canonical) {
      this.updateLinkTag('canonical', config.canonical);
    }

    if (config.schema) {
      this.updateJsonLdSchema(config.schema);
    }
  }

  private updateMetaTag(
    nameOrProperty: string,
    content: string,
    type: 'name' | 'property' = 'name'
  ): void {
    const selector = `meta[${type}="${nameOrProperty}"]`;
    const existingTag = this.document.querySelector(selector);

    if (existingTag) {
      existingTag.setAttribute('content', content);
    } else {
      const tag = this.document.createElement('meta');
      tag.setAttribute(type, nameOrProperty);
      tag.setAttribute('content', content);
      this.document.head.appendChild(tag);
    }
  }

  private updateLinkTag(rel: string, href: string): void {
    let link = this.document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;

    if (link) {
      link.setAttribute('href', href);
    } else {
      link = this.document.createElement('link');
      link.setAttribute('rel', rel);
      link.setAttribute('href', href);
      this.document.head.appendChild(link);
    }
  }

  private updateJsonLdSchema(schema: any): void {
    const id = 'seo-schema-json-ld';
    let schemaScript = this.document.getElementById(id) as HTMLScriptElement | null;

    if (schemaScript) {
      schemaScript.textContent = JSON.stringify(schema);
    } else {
      schemaScript = this.document.createElement('script');
      schemaScript.id = id;
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.textContent = JSON.stringify(schema);
      this.document.head.appendChild(schemaScript);
    }
  }

  getCanonicalUrl(path: string): string {
    return `${this.baseUrl}${path}`;
  }

  getOgImageUrl(): string {
    return OG_IMAGE.url;
  }
}
