import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "ar";

const en = {
  brand: "KHYAAAL 11",
  nav: {
    home: "Home",
    experiences: "Experiences",
    locations: "Our Locations",
    gallery: "Gallery",
    contact: "Contact",
    cta: "Book Your Ride",
    menu: "Toggle menu",
    language: "Language",
  },
  hero: {
    eyebrow: "Giza Pyramids · Abusir · Est. Egypt",
    titleA: "Where Heritage Meets",
    titleB: "Equestrian Perfection",
    copy: "Experience the majestic wonders of Egypt on horseback with Khyaaal11 — purebred Arabians, private guides and routes written into history.",
    ctaPackages: "Explore Packages",
    ctaWhatsapp: "Instant WhatsApp Booking",
  },
  about: {
    eyebrow: "Our Story",
    titleA: "A stable built on",
    titleHighlight: "bloodline",
    titleB: "and hospitality",
    p1: "Khyaaal11 was founded by horsemen raised beside the pyramids, on the belief that a ride in Egypt should feel as considered as a five-star suite. Our Arabians descend from royal desert lines — light, willing and famously kind under saddle.",
    p2: "Every guest is matched to a horse and a guide, briefed on safety, and accompanied from mounting block to final photograph. Beginners are welcome; seasoned riders are genuinely challenged.",
    years: "Years in the saddle",
    values: [
      {
        title: "Purebred Arabian Lineage",
        copy: "Our herd is bred and kept to show standard — sound, schooled and cared for daily by farriers, vets and grooms who know each horse by name.",
      },
      {
        title: "Breathtaking Iconic Routes",
        copy: "From the Giza plateau's pyramid skyline to the quiet dunes and palm groves of Abusir, every trail is chosen for beauty and safe footing.",
      },
      {
        title: "VIP White-Glove Service",
        copy: "Private guides, hotel transfers on request, briefed safety protocol and photography support — arranged before you arrive.",
      },
    ],
  },
  packagesSection: {
    eyebrow: "Packages & Experiences",
    title: "Curated rides across the sands of Giza",
    copy: "Every experience is private by default and tailored to your level, your timing and your camera.",
    quickBook: "Quick Book",
    waMessage: (title: string) =>
      `Hello Khyaaal11, I would like to book the "${title}" experience. Could you share availability and pricing?`,
    items: [
      {
        title: "Pyramids Sunset & Sunrise Trails",
        duration: "1–2 hours",
        badge: "Signature",
        copy: "Ride the sands of the Giza plateau as the light turns to gold, with unobstructed pyramid vistas and a dedicated photographer's eye at every stop.",
      },
      {
        title: "Abusir Countryside & Desert Escapes",
        duration: "2–3 hours",
        badge: "Galloping",
        copy: "Open desert spans, palm groves and ancient Abusir monuments — long, uninterrupted tracks for guests who want to truly canter.",
      },
      {
        title: "Private VIP & Couple Shoots",
        duration: "90 minutes",
        badge: "VIP",
        copy: "Trained, camera-calm horses, styled tack and a private set. Curated for couples, bridal shoots and editorial portraits.",
      },
      {
        title: "Night Rides under the Stars",
        duration: "2 hours",
        badge: "Moonlit",
        copy: "Moonlit desert riding closed with a bonfire, mint tea and Bedouin hospitality under an unpolluted Egyptian sky.",
      },
      {
        title: "Private Riding Lessons",
        duration: "45–60 minutes",
        badge: "All levels",
        copy: "One-to-one instruction from seat and balance to collected canter, with horses matched precisely to your level.",
      },
    ],
  },
  locationsSection: {
    eyebrow: "Our Locations",
    title: "Two stables, two very different horizons",
    copy: "Choose the pyramid plateau or the open countryside of Abusir — or ride both across a single stay.",
    maps: "Open in Google Maps",
    items: [
      {
        name: "Giza Pyramids Archaeological Zone",
        address: "Al Haram, Giza Governorate 3514012",
        feature:
          "Pyramid vistas moments from the plateau — ideal for first-time riders, tourists and short golden-hour trails.",
      },
      {
        name: "Abusir Countryside Stable — Golden Hooves",
        address: "Abusir, Badrshein, Giza Governorate 3352533",
        feature:
          "Wide desert spans, tranquil palm groves and extended galloping tracks for experienced riders and long escapes.",
      },
    ],
  },
  gallerySection: {
    eyebrow: "Gallery & Media Wall",
    title: "Moments from the plateau",
    copy: "Frames from our rides, our horses and our guests — shot on location at Giza and Abusir.",
    tabs: {
      All: "All",
      "Pyramid Rides": "Pyramid Rides",
      "Abusir Trails": "Abusir Trails",
      Photoshoots: "Photoshoots",
    },
    followEyebrow: "Follow the herd",
    followTitle: "New rides, new horses and new sunsets — every week on our channels.",
  },
  testimonialsSection: {
    eyebrow: "Guest Reviews",
    title: "Told by those who rode",
    prev: "Previous review",
    next: "Next review",
    review: (n: number) => `Review ${n}`,
    items: [
      {
        quote:
          "Sunrise at the pyramids on a purebred Arabian — the horses were immaculate, the team utterly professional. The single best morning of our Egypt trip.",
        name: "Charlotte M.",
        country: "United Kingdom",
      },
      {
        quote:
          "We booked the couple shoot in Abusir. Calm horses, beautiful tack, and photographs we now have framed at home. White-glove from first message to last.",
        name: "Luca & Sofia",
        country: "Italy",
      },
      {
        quote:
          "As a rider of twenty years I am hard to impress. Khyaaal11 gave me a forward, well-schooled horse and miles of open desert to gallop.",
        name: "Anders K.",
        country: "Sweden",
      },
      {
        quote:
          "The night ride with the bonfire felt like something out of a film. Safety briefing was thorough and our guide never left our side.",
        name: "Dana R.",
        country: "United States",
      },
    ],
  },
  booking: {
    eyebrow: "Direct Booking",
    titleA: "Reserve your",
    titleHighlight: "ride",
    copy: "Send your details and we will confirm horses, guide and timing on WhatsApp within minutes. Sunrise and sunset slots are limited and released daily.",
    name: "Full name",
    namePlaceholder: "Your name",
    phone: "Phone / WhatsApp",
    phonePlaceholder: "+00 000 000 000",
    date: "Preferred date",
    location: "Stable location",
    giza: "Giza Pyramids",
    abusir: "Abusir (Golden Hooves)",
    riders: "Number of riders",
    submit: "Send via WhatsApp",
    message: (f: {
      name: string;
      phone: string;
      date: string;
      location: string;
      riders: string;
    }) => `Hello Khyaaal11, I would like to book a ride.
Name: ${f.name}
WhatsApp: ${f.phone}
Preferred date: ${f.date}
Stable: ${f.location}
Riders: ${f.riders}`,
  },
  footer: {
    copy: "Elite Arabian horse experiences at the Giza Pyramids and the Abusir countryside.",
    quickLinks: "Quick Links",
    contact: "Contact",
    booking: "Booking",
    rights: "© Khyaaal11 Equestrian Experience. All Rights Reserved.",
  },
  whatsapp: "Chat with us on WhatsApp",
};

