export interface MerchItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images?: string[];
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
    description:
      'Level up your everyday look with this soft cream tee, packed with nostalgic 8-bit vibes. It features subtle, pixel-perfect "UBC GAME DEV" text on the chest in striking purple. The back steals the show with a bold, detailed four-panel retro grid celebrating vintage gaming hardware, the perfect statement piece for any enthusiast.',
    price: 30,
    image: "/assets/merch/ubc_tee_cream/ubc_tee_cream_front.png",
    images: [
      "/assets/merch/ubc_tee_cream/ubc_tee_cream_front.png",
      "/assets/merch/ubc_tee_cream/ubc_tee_cream_back.png",
      "/assets/merch/ubc_tee_cream/ubc_tee_cream_front_1.png",
      "/assets/merch/ubc_tee_cream/ubc_tee_cream_back_1.png",
      "/assets/merch/ubc_tee_cream/ubc_tee_cream_flat_front.png",
      "/assets/merch/ubc_tee_cream/ubc_tee_cream_flat_back.png",
    ],
    category: "apparel",
    isNew: true,
    colors: ["Cream, Purple"],
    sizes: ["XS", "S", "M", "L", "XL"],
    sizeChart: true,
  },
  {
    id: "ubc-tee-black",
    name: "UBC Game Dev Tee - Black",
    description:
      'Level up your everyday look with this soft black tee, packed with nostalgic 8-bit vibes. It features subtle, pixel-perfect "UBC GAME DEV" text on the chest in striking purple. The back steals the show with a bold, detailed four-panel retro grid celebrating vintage gaming hardware, the perfect statement piece for any enthusiast.',
    price: 30,
    image: "/assets/merch/ubc_tee_black/ubc_tee_black_front.png",
    images: [
      "/assets/merch/ubc_tee_black/ubc_tee_black_front.png",
      "/assets/merch/ubc_tee_black/ubc_tee_black_back.png",
      "/assets/merch/ubc_tee_black/ubc_tee_black_front_1.png",
      "/assets/merch/ubc_tee_black/ubc_tee_black_back_1.png",
      "/assets/merch/ubc_tee_black/ubc_tee_black_front_flat.png",
      "/assets/merch/ubc_tee_black/ubc_tee_black_back_flat.png",
    ],
    category: "apparel",
    isNew: true,
    colors: ["Charcoal Black, Purple"],
    sizes: ["XS", "S", "M", "L", "XL"],
    sizeChart: true,
  },
  {
    id: "ubc-tote-bag",
    name: "UBC Game Dev Tote Bag",
    description: "Limestone white canvas tote featuring a bold black UBC Game Dev graphic in a clean, panel-style print. Designed with long shoulder straps and a roomy main compartment, perfect for carrying books, groceries, or everyday essentials.",
    price: 30,
    image: "/assets/merch/ubc_white_tote_bag/ubc_tote_bag_front.png",
    images: [
      "/assets/merch/ubc_white_tote_bag/ubc_tote_bag_front.png",
      "/assets/merch/ubc_white_tote_bag/ubc_tote_bag_back.png",
    ],
    category: "accessories",
    isNew: true,
    colors: ["Limestone White, Black"],
  },
  // {
  //   id: "sticker-drop",
  //   name: "Sticker Drop v2",
  //   description: "6-piece holo sticker pack with cyber glyphs and icons.",
  //   price: 10,
  //   image: "/placeholder-stickers.png",
  //   images: ["/placeholder-stickers.png"],
  //   category: "stickers",
  //   isNew: true,
  // },
  // {
  //   id: "limited-pin",
  //   name: "Limited Crest Pin",
  //   description: "Limited-run enamel pin. Once it ships, it is gone.",
  //   price: 14,
  //   image: "/placeholder-pin.png",
  //   images: ["/placeholder-pin.png"],
  //   category: "accessories",
  //   isSoldOut: true,
  // },
];

export const categories = [
  { id: "all", label: "All Items" },
  { id: "apparel", label: "Apparel" },
  { id: "accessories", label: "Accessories" },
  // { id: "stickers", label: "Stickers" },
] as const;
