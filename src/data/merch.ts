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
  sizeChart?: boolean; // If true, show size chart
}

export type SizeMeasurement = {
  label: string;
  xs: string | number;
  s: string | number;
  m: string | number;
  l: string | number;
  xl: string | number;
  xxl: string | number;
  xxxl: string | number;
  xxxxl: string | number;
};

export const SIZE_CHART: SizeMeasurement[] = [
  { label: "Chest - Half Measure", xs: 16, s: 18, m: 20, l: 22, xl: 24, xxl: 26, xxxl: 28, xxxxl: 30 },
  { label: "Chest - Full Measure", xs: 32, s: 36, m: 40, l: 44, xl: 48, xxl: 52, xxxl: 56, xxxxl: 60 },
  {
    label: "Body Length from HPS",
    xs: "26 1/2",
    s: 28,
    m: "29 1/4",
    l: "30 1/4",
    xl: "31 1/4",
    xxl: "32 1/2",
    xxxl: "33 1/2",
    xxxxl: "34 1/2",
  },
  {
    label: "Sleeve Length-CB",
    xs: 15,
    s: "15 3/4",
    m: 17,
    l: "18 1/4",
    xl: "19 1/2",
    xxl: "20 3/4",
    xxxl: 22,
    xxxxl: 23,
  },
];

export const merchItems: MerchItem[] = [
  {
    id: "ubc-tee-cream",
    name: "UBC Game Dev Tee - Cream",
    description: "",
    price: 30,
    image: "/placeholder-hoodie.png",
    category: "apparel",
    isNew: true,
    colors: ["Cream, Purple"],
    sizes: ["XS", "S", "M", "L", "XL"],
    sizeChart: true,
  },
  {
    id: "ubc-tee-black",
    name: "UBC Game Dev Tee - Black",
    description: "",
    price: 30,
    image: "/placeholder-tshirt.png",
    category: "apparel",
    colors: ["Charcoal Black, Purple"],
    sizes: ["XS", "S", "M", "L", "XL"],
    sizeChart: true,
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
  // { id: "accessories", label: "Accessories" },
  { id: "stickers", label: "Stickers" },
] as const;
