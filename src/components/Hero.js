import Image from "next/image";
import LeafBranch from "./LeafBranch";

export default function Hero({ onOpenBooking }) {
  return (
    <section
      id="top"
      className="relative flex h-[calc(100dvh+52px)] sm:h-[calc(100dvh+76px)] min-h-[640px] sm:min-h-[720px] max-h-[1160px] w-full items-center overflow-hidden bg-[#EAF1EB] text-[#143827]"
    >
      {/* ================= RIGHT-ALIGNED HD LIVING ROOM SHOWCASE ================= */}
      {/* Mở rộng không gian ảnh bên phải (~68%), dùng alpha mask để ảnh nét nguyên bản, mờ tan tự nhiên vào nền #EAF1EB không bị vệt đục hay tách biệt */}
      <div
        className="absolute top-0 right-0 h-full w-full lg:w-[70%] xl:w-[66%] overflow-hidden pointer-events-none select-none"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.04) 6%, rgba(0,0,0,0.2) 16%, rgba(0,0,0,0.6) 32%, rgba(0,0,0,0.92) 48%, black 62%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.04) 6%, rgba(0,0,0,0.2) 16%, rgba(0,0,0,0.6) 32%, rgba(0,0,0,0.92) 48%, black 62%)",
        }}
      >
        <Image
          src="/CoHomestayVungTau/homestay_living_room_hd.jpg"
          alt="Phòng khách Cỏ Homestay Vũng Tàu"
          fill
          priority
          unoptimized
          className="object-cover object-[center_right] sm:object-[62%_center] lg:object-center brightness-[1.02]"
        />

        {/* Lớp phủ mềm cho mobile để chữ luôn sắc nét trên màn hình hẹp */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#EAF1EB]/92 via-[#EAF1EB]/65 to-[#EAF1EB]/20 lg:hidden" />

        {/* Chuyển tiếp êm với navbar phía trên */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#EAF1EB]/80 via-[#EAF1EB]/20 to-transparent" />
      </div>

      {/* ================= DECORATIVE LEAF BRANCHES (CÂN ĐỐI & XANH TƯƠI) ================= */}
      {/* Lá góc trên trái: nhỏ gọn, né xa logo, màu xanh tươi tắn */}
      <LeafBranch position="top-left" />
      {/* Lá góc dưới trái: neo đáy Hero, né xa nút bấm và text */}
      <LeafBranch position="hero-bottom-left" />

      {/* ================= MAIN CONTENT - PHÍA TRÁI NỔI BẬT & CÂN ĐỐI ================= */}
      <div className="relative z-20 mx-auto flex h-full w-full max-w-7xl -translate-y-6 sm:-translate-y-8 lg:-translate-y-11 flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl lg:max-w-2xl space-y-5 sm:space-y-6 pl-2 sm:pl-6 lg:pl-8">
          {/* Tagline: thanh mảnh với điểm nhấn line vàng nghệ thuật cân đối 2 đầu */}
          <div className="inline-flex items-center gap-2.5">
            <span className="w-5 h-[1.5px] bg-[#C58940]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.32em] text-[#C58940] uppercase">
              CỎ HOMESTAY VŨNG TÀU
            </span>
            <span className="w-5 h-[1.5px] bg-[#C58940]" />
          </div>

          {/* Artistic Editorial Title (Phong cách thanh lịch, mềm mại, sang trọng) */}
          <h1 className="font-serif text-[40px] sm:text-5xl lg:text-[62px] xl:text-[66px] font-normal leading-[1.20] sm:leading-[1.16] text-[#143827] tracking-[-0.01em]">
            Một góc nhà
            <br />
            giữa <span className="font-light italic text-[#C58940]">Vũng Tàu.</span>
          </h1>

          <p className="text-[#3A5343] text-base sm:text-[17px] lg:text-[18px] leading-relaxed max-w-lg font-normal">
            Không gian ấm cúng, tiện nghi cho những ngày nghỉ thật trọn vẹn và an yên bên người thân yêu.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenBooking?.("Phòng tiêu chuẩn")}
              className="group inline-flex items-center gap-3 rounded-full bg-[#143827] hover:bg-[#1C4D36] text-white px-8 py-3.5 text-[14.5px] font-medium shadow-xl shadow-[#143827]/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4 text-[#DDB57D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round" />
                <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span>Đặt phòng ngay</span>
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>

            <a
              href="#phong-nghi"
              className="inline-flex items-center justify-center rounded-full bg-white/95 hover:bg-white text-[#1C3B29] border border-[#CCDCD1] px-7 py-3.5 text-[14.5px] font-medium transition-all duration-300 shadow-sm hover:shadow"
            >
              Xem phòng
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
