import Image from "next/image";

export default function FinalCta({ onOpenBooking }) {
  return (
    <section id="lien-he" className="relative py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[32px] md:rounded-[48px] overflow-hidden min-h-[380px] md:min-h-[440px] flex items-center shadow-2xl border-4 border-white/80">
          {/* Full Sunset Photography Background */}
          <div className="absolute inset-0">
            <Image
              src="/images/sunset_balcony.jpg"
              alt="Hoàng hôn Vũng Tàu tại Cỏ Homestay"
              fill
              sizes="100vw"
              unoptimized
              className="object-cover"
            />
            {/* Subtle darkening overlay for pristine text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12 md:p-16 w-full">
            <div className="max-w-xl space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
                Hẹn bạn ở Vũng Tàu
              </h2>

              <p className="text-stone-200 text-base md:text-lg font-light">
                Một căn phòng nhỏ. Một chuyến đi thật đáng nhớ.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => onOpenBooking?.("Phòng tiêu chuẩn")}
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-[#EAF1EB] text-[#143827] px-7 py-3.5 rounded-full font-semibold text-sm transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Đặt phòng ngay</span>
                  <span className="text-base">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
