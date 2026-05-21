/**
 * Booking & inquiry channels.
 * Override via .env.local (see .env.example).
 */
const GETYOURGUIDE_URL =
  "https://www.getyourguide.com/tokyo-l193/tokyo-japanese-coin-ring-making-workshop-roppongi-t1328084/";

export const booking = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@enring-roppongi.example",

  getYourGuideUrl:
    process.env.NEXT_PUBLIC_GETYOURGUIDE_URL ?? GETYOURGUIDE_URL,

  viatorUrl: process.env.NEXT_PUBLIC_VIATOR_URL ?? "",

  directBookingUrl: process.env.NEXT_PUBLIC_DIRECT_BOOKING_URL ?? "",
} as const;

export function hasOtaLinks() {
  return Boolean(booking.getYourGuideUrl || booking.viatorUrl);
}
