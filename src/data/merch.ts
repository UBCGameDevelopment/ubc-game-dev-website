export interface MerchItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "apparel" | "accessories" | "stickers";
  isNew?: boolean;
  isSoldOut?: boolean;
  colors?: string[];
  sizes?: string[];
}

export const merchItems: MerchItem[] = [
  {
    id: "neon-hoodie",
    name: "Neon Flux Hoodie",
    description: "Oversized hoodie with reactive neon trim. Built for late-night builds.",
    price: 52,
    image: "/placeholder-hoodie.png",
    category: "apparel",
    isNew: true,
    colors: ["Black", "Neon Blue"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "gridline-tee",
    name: "Gridline Tee",
    description: "Minimal tee with a hologrid print and subtle chest crest.",
    price: 28,
    image: "/placeholder-tshirt.png",
    category: "apparel",
    colors: ["Charcoal", "White"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "signal-cap",
    name: "Signal Cap",
    description: "Structured cap with embroidered signal mark. Adjustable strap.",
    price: 24,
    image: "/placeholder-cap.png",
    category: "accessories",
    isNew: true,
    colors: ["Black"],
  },
  {
    id: "patch-set",
    name: "Patch Set",
    description: "Set of 3 embroidered patches for jackets, bags, or gear cases.",
    price: 12,
    image: "/placeholder-pin.png",
    category: "accessories",
  },
  {
    id: "sticker-drop",
    name: "Sticker Drop v2",
    description: "6-piece holo sticker pack with cyber glyphs and icons.",
    price: 10,
    image: "/placeholder-stickers.png",
    category: "stickers",
    isNew: true,
  },
  {
    id: "limited-pin",
    name: "Limited Crest Pin",
    description: "Limited-run enamel pin. Once it ships, it is gone.",
    price: 14,
    image: "/placeholder-pin.png",
    category: "accessories",
    isSoldOut: true,
  },
];

export const categories = [
  { id: "all", label: "All Items" },
  { id: "apparel", label: "Apparel" },
  { id: "accessories", label: "Accessories" },
  { id: "stickers", label: "Stickers" },
] as const;
