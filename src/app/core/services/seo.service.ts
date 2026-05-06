import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

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
    private metaService: Meta
  ) {}

  /**
   * Configura todos los metatags de SEO para una página
   */
  setSeoConfig(config: SeoConfig): void {
    // Título de la página
    this.titleService.setTitle(config.title);

    // Description
    this.updateMetaTag('description', config.description);

    // Keywords (si existen)
    if (config.keywords) {
      this.updateMetaTag('keywords', config.keywords);
    }

    // Open Graph Tags
    this.updateMetaTag('og:title', config.ogTitle || config.title, 'property');
    this.updateMetaTag('og:description', config.ogDescription || config.description, 'property');
    this.updateMetaTag('og:url', config.ogUrl || this.baseUrl, 'property');
    this.updateMetaTag('og:type', 'website', 'property');
    this.updateMetaTag('og:site_name', 'Orsetto', 'property');

    if (config.ogImage) {
      this.updateMetaTag('og:image', config.ogImage, 'property');
      this.updateMetaTag('og:image:type', 'image/svg+xml', 'property');
      this.updateMetaTag('og:image:width', '200', 'property');
      this.updateMetaTag('og:image:height', '200', 'property');
    }

    // Twitter Card Tags
    this.updateMetaTag('twitter:card', 'summary_large_image');
    this.updateMetaTag('twitter:title', config.twitterTitle || config.title);
    this.updateMetaTag('twitter:description', config.twitterDescription || config.description);

    if (config.twitterImage) {
      this.updateMetaTag('twitter:image', config.twitterImage);
    }

    // Canonical URL
    if (config.canonical) {
      this.updateLinkTag('canonical', config.canonical);
    }

    // JSON-LD Schema
    if (config.schema) {
      this.updateJsonLdSchema(config.schema);
    }

    // Scroll al inicio
    window.scrollTo(0, 0);
  }

  /**
   * Actualiza un metatag existente o lo crea si no existe
   */
  private updateMetaTag(
    nameOrProperty: string,
    content: string,
    type: 'name' | 'property' = 'name'
  ): void {
    let selector: string;

    if (type === 'property') {
      selector = `meta[property="${nameOrProperty}"]`;
    } else {
      selector = `meta[name="${nameOrProperty}"]`;
    }

    const existingTag = document.querySelector(selector);

    if (existingTag) {
      existingTag.setAttribute('content', content);
    } else {
      const tag = document.createElement('meta');
      if (type === 'property') {
        tag.setAttribute('property', nameOrProperty);
      } else {
        tag.setAttribute('name', nameOrProperty);
      }
      tag.setAttribute('content', content);
      document.head.appendChild(tag);
    }
  }

  /**
   * Actualiza un link tag (como canonical)
   */
  private updateLinkTag(rel: string, href: string): void {
    let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;

    if (link) {
      link.href = href;
    } else {
      link = document.createElement('link');
      link.rel = rel;
      link.href = href;
      document.head.appendChild(link);
    }
  }

  /**
   * Actualiza o crea el schema JSON-LD
   */
  private updateJsonLdSchema(schema: any): void {
    const id = 'seo-schema-json-ld';
    let schemaScript = document.getElementById(id) as HTMLScriptElement;

    if (schemaScript) {
      schemaScript.textContent = JSON.stringify(schema);
    } else {
      schemaScript = document.createElement('script');
      schemaScript.id = id;
      schemaScript.type = 'application/ld+json';
      schemaScript.textContent = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
    }
  }

  /**
   * Obtiene el URL canónico para una ruta
   */
  getCanonicalUrl(path: string): string {
    return `${this.baseUrl}${path}`;
  }

  /**
   * Obtiene la URL de la imagen OG
   */
  getOgImageUrl(imageName?: string): string {
    return `${this.baseUrl}/assets/${imageName || 'logo.svg'}`;
  }
}
