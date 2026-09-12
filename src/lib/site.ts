export const WHATSAPP = "https://wa.me/201055599648";
export const PHONE = "+20 10 55599648";

export const waLink = (message: string) =>
  `${WHATSAPP}?text=${encodeURIComponent(message)}`;

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/khyaaal11/" },
  { name: "TikTok", href: "https://www.tiktok.com/@khyaaal11" },
  { name: "Facebook", href: "https://www.facebook.com/khyaaal11/?locale=it_IT" },
  { name: "YouTube", href: "https://www.youtube.com/@khyaaal11" },
];

export const img = {
  pyramidsWalk: "/IMG_3525_11zon.jpg",
  rearing: "/IMG_3528_11zon.jpg",
  duo: "/IMG_2997_11zon.jpg",
  groom: "/IMG_3004_11zon.jpg",
  greyRider: "/IMG_3023_11zon.jpg",
  chestnut: "/arabian horse.jpg",
  sunsetBlack: "/IMG_3134_11zon.jpg",
  bayPyramid: "/IMG_3203_11zon.jpg",
  sunsetGuest: "/IMG_3219_11zon.jpg",
  goldenHooves: "/hat rider.jpg",
  vipRide: "/IMG_3528_11zon.jpg", 
  magicWater: "/magic.jpeg",      
  saqqaraLocation: "/saqqara.jpg",
  espresso: "/espresso.jpeg",
  training: "/train.jpeg",
};

export type Category = "Pyramid Rides" | "Saqqara Trails" | "Photoshoots";

export const gallery: { src: string; alt: string; category: Category }[] = [
  {
    src: img.pyramidsWalk,
    alt: "Guest leading a grey Arabian horse with the Giza Pyramids behind",
    category: "Pyramid Rides",
  },
  {
    src: img.rearing,
    alt: "Grey Arabian stallion rearing in the desert with a rider",
    category: "Photoshoots",
  },
  {
    src: img.bayPyramid,
    alt: "Rider on a bay Arabian horse in front of a Saqqara pyramid",
    category: "Saqqara Trails",
  },
  {
    src: img.sunsetBlack,
    alt: "Rider on a black Arabian horse at desert sunset",
    category: "Saqqara Trails",
  },
  {
    src: img.greyRider,
    alt: "Rider patting a white Arabian horse in the desert",
    category: "Pyramid Rides",
  },
  {
    src: img.sunsetGuest,
    alt: "Smiling guest on a white Arabian horse against a golden sunset",
    category: "Photoshoots",
  },
  {
    src: img.chestnut,
    alt: "Guest seated on a chestnut Arabian horse in open desert",
    category: "Photoshoots",
  },
  {
    src: img.goldenHooves,
    alt: "Rider in a hat leaning over a bay horse at Golden Hooves stable",
    category: "Saqqara Trails",
  },
  {
    src: img.duo,
    alt: "Two riders standing with a grey and a bay Arabian horse",
    category: "Pyramid Rides",
  },
  {
    src: img.groom,
    alt: "Saddled white Arabian horse walked near the stable",
    category: "Pyramid Rides",
  },
];

export type CatalogGroup = "vip" | "offers" | "training";

export type CatalogItem = {
  id: string;
  group: CatalogGroup;
  image: string;
  price: number;
  oldPrice?: number;
  en: { title: string; copy: string };
  ar: { title: string; copy: string };
};

