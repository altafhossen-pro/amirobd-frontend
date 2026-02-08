// Site Configuration
export const siteConfig = {
  // Basic Site Info
  name: "Amiro",
  shortName: "Amiro",
  description: "Premium jewelry and accessories for every occasion",
  url: "https://amirobd.com",

  // SEO Meta Tags
  seo: {
    title: "Amiro - Premium Jewelry & Accessories",
    description: "Discover our exclusive collection of premium jewelry, rings, necklaces, and accessories. Handcrafted with love and precision.",
    keywords: "jewelry, rings, necklaces, accessories, premium jewelry, handcrafted jewelry, forpink",
    author: "Amiro Team",
    robots: "index, follow",
    language: "en",
    charset: "utf-8",
    viewport: "width=device-width, initial-scale=1",
  },

  // Social Media Meta Tags
  social: {
    twitter: {
      card: "summary_large_image",
      site: "@forpink",
      creator: "@forpink",
    },
    facebook: {
      appId: "your-facebook-app-id",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Amiro",
    },
  },

  // Contact Information
  contact: {
    email: "info@amirobd.com",
    phone: "+8801313664466",
    address: "Badda, Dhaka, Bangladesh - 1212",
    hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
  },

  // Navigation
  navigation: {
    main: [
      { name: "Home", href: "/" },
      { name: "Shop", href: "/shop" },
      { name: "Categories", href: "/categories" },
      { name: "Offers", href: "/offers" },
      { name: "Contact", href: "/contact-us" },
    ],
    footer: [
      { name: "About Us", href: "/about" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-and-conditions" },
      { name: "FAQ", href: "/faq" },
    ],
  },

  // Page-specific titles and descriptions
  pages: {
    home: {
      title: "Amiro - Premium Jewelry & Accessories",
      description: "Discover our exclusive collection of premium jewelry, rings, necklaces, and accessories. Handcrafted with love and precision.",
    },
    shop: {
      title: "Shop Jewelry - Amiro",
      description: "Browse our complete collection of jewelry including rings, necklaces, bracelets, and more.",
    },
    search: {
      title: "Search Jewelry - Amiro",
      description: "Search and find the perfect jewelry piece from our extensive collection.",
    },
    categories: {
      title: "Jewelry Categories - Amiro",
      description: "Explore our jewelry by category - rings, necklaces, bracelets, earrings, and more.",
    },
    product: {
      title: "{{productName}}",
      description: "{{productDescription}} - Premium jewelry from Amiro.",
    },
    checkout: {
      title: "Checkout - Amiro",
      description: "Complete your jewelry purchase securely with Amiro.",
    },
    login: {
      title: "Login - Amiro",
      description: "Sign in to your Amiro account to access exclusive features.",
    },
    register: {
      title: "Register - Amiro",
      description: "Create your Amiro account to start shopping for premium jewelry.",
    },
    dashboard: {
      title: "My Dashboard - Amiro",
      description: "Manage your account, orders, and preferences at Amiro.",
    },
    admin: {
      title: "Admin Dashboard - Amiro",
      description: "Manage your Amiro store from the admin dashboard.",
    },
    contact: {
      title: "Contact Us - Amiro",
      description: "Get in touch with Amiro for any questions or support.",
    },
    faq: {
      title: "FAQ - Amiro",
      description: "Frequently asked questions about Amiro and our jewelry.",
    },
    offers: {
      title: "Special Offers - Amiro",
      description: "Discover exclusive offers and discounts on premium jewelry.",
    },
    privacy: {
      title: "Privacy Policy - Amiro",
      description: "Learn about how Amiro protects your privacy and data.",
    },
    terms: {
      title: "Terms & Conditions - Amiro",
      description: "Read the terms and conditions for using Amiro services.",
    },
  },

  // Default values for dynamic content
  defaults: {
    image: "/images/logo.png",
    favicon: "/favicon.ico",
    themeColor: "#E91E63", // Pink color for Amiro
    backgroundColor: "#FFFFFF",
  },
};

// Helper function to get page metadata
export const getPageMetadata = (pageKey, dynamicData = {}) => {
  const pageConfig = siteConfig.pages[pageKey] || siteConfig.pages.home;

  let title = pageConfig.title;
  let description = pageConfig.description;

  // Replace dynamic placeholders
  if (dynamicData.productName) {
    title = title.replace('{{productName}}', dynamicData.productName);
  }
  if (dynamicData.productDescription) {
    description = description.replace('{{productDescription}}', dynamicData.productDescription);
  }

  return {
    ...pageConfig,
    title,
    description,
  };
};

// Helper function to get full page title with site name
export const getFullPageTitle = (pageTitle) => {
  return `${pageTitle} | ${siteConfig.name}`;
};

// Helper function to get SEO meta tags
export const getSEOMetaTags = (pageKey, dynamicData = {}) => {
  const pageMeta = getPageMetadata(pageKey, dynamicData);
  const fullTitle = getFullPageTitle(pageMeta.title);

  return {
    title: fullTitle,
    description: pageMeta.description,
    keywords: siteConfig.seo.keywords,
    author: siteConfig.seo.author,
    robots: siteConfig.seo.robots,
    language: siteConfig.seo.language,
    charset: siteConfig.seo.charset,
    viewport: siteConfig.seo.viewport,
    'og:title': fullTitle,
    'og:description': pageMeta.description,
    'og:type': siteConfig.social.openGraph.type,
    'og:url': `${siteConfig.url}${dynamicData.path || ''}`,
    'og:site_name': siteConfig.social.openGraph.siteName,
    'og:locale': siteConfig.social.openGraph.locale,
    'og:image': dynamicData.image || siteConfig.defaults.image,
    'twitter:card': siteConfig.social.twitter.card,
    'twitter:site': siteConfig.social.twitter.site,
    'twitter:creator': siteConfig.social.twitter.creator,
    'twitter:title': fullTitle,
    'twitter:description': pageMeta.description,
    'twitter:image': dynamicData.image || siteConfig.defaults.image,
  };
};
