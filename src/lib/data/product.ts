import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    slug: "iphone-16",
    name: "iPhone 16 Pro",
    price: 12999,
    description:
      "Le nouveau iPhone 16 Pro redéfinit la photographie mobile avec son système de caméra Pro de 48 Mpx, la puce A18 Pro, et un écran Super Retina XDR de 6,3 pouces. Conçu pour ceux qui refusent les compromis.",
    category: "Smartphones",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=800&fit=crop&auto=format",
    imageAlt: "iPhone 16 Pro en titane naturel",
    width: 400,
    height: 800,
  },
  {
    id: 2,
    slug: "macbook-air",
    name: "MacBook Air M3",
    price: 14499,
    description:
      "Propulsé par la puce M3, le MacBook Air est le laptop le plus fin et le plus léger d'Apple. Jusqu'à 18 heures d'autonomie, écran Liquid Retina 13,6 pouces et performances qui rivalisent avec les pro.",
    category: "Ordinateurs",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=800&fit=crop&auto=format",
    imageAlt: "MacBook Air M3 ouvert sur un bureau",
    width: 400,
    height: 800,
  },
  {
    id: 3,
    slug: "sony-headphones",
    name: "Sony WH-1000XM5",
    price: 3799,
    description:
      "La référence absolue en matière de réduction de bruit active. Huit microphones, deux processeurs dédiés, et 30 heures d'autonomie pour une immersion sonore totale où que vous soyez.",
    category: "Audio",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop&auto=format",
    imageAlt: "Sony WH-1000XM5 casque sans fil premium",
    width: 400,
    height: 800,
  },
  {
    id: 4,
    slug: "airpods-pro",
    name: "AirPods Pro 2",
    price: 2999,
    description:
      "Réduction de bruit Active de nouvelle génération avec la puce H2. Audio Spatial personnalisé, résistance à l'eau IPX4, et jusqu'à 30 heures d'autonomie avec l'étui de charge MagSafe.",
    category: "Audio",
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&h=800&fit=crop&auto=format",
    imageAlt: "AirPods Pro 2 avec étui de charge MagSafe",
    width: 400,
    height: 800,
  },
  {
    id: 5,
    slug: "apple-watch-ultra",
    name: "Apple Watch Ultra 2",
    price: 9999,
    description:
      "La montre la plus robuste et la plus puissante d'Apple. Boîtier en titane, jusqu'à 60 heures d'autonomie, GPS L1/L5 de précision et profondimètre jusqu'à 100 mètres. Pour les explorateurs de l'extrême.",
    category: "Montres",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop&auto=format",
    imageAlt: "Apple Watch Ultra 2 en titane avec bracelet orange",
    width: 400,
    height: 800,
  },
  {
    id: 6,
    slug: "ipad-pro",
    name: "iPad Pro M4",
    price: 11999,
    description:
      "Propulsé par la puce M4, l'iPad Pro est le produit Apple le plus fin jamais conçu. Écran Ultra Retina XDR OLED de 11 pouces, Apple Pencil Pro compatible, et des performances de niveau professionnel.",
    category: "Tablettes",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=800&fit=crop&auto=format",
    imageAlt: "iPad Pro M4 avec Apple Pencil",
    width: 400,
    height: 800,
  },
];

export interface Cart<T, S> {
  item: T;
  count: S;
}
export const shoppingCart: Cart<Product, number>[] = [];

export const shoppingCartV: Cart<Product, number>[] = [];