export type Dict = typeof en;

const ar: Dict = {
  brand: "خيال 11",
  nav: {
    home: "الرئيسية",
    experiences: "التجربة والخدمات",
    locations: "الفروع والمواقع",
    gallery: "المعرض",
    contact: "تواصل معنا",
    cta: "احجز تجربتك الآن",
    menu: "القائمة",
    language: "اللغة",
  },
  hero: {
    eyebrow: "أهرامات الجيزة · أبو صير · مصر",
    titleA: "حيث تلتقي الأصالة",
    titleB: "بالفخامة الملكية",
    copy: "استكشف أهرامات الجيزة وصحراء أبو صير على ظهور أصايل الخيل العربية مع خيال 11.",
    ctaPackages: "استكشف الباقات",
    ctaWhatsapp: "تواصل عبر الواتساب",
  },
  about: {
    eyebrow: "قصتنا",
    titleA: "إسطبل قائم على",
    titleHighlight: "الأصل العريق",
    titleB: "وكرم الضيافة",
    p1: "تأسس خيال 11 على أيدي فرسان نشأوا في ظلال الأهرامات، إيمانًا بأن تجربة ركوب الخيل في مصر يجب أن تكون بمستوى أرقى الفنادق. خيولنا العربية من سلالات صحراوية أصيلة — خفيفة، مطيعة، ومعروفة بلطفها تحت السرج.",
    p2: "نختار لكل ضيف الحصان والمرشد المناسبين، مع إحاطة كاملة بقواعد السلامة ومصاحبته من لحظة الصعود حتى آخر صورة. المبتدئون مرحّب بهم، والفرسان المتمرسون يجدون التحدي الحقيقي.",
    years: "عامًا في عالم الفروسية",
    values: [
      {
        title: "خيول عربية أصيلة",
        copy: "خيولنا مربّاة على مستوى المعارض — سليمة، مدرّبة، وتحت رعاية يومية من البياطرة والمدربين والعاملين الذين يعرفون كل حصان باسمه.",
      },
      {
        title: "مسارات أيقونية خلابة",
        copy: "من أفق الأهرامات في هضبة الجيزة إلى كثبان وواحات النخيل الهادئة في أبو صير، كل مسار مختار لجماله وأمان أرضه.",
      },
      {
        title: "خدمة VIP فائقة",
        copy: "مرشدون خاصون، توصيل من الفندق عند الطلب، بروتوكول سلامة واضح ودعم تصوير احترافي — كل ذلك مُجهَّز قبل وصولك.",
      },
    ],
  },
  packagesSection: {
    eyebrow: "الباقات والتجارب",
    title: "جولات منسّقة على رمال الجيزة",
    copy: "كل تجربة خاصة بالكامل ومصممة حسب مستواك ووقتك وكاميرتك.",
    quickBook: "احجز سريعًا",
    waMessage: (title: string) =>
      `مرحبًا خيال 11، أرغب في حجز تجربة "${title}". هل يمكنكم إخباري بالمواعيد المتاحة والأسعار؟`,
    items: [
      {
        title: "جولات غروب وشروق الشمس بالأهرامات",
        duration: "ساعة – ساعتان",
        badge: "الأشهر",
        copy: "امتطِ الخيل على رمال هضبة الجيزة حين يتحول الضوء إلى ذهب، مع إطلالات مفتوحة على الأهرامات وعين مصوّر محترف في كل محطة.",
      },
      {
        title: "مغامرات صحراء وريف أبو صير",
        duration: "ساعتان – 3 ساعات",
        badge: "للجري السريع",
        copy: "مساحات صحراوية مفتوحة، بساتين نخيل وآثار أبو صير القديمة — مسارات طويلة متصلة لمن يريد الجري الحقيقي.",
      },
      {
        title: "جلسات تصوير ملكية خاصة",
        duration: "90 دقيقة",
        badge: "VIP",
        copy: "خيول مدرّبة وهادئة أمام الكاميرا، أطقم سروج مزيّنة وموقع خاص. مثالية للأزواج وجلسات العرائس والتصوير الاحترافي.",
      },
      {
        title: "ركوب الخيل الليلي تحت النجوم",
        duration: "ساعتان",
        badge: "ليلية",
        copy: "ركوب في الصحراء على ضوء القمر يُختتم بنار مخيم وشاي بالنعناع وكرم بدوي تحت سماء مصرية صافية.",
      },
      {
        title: "دروس ركوب الخيل الخاصة",
        duration: "45 – 60 دقيقة",
        badge: "لكل المستويات",
        copy: "تدريب فردي من الجلسة والتوازن حتى الجري المنضبط، مع خيول مختارة بدقة حسب مستواك.",
      },
    ],
  },
  locationsSection: {
    eyebrow: "الفروع والمواقع",
    title: "إسطبلان، وأفقان مختلفان تمامًا",
    copy: "اختر هضبة الأهرامات أو ريف أبو صير المفتوح — أو اجمع بينهما في رحلة واحدة.",
    maps: "افتح في خرائط جوجل",
    items: [
      {
        name: "فرع أهرامات الجيزة (منطقة الهرم)",
        address: "الهرم، محافظة الجيزة 3514012",
        feature:
          "إطلالات على الأهرامات على بعد خطوات من الهضبة — مثالية للمبتدئين والسائحين وجولات الساعة الذهبية القصيرة.",
      },
      {
        name: "فرع ريف وصحراء أبو صير (المهماز الذهبي)",
        address: "أبو صير، البدرشين، محافظة الجيزة 3352533",
        feature:
          "مساحات صحراوية واسعة وبساتين نخيل هادئة ومسارات جري ممتدة للفرسان المتمرسين والرحلات الطويلة.",
      },
    ],
  },
  gallerySection: {
    eyebrow: "المعرض وحائط الصور",
    title: "لحظات من الهضبة",
    copy: "لقطات من جولاتنا وخيولنا وضيوفنا — مصوّرة في الجيزة وأبو صير.",
    tabs: {
      All: "الكل",
      "Pyramid Rides": "جولات الأهرامات",
      "Abusir Trails": "مسارات أبو صير",
      Photoshoots: "جلسات التصوير",
    },
    followEyebrow: "تابعنا",
    followTitle: "جولات جديدة، خيول جديدة وغروب جديد — كل أسبوع على قنواتنا.",
  },
  testimonialsSection: {
    eyebrow: "آراء الضيوف",
    title: "بكلمات من امتطى الخيل معنا",
    prev: "التقييم السابق",
    next: "التقييم التالي",
    review: (n: number) => `التقييم ${n}`,
    items: [
      {
        quote:
          "شروق الشمس عند الأهرامات على ظهر حصان عربي أصيل — خيول في أبهى حال وفريق بالغ الاحترافية. أجمل صباح في رحلتنا بمصر.",
        name: "شارلوت م.",
        country: "المملكة المتحدة",
      },
      {
        quote:
          "حجزنا جلسة تصوير للأزواج في أبو صير. خيول هادئة وأطقم جميلة وصور نعلّقها الآن في منزلنا. خدمة راقية من أول رسالة إلى آخرها.",
        name: "لوكا وصوفيا",
        country: "إيطاليا",
      },
      {
        quote:
          "بعد عشرين عامًا من الفروسية يصعب إبهاري. قدّم لي خيال 11 حصانًا مدرّبًا ومتحمسًا وأميالًا من الصحراء المفتوحة للجري.",
        name: "أندرس ك.",
        country: "السويد",
      },
      {
        quote:
          "الركوب الليلي مع نار المخيم كان كأنه من فيلم. إحاطة السلامة كانت وافية والمرشد لم يتركنا لحظة.",
        name: "دانا ر.",
        country: "الولايات المتحدة",
      },
    ],
  },
  booking: {
    eyebrow: "الحجز المباشر",
    titleA: "احجز",
    titleHighlight: "جولتك",
    copy: "أرسل بياناتك وسنؤكد الخيول والمرشد والتوقيت عبر الواتساب في دقائق. مواعيد الشروق والغروب محدودة وتُتاح يوميًا.",
    name: "الاسم الكامل",
    namePlaceholder: "اسمك",
    phone: "الهاتف / الواتساب",
    phonePlaceholder: "+00 000 000 000",
    date: "التاريخ المفضل",
    location: "الفرع",
    giza: "أهرامات الجيزة",
    abusir: "أبو صير (المهماز الذهبي)",
    riders: "عدد الفرسان",
    submit: "أرسل عبر الواتساب",
    message: (f) => `مرحبًا خيال 11، أرغب في حجز جولة.
الاسم: ${f.name}
الواتساب: ${f.phone}
التاريخ المفضل: ${f.date}
الفرع: ${f.location}
عدد الفرسان: ${f.riders}`,
  },
  footer: {
    copy: "تجارب فروسية راقية بخيول عربية أصيلة عند أهرامات الجيزة وريف أبو صير.",
    quickLinks: "روابط سريعة",
    contact: "تواصل معنا",
    booking: "الحجز",
    rights: "© خيال 11 لتجارب الفروسية. جميع الحقوق محفوظة.",
  },
  whatsapp: "تحدث معنا عبر الواتساب",
};

const dicts: Record<Lang, Dict> = { en, ar };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict; dir: "ltr" | "rtl" };

const I18nContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: en, dir: "ltr" });

const STORAGE_KEY = "khyaaal11-lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "ar" || saved === "en") setLangState(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("lang", lang);
    root.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, t: dicts[lang], dir: lang === "ar" ? "rtl" : "ltr" }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
