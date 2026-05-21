import { booking, hasOtaLinks } from "@/lib/booking";

type BookingSectionProps = {
  /** "experience" = workshop-focused, "visit" = general */
  variant?: "experience" | "visit";
};

export function BookingSection({ variant = "experience" }: BookingSectionProps) {
  const isWorkshop = variant === "experience";

  return (
    <section
      className="mt-16 border border-enring-silver/10 bg-enring-green-deep/25 p-8 md:p-12"
      aria-labelledby="booking-heading"
    >
      <p className="section-label mb-3">Reservations</p>
      <h2
        id="booking-heading"
        className="font-display text-2xl text-enring-silver-bright md:text-3xl"
      >
        {isWorkshop ? "Book Your Workshop" : "How to Book"}
      </h2>
      <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-enring-silver/75 md:text-base">
        {hasOtaLinks()
          ? "International guests often book through trusted platforms. You can also reach us directly for private sessions or special requests."
          : "Online booking links will be added soon. For now, please contact us by email — we reply in English and Japanese."}
        <span className="mt-2 block text-enring-silver/50">
          {hasOtaLinks()
            ? "海外のお客様は認知度の高い予約サイトから。プライベート体験・ご質問はメールでも承ります。"
            : "予約サイトのリンクは準備中です。メールでのお問い合わせ・ご予約を承っております。"}
        </span>
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        {booking.getYourGuideUrl ? (
          <a
            href={booking.getYourGuideUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book on GetYourGuide
          </a>
        ) : null}

        {booking.viatorUrl ? (
          <a
            href={booking.viatorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book on Viator
          </a>
        ) : null}

        {booking.directBookingUrl ? (
          <a
            href={booking.directBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Book Direct
          </a>
        ) : null}

        <a href={`mailto:${booking.email}`} className={hasOtaLinks() ? "btn-ghost" : "btn-primary"}>
          Email Us
        </a>
      </div>

      {hasOtaLinks() ? (
        <p className="mt-6 font-sans text-xs leading-relaxed text-enring-silver/45">
          Platform bookings include secure payment and reviews. Direct email is best for
          groups, custom designs, or same-day availability checks.
        </p>
      ) : null}
    </section>
  );
}
