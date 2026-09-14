# Khyaaal 11 Arabian Dreams

Build a premium, ultra-luxurious React web application for an elite horse stable in Egypt named "khyaaal11". The website must target high-end international tourists, VIP guests, photography enthusiasts, and local equestrian lovers looking for an unforgettable riding experience near the Giza Pyramids and Abusir.

---

### 1. Brand Identity & Visual Aesthetic
- **Tone & Mood:** High-end, regal, heritage-infused, modern luxury. Think 5-star resort aesthetic mixed with classic Arabian equestrian elegance.
- **Color Palette:**
  - Background: Obsidian / Deep Dark Matte (`#0B0C10` or `#121212`) paired with rich Cream/Warm Sand (`#F4F1EA`) sections.
  - Accent Colors: Metallic Champagne Gold (`#D4AF37` / `#C5A059`) for highlights, borders, icons, and CTA buttons.
  - Secondary: Deep Forest Green / Rich Burgundy for subtle luxury accents.
- **Typography:** Elegant serif fonts for headings (e.g., *Cinzel*, *Playfair Display*, or *Cormorant Garamond*) paired with clean sans-serif for body text (e.g., *Plus Jakarta Sans* or *Inter*).

---

### 2. Header & Navigation
- **Navigation Bar:** Fixed glassmorphism navbar (`backdrop-blur-md`) with subtle gold border.
  - Brand Logo: "KHYAAAL 11" with a stylized gold horse icon/monogram.
  - Menu Items: *Home*, *Experiences*, *Our Locations*, *Gallery*, *Contact*.
  - Header CTA: Gold glowing button labeled **"Book Your Ride"** or **"WhatsApp Us"** linking directly to `https://wa.me/201055599648`.

---

### 3. Page Structure & Sections

#### Section A: Hero (Above the Fold)
- High-impact background visual (cinematic video loop or slider overlay of Arabian horses running in the Giza desert at golden hour).
- Tagline: *"Where Heritage Meets Equestrian Perfection"*
- Sub-text: *"Experience the majestic wonders of Egypt on horseback with Khyaaal11."*
- Primary CTA Buttons:
  1. **"Explore Packages"** (Scrolls smoothly to Services section).
  2. **"Instant WhatsApp Booking"** (Direct link to `https://wa.me/201055599648` with icon).

#### Section B: Brand Story / About Us
- Narrative text highlighting royal Arabian lineage, expert horse care, professional guides, and safety standards.
- Feature 3 core value cards with subtle hover animations:
  - *Purebred Arabian Lineage*
  - *Breathtaking Iconic Routes*
  - *VIP White-Glove Service*

#### Section C: Packages & Riding Experiences (Interactive Cards)
Display interactive service cards with hover-zoom effects, duration, badges, and quick-book buttons:
1. **Pyramids Sunset & Sunrise Trails** (Giza Pyramids view, golden hour photo ops).
2. **Abusir Countryside & Desert Escapes** (Serene, open-desert galloping & historic trails).
3. **Private VIP & Couple Shoots** (Professional photo shoot setups with trained horses).
4. **Night Rides under the Stars** (Desert bonfire & moonlit riding experience).
5. **Private Riding Lessons** (Beginner to advanced instruction).

#### Section D: Dual Location Showcase
Create an interactive component displaying the two main stable branches with direct Google Maps navigation buttons:
- **Location 1: Giza Pyramids Archaeological Zone**
  - Address: *Al Haram, Giza Governorate*
  - Feature: Pyramid vistas, ideal for tourists and short trail rides.
  - Button: `"Open in Google Maps"` (Link: `https://maps.google.com/?q=X45V+8RR+اسطبلات+المنطقة+الاثرية,+Al+Haram,+Giza+Governorate+3514012`)
- **Location 2: Abusir Countryside Stable (Golden Hooves)**
  - Address: *Abusir, Badrshein, Giza Governorate*
  - Feature: Wide desert spans, tranquil green palm groves, extended galloping tracks.
  - Button: `"Open in Google Maps"` (Link: `https://www.google.com/maps?q=V6W6+PG2+Golden+Hooves+Stable,+Abusir,+Badrshein,+Giza+Governorate+3352533`)

#### Section E: Visual Gallery & Media Wall
- Masonry image/video grid displaying photos of horses, riding tours, celebrities/guests, and desert sunsets.
- Tab filter: *All*, *Pyramid Rides*, *Abusir Trails*, *Photoshoots*.
- Social feed teaser banner linking to all official social channels:
  - Instagram: `https://www.instagram.com/khyaaal11/`
  - TikTok: `https://www.tiktok.com/@khyaaal11`
  - Facebook: `https://www.facebook.com/khyaaal11/?locale=it_IT`
  - YouTube: `https://www.youtube.com/@khyaaal11`

#### Section F: Reviews & Testimonials
- Testimonial carousel featuring luxury guest reviews with star ratings, guest names, and country flags.

#### Section G: Direct Booking & Contact Form
- Simple, high-converting booking modal/form:
  - Input fields: Name, Phone/WhatsApp, Preferred Date, Stable Location (Giza or Abusir), Number of Riders.
  - Submit action: Automatically opens WhatsApp with a pre-filled message sent to `+20 10 55599648`.

#### Section H: Footer
- Brand copyright: *"© Khyaaal11 Equestrian Experience. All Rights Reserved."*
- Social media icon row (Instagram, TikTok, Facebook, YouTube).
- Quick links and contact numbers (`+20 10 55599648`).

---

### 4. Technical Requirements & Interactivity
- **Floating Widget:** Include a sticky floating WhatsApp button on the bottom right corner of the page with a gentle pulsing animation.
- **Animations:** Use Smooth Scroll, Framer Motion fade-ins, card elevation on hover, and light gold glow effects.
- **Responsive:** Mobile-first responsive design, ensuring perfect scaling on iPhones and tablets.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/abb60f49-6a76-4905-bceb-aad49907861a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
