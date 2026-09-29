import { SeoConfig } from '../services/seo.service';

const SITE = 'https://orsetto.pro';

/** Imagen para compartir en redes (1200x630). Vive en public/assets/. */
export const OG_IMAGE = {
  url: `${SITE}/assets/og-orsetto.jpg`,
  type: 'image/jpeg',
  width: '1200',
  height: '630',
  alt: 'Orsetto: tecnología que no hiberna',
};

/**
 * SEO por página. Las URLs llevan diagonal final porque así las sirve GitHub Pages
 * (cada ruta es una carpeta con su index.html prerenderizado).
 */
export const SEO_CONFIG: { [key: string]: SeoConfig } = {
  'home': {
    title: 'Orsetto | Software y sitios web para negocios en México',
    description: 'Software a la medida para negocios que trabajan mucho y no ven sus números: sitios web, apps y sistemas. Empieza con un diagnóstico y una hoja de ruta.',
    keywords: 'software para negocios, sistema para comercios, página web para negocios, desarrollo de apps móviles, automatización de procesos, transformación digital, agencia de software México',
    ogTitle: 'Orsetto | Tecnología que no hiberna',
    ogDescription: 'Software a la medida para negocios que trabajan mucho y no ven sus números. Empieza con un diagnóstico y una hoja de ruta.',
    ogUrl: `${SITE}/`,
    ogImage: OG_IMAGE.url,
    canonical: `${SITE}/`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Orsetto',
      'url': SITE,
      'logo': `${SITE}/assets/logo.svg`,
      'description': 'Agencia de desarrollo de software: sitios web, apps y sistemas a la medida para negocios.',
      'sameAs': [
        'https://www.facebook.com/orsettopro',
        'https://www.instagram.com/orsettopro',
        'https://www.linkedin.com/company/orsetto'
      ],
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'Customer Support',
        'url': `${SITE}/contacto/`
      }
    }
  },

  'nosotros': {
    title: 'Nosotros | Orsetto, software que se adapta a tu negocio',
    description: 'Somos Orsetto, una agencia de desarrollo de software que adapta la tecnología a las personas de tu negocio, y no al revés. Conoce cómo trabajamos.',
    keywords: 'agencia de software, quiénes somos, desarrollo de software a la medida, equipo de desarrollo, Orsetto',
    ogTitle: 'Nosotros | Orsetto',
    ogDescription: 'Una agencia de software que adapta la tecnología a las personas de tu negocio, y no al revés.',
    ogUrl: `${SITE}/nosotros/`,
    ogImage: OG_IMAGE.url,
    canonical: `${SITE}/nosotros/`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      'name': 'Sobre Orsetto',
      'description': 'Información sobre la agencia de software Orsetto'
    }
  },

  'web': {
    title: 'Páginas web para negocios que venden | Orsetto',
    description: 'Páginas web rápidas y claras que muestran lo que vendes, responden por ti y traen mensajes de clientes. Landing, sitio corporativo y plataformas desde $8,500 MXN.',
    keywords: 'página web para negocios, diseño de páginas web, landing page, sitio web corporativo, sitio web para comercio, plataforma web a la medida',
    ogTitle: 'Páginas web para negocios que venden | Orsetto',
    ogDescription: 'Páginas web rápidas y claras que trabajan por tu negocio las 24 horas. Desde $8,500 MXN.',
    ogUrl: `${SITE}/web/`,
    ogImage: OG_IMAGE.url,
    canonical: `${SITE}/web/`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Desarrollo de páginas web para negocios',
      'provider': {
        '@type': 'Organization',
        'name': 'Orsetto'
      },
      'description': 'Landing pages, sitios corporativos y plataformas web a la medida para negocios'
    }
  },

  'movil': {
    title: 'Desarrollo de apps móviles para negocios | Orsetto',
    description: 'Apps móviles para iOS y Android: desde un prototipo navegable hasta una app completa para atender, vender y fidelizar a los clientes de tu negocio.',
    keywords: 'desarrollo de apps móviles, app para negocio, aplicación iOS y Android, app a la medida, prototipo de app, MVP de app',
    ogTitle: 'Desarrollo de apps móviles para negocios | Orsetto',
    ogDescription: 'Apps para iOS y Android que atienden, venden y fidelizan a tus clientes.',
    ogUrl: `${SITE}/movil/`,
    ogImage: OG_IMAGE.url,
    canonical: `${SITE}/movil/`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Desarrollo de apps móviles',
      'provider': {
        '@type': 'Organization',
        'name': 'Orsetto'
      },
      'description': 'Apps móviles para iOS y Android, desde prototipo hasta producto completo'
    }
  },

  'transformacion': {
    title: 'Transformación digital para negocios y comercios | Orsetto',
    description: 'Ordena tu operación y ve tus números: sistemas de control, automatizaciones y reportes para negocios. Diagnóstico + hoja de ruta por $4,500 MXN.',
    keywords: 'transformación digital para negocios, sistema de control de ventas e inventario, automatización de procesos, digitalizar un negocio, diagnóstico digital, reportes para negocios',
    ogTitle: 'Transformación digital para negocios | Orsetto',
    ogDescription: 'Ordena tu operación, ve tus números y automatiza lo repetitivo. Empieza con un diagnóstico y una hoja de ruta.',
    ogUrl: `${SITE}/transformacion/`,
    ogImage: OG_IMAGE.url,
    canonical: `${SITE}/transformacion/`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Transformación digital para negocios',
      'provider': {
        '@type': 'Organization',
        'name': 'Orsetto'
      },
      'description': 'Diagnóstico, sistemas de control y automatización para negocios y comercios'
    }
  },

  'contacto': {
    title: 'Contacto y cotización gratis | Orsetto',
    description: 'Cuéntanos de tu negocio y recibe una cotización sin costo. Te respondemos en menos de 24 horas hábiles por correo o WhatsApp.',
    keywords: 'contacto, cotización de software, cotizar página web, cotizar app móvil, diagnóstico digital',
    ogTitle: 'Contacto y cotización gratis | Orsetto',
    ogDescription: 'Cuéntanos de tu negocio y recibe una cotización sin costo. Respondemos en menos de 24 horas hábiles.',
    ogUrl: `${SITE}/contacto/`,
    ogImage: OG_IMAGE.url,
    canonical: `${SITE}/contacto/`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Contacto - Orsetto',
      'description': 'Página de contacto de Orsetto'
    }
  }
};
