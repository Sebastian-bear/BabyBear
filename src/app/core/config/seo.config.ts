import { SeoConfig } from '../services/seo.service';

export const SEO_CONFIG: { [key: string]: SeoConfig } = {
  'home': {
    title: 'Orsetto - Desarrollo Web, Móvil y Transformación Digital',
    description: 'Orsetto: Tecnología que no hiberna. Desarrollo web, aplicaciones móviles y transformación digital estratégica. Soluciones tecnológicas para empresas que buscan crecer.',
    keywords: 'desarrollo web, aplicaciones móviles, transformación digital, desarrollo angular, realidad aumentada, consultoría tecnológica',
    ogTitle: 'Orsetto - Tecnología que no hiberna',
    ogDescription: 'Desarrollo web profesional, aplicaciones móviles y transformación digital estratégica.',
    ogUrl: 'https://orsetto.pro/',
    ogImage: 'https://orsetto.pro/assets/logo.svg',
    canonical: 'https://orsetto.pro/',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Orsetto',
      'url': 'https://orsetto.pro',
      'logo': 'https://orsetto.pro/assets/logo.svg',
      'description': 'Tecnología que no hiberna. Desarrollo web, aplicaciones móviles y transformación digital.',
      'sameAs': [
        'https://www.facebook.com/orsettopro',
        'https://www.instagram.com/orsettopro',
        'https://www.linkedin.com/company/orsetto'
      ],
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'Customer Support',
        'url': 'https://orsetto.pro/contacto'
      }
    }
  },

  'nosotros': {
    title: 'Sobre Nosotros - Orsetto',
    description: 'Conoce a Orsetto, una empresa de desarrollo web y transformación digital. Estamos apasionados por crear soluciones tecnológicas innovadoras.',
    keywords: 'sobre nosotros, equipo, empresa, historia, misión, visión',
    ogTitle: 'Sobre Nosotros - Orsetto',
    ogDescription: 'Descubre quiénes somos y qué nos hace especiales en el desarrollo tecnológico.',
    ogUrl: 'https://orsetto.pro/nosotros',
    ogImage: 'https://orsetto.pro/assets/logo.svg',
    canonical: 'https://orsetto.pro/nosotros',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      'name': 'Sobre Orsetto',
      'description': 'Información sobre la empresa Orsetto'
    }
  },

  'web': {
    title: 'Desarrollo Web - Orsetto',
    description: 'Desarrollo web profesional con las últimas tecnologías. Sitios responsive, rápidos y optimizados para SEO. Especialistas en Angular, React y más.',
    keywords: 'desarrollo web, sitios web, aplicaciones web, Angular, React, desarrollo frontend, backend',
    ogTitle: 'Desarrollo Web Profesional - Orsetto',
    ogDescription: 'Soluciones web modernas y escalables para tu negocio.',
    ogUrl: 'https://orsetto.pro/web',
    ogImage: 'https://orsetto.pro/assets/logo.svg',
    canonical: 'https://orsetto.pro/web',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Desarrollo Web',
      'provider': {
        '@type': 'Organization',
        'name': 'Orsetto'
      },
      'description': 'Desarrollo web profesional con las últimas tecnologías'
    }
  },

  'movil': {
    title: 'Desarrollo Móvil - Orsetto',
    description: 'Aplicaciones móviles nativas e híbridas para iOS y Android. Experiencias de usuario excepcionales con las mejores prácticas de desarrollo.',
    keywords: 'desarrollo móvil, aplicaciones iOS, aplicaciones Android, React Native, Flutter, desarrollo app',
    ogTitle: 'Desarrollo Móvil - Orsetto',
    ogDescription: 'Aplicaciones móviles profesionales para iOS y Android.',
    ogUrl: 'https://orsetto.pro/movil',
    ogImage: 'https://orsetto.pro/assets/logo.svg',
    canonical: 'https://orsetto.pro/movil',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Desarrollo Móvil',
      'provider': {
        '@type': 'Organization',
        'name': 'Orsetto'
      },
      'description': 'Aplicaciones móviles nativas e híbridas'
    }
  },

  'transformacion': {
    title: 'Transformación Digital - Orsetto',
    description: 'Consultoría en transformación digital. Estrategia, implementación y optimización de procesos tecnológicos para tu empresa.',
    keywords: 'transformación digital, consultoría, estrategia digital, innovación, automatización',
    ogTitle: 'Transformación Digital - Orsetto',
    ogDescription: 'Impulsa tu negocio con nuestra consultoría en transformación digital.',
    ogUrl: 'https://orsetto.pro/transformacion',
    ogImage: 'https://orsetto.pro/assets/logo.svg',
    canonical: 'https://orsetto.pro/transformacion',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Transformación Digital',
      'provider': {
        '@type': 'Organization',
        'name': 'Orsetto'
      },
      'description': 'Consultoría en transformación digital estratégica'
    }
  },

  'contacto': {
    title: 'Contacto - Orsetto',
    description: 'Ponte en contacto con nosotros para comenzar tu transformación digital. Estamos listos para ayudarte con tus proyectos tecnológicos.',
    keywords: 'contacto, formulario de contacto, información de contacto, soporte',
    ogTitle: 'Contacto - Orsetto',
    ogDescription: 'Contacta con nosotros para discutir tu próximo proyecto.',
    ogUrl: 'https://orsetto.pro/contacto',
    ogImage: 'https://orsetto.pro/assets/logo.svg',
    canonical: 'https://orsetto.pro/contacto',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Contacto - Orsetto',
      'description': 'Página de contacto de Orsetto'
    }
  }
};
