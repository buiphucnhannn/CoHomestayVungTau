import Image from "next/image";

export default function BodyMap() {
  return (
    <section id="vi-tri" className="relative py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl border-4 border-white min-h-[380px] md:min-h-[460px] flex items-center">
          {/* Background Vung Tau Landscape Photo */}
          <Image
            src="/images/vungtau_landscape.jpg"
            alt="Bờ biển thành phố Vũng Tàu"
            fill
            sizes="100vw"
            unoptimized
            className="object-cover"
          />

          {/* Gradient Sky Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#DFF2FC]/95 via-[#E6F3F9]/80 to-transparent" />

          {/* Content Container */}
          <div className="relative z-10 w-full p-6 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Box */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[12px] md:text-[13px] tracking-[0.2em] font-semibold text-[#C58940] uppercase">
                VỊ TRÍ
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#133826] leading-tight">
                Vũng Tàu đang đợi bạn
              </h2>

              <p className="text-[#3A5043] text-sm md:text-base leading-relaxed max-w-md font-normal">
                Dễ dàng di chuyển đến các địa điểm ăn uống, vui chơi nổi tiếng.
              </p>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Vung+Tau+Vietnam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#143827] hover:bg-[#1A4833] text-white px-6 py-3 rounded-full font-medium text-sm transition-all shadow-md shadow-[#143827]/20 hover:shadow-lg active:scale-95"
                >
                  <span>Xem trên Google Maps</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Right Floating Map Card */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <div className="aspect-[16/10] relative w-full">
                  <Image
                    src="/images/vungtau_map_card.jpg"
                    alt="Bản đồ vị trí Cỏ Homestay Vũng Tàu"
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>

                {/* Expand / Fullscreen icon badge at bottom right */}
                <a
                  href="https://maps.google.com/?q=Vung+Tau+Vietnam"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Xem bản đồ toàn màn hình"
                  className="absolute bottom-3 right-3 w-8 h-8 rounded-lg bg-white/90 hover:bg-white text-[#143827] flex items-center justify-center shadow-md transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
