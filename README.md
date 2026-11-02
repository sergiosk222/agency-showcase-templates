# STUDIO / Five Cinematic Website Templates

Five different premium visual concepts for Greek local businesses, developed as a single reusable static project. Designed to show prospects something tangible and turn interest into appointment requests.

## Live previews

| Industry | Concept | Live demo |
| --- | --- | --- |
| Beauty & Nails | ÉLAN | [Open beauty demo](https://sergiosk222.github.io/agency-showcase-templates/?demo=beauty) |
| Flower Studio | ANÉMONE | [Open florist demo](https://sergiosk222.github.io/agency-showcase-templates/?demo=flowers) |
| Pet Grooming | WOOF. | [Open grooming demo](https://sergiosk222.github.io/agency-showcase-templates/?demo=grooming) |
| Car Wash / Detailing | OBSIDIAN | [Open detailing demo](https://sergiosk222.github.io/agency-showcase-templates/?demo=detailing) |
| Barbershop | THE GENTLEMEN | [Open barber demo](https://sergiosk222.github.io/agency-showcase-templates/?demo=barber) |

[View the entire collection](https://sergiosk222.github.io/agency-showcase-templates/)

## What's included

- Responsive cinematic hero sections with different art direction per niche
- Editorial scrolling marquee, scroll reveal animations and photo slides
- Gallery arrows, swipe controls, auto-rotation and reduced-motion support
- Interactive service menu and booking request form on **every** demo
- Responsive navigation and accessible focus states
- No framework or dependencies — deploy directly to GitHub Pages

## Customize for a client (quick workflow)

1. Duplicate the repository with **Use this template** or clone it.
2. Edit **data.js**: brand, texts, services/prices, photo IDs, city, hours, booking settings. This is the main source of data.
3. Adjust **styles.css**, if needed. Each niche has a named class (such as .beauty and .barber) and its own colors.
4. For a standalone client site, change the default index/gallery behavior in **app.js** and optionally remove the studio demo navigation/disclaimer.
5. Configure the booking system, test on mobile, publish and connect a custom domain.

## Booking: request is NOT a confirmed appointment

All five demos contain a functional booking **request** form: service, date, preferred time, name and phone.

In data.js, each concept has a booking configuration:

- Empty whatsapp + empty externalUrl: safe demo mode; shows a request preview and sends nothing.
- Set whatsapp to a **real**, digits-only international business number (e.g. 3069XXXXXXXX). Visitors receive a prefilled WhatsApp message they can send. The business confirms the time manually.
- Set externalUrl to the real booking URL from Fresha, Cal.com, Booksy, etc. to use an external live availability and confirmation engine.

This project does **not** verify real-time availability or save appointments. For automatic confirmations build a calendar-integrated backend with availability rules, staff schedules, notifications, conflict prevention, and privacy controls.

## Before delivering a client website

- Replace imagery with authorized business photographs or correctly licensed stock assets.
- Replace fictional branding, sample prices, hours, and locations with verified details.
- Configure real booking and test end-to-end.
- Add appropriate GDPR/privacy notices for any personal information collected or transferred.
- Audit mobile UI, accessibility, page speed, and all contact links.

## References

Design inspiration (not reproduced): [Dribbble florist](https://dribbble.com/tags/florist-website), [TRIMZA grooming](https://www.behance.net/gallery/248323223/TRIMZA), [Dribbble detailing](https://dribbble.com/shots/27154277-Automotive-Detailing-Website-Dark-Mode-Landing-Page-UI), [Awwwards](https://www.awwwards.com/), [One Page Love](https://onepagelove.com/), [60fps.design](https://60fps.design/).

Concept brands and prices are fictional. The demos load Unsplash images and Google Fonts from external providers.

## Local preview

Open index.html in a browser, or start a static server:

    python -m http.server 8080

Then visit http://localhost:8080/?demo=beauty
