import Image from "next/image";

const MAP_QUERY = "Bãi Sau, Vũng Tàu, Bà Rịa - Vũng Tàu";
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
const MAP_LINK_URL = `https://maps.google.com/?q=${encodeURIComponent("Cỏ Homestay " + MAP_QUERY)}`;

export default function BodyMap() {
  return (
    <section id="vi-tri" className="relative my-6 sm:my-8 md:my-10 border-y border-[#CDE1D3]/80 shadow-[0_4px_25px_rgba(20,56,39,0.03)]">
      {/* Nền ảnh tràn 100% chiều ngang */}
      <div className="relative overflow-hidden min-h-[340px] md:min-h-[360px] flex items-center">
        {/* Background Vung Tau Landscape Photo */}
        <Image
          src="/images/vungtau_landscape.jpg"
          alt="Bờ biển thành phố Vũng Tàu"
          fill
          sizes="100vw"
          unoptimized
          className="object-cover"
        />

        {/* Gradient Sky Overlay - giữ chữ trái đọc rõ trên cả mobile (chiều dọc) lẫn desktop (chiều ngang) */}
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#DFF2FC]/95 via-[#E6F3F9]/85 lg:via-[#E6F3F9]/75 to-[#E6F3F9]/40 lg:to-[#E6F3F9]/10" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Info Box */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="text-[11px] sm:text-xs md:text-[13px] tracking-[0.2em] font-semibold text-[#C58940] uppercase">
              VỊ TRÍ
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#133826] leading-tight">
              Vũng Tàu đang đợi bạn
            </h2>

            <p className="text-[#3A5043] text-sm md:text-base leading-relaxed max-w-md font-normal">
              Dễ dàng di chuyển đến các địa điểm ăn uống, vui chơi nổi tiếng.
            </p>

            <div className="pt-1.5 sm:pt-2">
              <a
                href={MAP_LINK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1F5C3B] hover:bg-[#27734A] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-xs sm:text-sm transition-all shadow-md shadow-[#1F5C3B]/20 hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <span>Xem trên Google Maps</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Right Live Google Map Card */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="aspect-[16/9] relative w-full bg-[#DFF2FC]">
                {/* Bản đồ live gọi từ Google Maps (tương tác: kéo, zoom) */}
                <iframe
                  title="Bản đồ vị trí Cỏ Homestay Vũng Tàu"
                  src={MAP_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />

                {/* Ghim vị trí Cỏ Homestay phủ lên bản đồ */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center -translate-y-3">
                    <span className="mb-1 rounded-full bg-white px-3 py-1 text-[11px] md:text-xs font-bold text-[#143827] shadow-lg border border-[#E5EEE7] whitespace-nowrap">
                      Cỏ Homestay
                    </span>
                    <span className="relative flex items-center justify-center">
                      <span className="absolute w-8 h-8 rounded-full bg-[#EA4335]/30 animate-ping" />
                      <svg className="relative w-8 h-8 text-[#EA4335] drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Expand / Fullscreen icon badge at bottom right */}
              <a
                href={MAP_LINK_URL}
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
    </section>
  );
}