export const catalog: CatalogItem[] = [
  {
    id: "vip-private",
    group: "vip",
    image: img.vipRide,
    price: 1000,
    en: {
      title: "VIP Private Ride",
      copy: "A tailored private experience: sunrise or sunset ride, a professional photo session at the pyramids, your choice of pace, desert and pyramid exploration, then a rest with an Arabic drink at the stable. From 1,000 EGP, up to 4,000 EGP depending on the horse.",
    },
    ar: {
      title: "طلعة VIP برايفت",
      copy: "تجربة خاصة تناسبك: طلعة شروق أو غروب، سيشن تصوير احترافي عند الأهرامات، خيارات السرعة على مزاجك، استكشاف الصحراء والأهرامات، وبعدها استراحة ومشروب في القعدة العربي. تبدأ من 1000 جنيه وقد تصل إلى 4000 جنيه حسب نوع ومستوى الحصان.",
    },
  },
  {
    id: "romah",
    group: "vip",
    image: img.rearing,
    price: 1000,
    oldPrice: 1500,
    en: {
      title: 'Ride on Stallion "El-Rayes"',
      copy: "El-Rayes is our most expensive, top-tier stallion, a rare, show-standard Arabian for riders who want the finest horse on the plateau.",
    },
    ar: {
      title: "طلعة بالحصان الريس",
      copy: "الريس هو أغلى وأرقى خيولنا، حصان عربي أصيل بمستوى المعارض لمن يبحث عن أفضل حصان في المنطقة.",
    },
  },
  {
    id: "sbresso",
    group: "vip",
    image: img.espresso,
    price: 400,
    en: {
      title: 'Calm Ride on "Sbresso"',
      copy: "The gentlest horse in the stable, ideal for first-time riders, families and relaxed photo rides.",
    },
    ar: {
      title: "الحصان الهادي سبريسو",
      copy: "أهدأ خيول الإسطبل، مثالي للمبتدئين والعائلات وجلسات التصوير الهادئة.",
    },
  },
  {
    id: "daily",
    group: "offers",
    image: img.groom,
    price: 350,
    oldPrice: 500,
    en: {
      title: "Daily Stable Ride",
      copy: "Our everyday ride offer straight from the stable, a full riding session at a special daily price.",
    },
    ar: {
      title: "عرض الرايد اليومي في الاسطبل",
      copy: "عرض الركوب اليومي من الإسطبل، جلسة ركوب كاملة بسعر خاص كل يوم.",
    },
  },
  {
    id: "friday",
    group: "offers",
    image: img.duo,
    price: 350,
    oldPrice: 500,
    en: {
      title: "Friday Friends Offer",
      copy: "Ride with your friends every Friday, with group pricing per rider for the whole crew.",
    },
    ar: {
      title: "عرض الصحاب يوم الجمعة",
      copy: "اركب مع أصحابك كل جمعة، بسعر خاص للمجموعة لكل فارس.",
    },
  },
  {
    id: "magic",
    group: "offers",
    image: img.magicWater,
    price: 700,
    en: {
      title: "Magic Long-Distance Desert Ride",
      copy: "Our longest route across the Samman desert, with wide open sand, big distances and endless horizons.",
    },
    ar: {
      title: "طلعة ماجيك أطول مسافة في السمان",
      copy: "أطول مسار لدينا في صحراء السمان، مع رمال مفتوحة ومسافات طويلة وأفق لا ينتهي.",
    },
  },
  {
    id: "training",
    group: "training",
    image: img.training,
    price: 3000,
    en: {
      title: "Professional Equestrian Training Course",
      copy: "A full training course from seat and balance to collected canter and jumping basics, with horses matched to your level.",
    },
    ar: {
      title: "تدريب فروسية",
      copy: "كورس تدريب متكامل من الجلسة والتوازن حتى الجري المنضبط وأساسيات الحجز، مع خيول مناسبة لمستواك.",
    },
  },
];

export type GearItem = {
  id: string;
  price: number;
  oldPrice?: number;
  en: string;
  ar: string;
};

export const gear: GearItem[] = [
  {
    id: "saddle",
    price: 9000,
    en: "Statue-Style Horn Saddle",
    ar: "سرج بقرون شبيه للستاتيوس",
  },
  {
    id: "leather-boots",
    price: 1100,
    oldPrice: 1500,
    en: "Natural Leather Boots",
    ar: "هاف بوت جلد طبيعي",
  },
  {
    id: "synthetic-boots",
    price: 850,
    en: "Imported Synthetic Boots",
    ar: "هاف بوت جلد صناعي مستورد",
  },
  {
    id: "crop",
    price: 150,
    en: "Riding Crop",
    ar: "كرباج ركوب",
  },
];

export const locations = [
  {
    id: "giza",
    image: img.pyramidsWalk,
    maps:
      "https://maps.google.com/?q=X45V+8RR+اسطبلات+المنطقة+الاثرية,+Al+Haram,+Giza+Governorate+3514012",
  },
  {
    id: "saqqara",
    image: img.saqqaraLocation,
    maps:
      "https://www.google.com/maps?q=V6W6+PG2+Golden+Hooves+Stable,+Abusir,+Badrshein,+Giza+Governorate+3352533",
  },
];

export const testimonials = [
  { flag: "" },
  { flag: "" },
  { flag: "" },
];
