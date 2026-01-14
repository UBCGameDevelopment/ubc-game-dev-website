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
    id: "hoodie-classic",
    name: "UBC Game Dev Hoodie",
    description: "Cozy premium hoodie featuring our pixel logo and mascot. Perfect for late-night game jams!",
    price: 45,
    image: "/placeholder-hoodie.png",
    category: "apparel",
    isNew: true,
    colors: ["Black", "Purple"],
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    id: "tshirt-pixel",
    name: "Pixel Logo Tee",
    description: "Comfortable cotton t-shirt with our retro pixel art design. Show your club pride!",
    price: 25,
    image: "/placeholder-tshirt.png",
    category: "apparel",
    colors: ["White", "Black"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "cap-snapback",
    name: "Controller Snapback Cap",
    description: "Adjustable snapback cap with embroidered controller mascot. One size fits all.",
    price: 30,
    image: "/placeholder-cap.png",
    category: "accessories",
    colors: ["Black", "Grey"],
  },
  {
    id: "sticker-pack",
    name: "Sticker Pack (5pcs)",
    description: "Set of 5 vinyl stickers featuring game dev themed designs. Laptop-ready!",
    price: 8,
    image: "/placeholder-stickers.png",
    category: "stickers",
    isNew: true,
  },
  {
    id: "mug-pixel",
    name: "Pixel Mug",
    description: "Ceramic mug with pixel art design. Holds your coffee during those long coding sessions.",
    price: 15,
    image: "/placeholder-mug.png",
    category: "accessories",
  },
  {
    id: "enamel-pin",
    name: "Controller Pin",
    description: "Enamel pin featuring our friendly controller mascot. Limited edition!",
    price: 10,
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
