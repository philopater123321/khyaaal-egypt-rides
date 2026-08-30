import pyramidsWalk from "@/assets/IMG_3525_11zon.jpg.asset.json";
import rearing from "@/assets/IMG_3528_11zon.jpg.asset.json";
import duo from "@/assets/IMG_2997_11zon.jpg.asset.json";
import groom from "@/assets/IMG_3004_11zon.jpg.asset.json";
import greyRider from "@/assets/IMG_3023_11zon.jpg.asset.json";
import chestnut from "@/assets/IMG_3046_11zon.jpg.asset.json";
import sunsetBlack from "@/assets/IMG_3134_11zon.jpg.asset.json";
import bayPyramid from "@/assets/IMG_3203_11zon.jpg.asset.json";
import sunsetGuest from "@/assets/IMG_3219_11zon.jpg.asset.json";
import goldenHooves from "@/assets/IMG_3233_1_11zon.jpg.asset.json";

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
  pyramidsWalk: pyramidsWalk.url,
  rearing: rearing.url,
  duo: duo.url,
  groom: groom.url,
  greyRider: greyRider.url,
  chestnut: chestnut.url,
  sunsetBlack: sunsetBlack.url,
  bayPyramid: bayPyramid.url,
  sunsetGuest: sunsetGuest.url,
  goldenHooves: goldenHooves.url,
};

export type Category = "Pyramid Rides" | "Abusir Trails" | "Photoshoots";

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
    alt: "Rider on a bay Arabian horse in front of an Abusir pyramid",
    category: "Abusir Trails",
  },
  {
    src: img.sunsetBlack,
    alt: "Rider on a black Arabian horse at desert sunset",
    category: "Abusir Trails",
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
    category: "Abusir Trails",
  },
  {
    src: img.duo,
    alt: "Two guides standing with a grey and a bay Arabian horse",
    category: "Pyramid Rides",
  },
  {
    src: img.groom,
    alt: "Groom walking a saddled white Arabian horse near the stable",
    category: "Pyramid Rides",
  },
];

export const packages = [
  {
    title: "Pyramids Sunset & Sunrise Trails",
    duration: "1–2 hours",
    badge: "Signature",
    image: img.pyramidsWalk,
    copy: "Ride the sands of the Giza plateau as the light turns to gold, with unobstructed pyramid vistas and a dedicated photographer's eye at every stop.",
  },
  {
    title: "Abusir Countryside & Desert Escapes",
    duration: "2–3 hours",
    badge: "Galloping",
    image: img.bayPyramid,
    copy: "Open desert spans, palm groves and ancient Abusir monuments — long, uninterrupted tracks for guests who want to truly canter.",
  },
  {
    title: "Private VIP & Couple Shoots",
    duration: "90 minutes",
    badge: "VIP",
    image: img.sunsetGuest,
    copy: "Trained, camera-calm horses, styled tack and a private set. Curated for couples, bridal shoots and editorial portraits.",
  },
  {
    title: "Night Rides under the Stars",
    duration: "2 hours",
    badge: "Moonlit",
    image: img.sunsetBlack,
    copy: "Moonlit desert riding closed with a bonfire, mint tea and Bedouin hospitality under an unpolluted Egyptian sky.",
  },
  {
    title: "Private Riding Lessons",
    duration: "45–60 minutes",
    badge: "All levels",
    image: img.greyRider,
    copy: "One-to-one instruction from seat and balance to collected canter, with horses matched precisely to your level.",
  },
];

export const locations = [
  {
    name: "Giza Pyramids Archaeological Zone",
    address: "Al Haram, Giza Governorate 3514012",
    feature:
      "Pyramid vistas moments from the plateau — ideal for first-time riders, tourists and short golden-hour trails.",
    image: img.pyramidsWalk,
    maps:
      "https://maps.google.com/?q=X45V+8RR+اسطبلات+المنطقة+الاثرية,+Al+Haram,+Giza+Governorate+3514012",
  },
  {
    name: "Abusir Countryside Stable — Golden Hooves",
    address: "Abusir, Badrshein, Giza Governorate 3352533",
    feature:
      "Wide desert spans, tranquil palm groves and extended galloping tracks for experienced riders and long escapes.",
    image: img.goldenHooves,
    maps:
      "https://www.google.com/maps?q=V6W6+PG2+Golden+Hooves+Stable,+Abusir,+Badrshein,+Giza+Governorate+3352533",
  },
];

export const testimonials = [
  {
    quote:
      "Sunrise at the pyramids on a purebred Arabian — the horses were immaculate, the team utterly professional. The single best morning of our Egypt trip.",
    name: "Charlotte M.",
    country: "United Kingdom",
    flag: "🇬🇧",
  },
  {
    quote:
      "We booked the couple shoot in Abusir. Calm horses, beautiful tack, and photographs we now have framed at home. White-glove from first message to last.",
    name: "Luca & Sofia",
    country: "Italy",
    flag: "🇮🇹",
  },
  {
    quote:
      "As a rider of twenty years I am hard to impress. Khyaaal11 gave me a forward, well-schooled horse and miles of open desert to gallop.",
    name: "Anders K.",
    country: "Sweden",
    flag: "🇸🇪",
  },
  {
    quote:
      "The night ride with the bonfire felt like something out of a film. Safety briefing was thorough and our guide never left our side.",
    name: "Dana R.",
    country: "United States",
    flag: "🇺🇸",
  },
];
