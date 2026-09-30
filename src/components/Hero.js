import Image from "next/image";
import LeafBranch from "./LeafBranch";
import { handleNavClick } from "@/utils/smoothScroll";
import Reveal from "./Reveal";

export default function Hero({ onOpenBooking }) {
  return (
    <section
      id="top"
      className="relative flex h-[calc(100dvh+52px)] sm:h-[calc(100dvh+76px)] min-h-[640px] sm:min-h-[720px] max-h-[1160px] w-full items-center overflow-hidden bg-[#EAF1EB] text-[#143827]"
    >
      {/* ================= RIGHT-ALIGNED HD LIVING ROOM SHOWCASE ================= */}
      {/* Dùng alpha mask mượt mà tuyệt đối để ảnh nét nguyên bản bên phải và mờ tan dần tự nhiên vào nền #EAF1EB bên trái, không có bất kỳ vệt chia cắt rạch ròi nào */}
      <div
        className="absolute top-0 right-0 h-full w-full lg:w-[72%] xl:w-[68%] overflow-hidden pointer-events-none select-none"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.02) 8%, rgba(0,0,0,0.15) 20%, rgba(0,0,0,0.5) 38%, rgba(0,0,0,0.85) 55%, black 72%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.02) 8%, rgba(0,0,0,0.15) 20%, rgba(0,0,0,0.5) 38%, rgba(0,0,0,0.85) 55%, black 72%)",
        }}
      >
        <Image
          src="/CoHomestayVungTau/homestay_living_room_hd.jpg"
          alt="Phòng khách Cỏ Homestay Vũng Tàu"
          fill
          priority
          unoptimized
          className="object-cover object-[78%_center] sm:object-[62%_center] lg:object-center brightness-[1.02]"
        />

        {/* Lớp phủ cho mobile: tăng độ phủ sữa mịn màng để mọi chữ đều sắc nét, đọc rõ 100% */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#EAF1EB] via-[#EAF1EB]/95 to-[#EAF1EB]/55 sm:hidden" />
      </div>

      {/* ================= DECORATIVE LEAF BRANCHES (CÂN ĐỐI & XANH TƯƠI) ================= */}
      {/* Lá góc trên trái: nhỏ gọn, né xa logo, màu xanh tươi tắn */}
      <LeafBranch position="top-left" />
      {/* Lá góc dưới trái: neo đáy Hero, né xa nút bấm và text */}
      <LeafBranch position="hero-bottom-left" />

      {/* ================= MAIN CONTENT - PHÍA TRÁI NỔI BẬT & CÂN ĐỐI ================= */}
      <div className="relative z-20 mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8 pt-2 sm:pt-0 -translate-y-4 sm:-translate-y-8 lg:-translate-y-11">
        <Reveal variant="fade-up" duration={850}>
          <div className="max-w-xl lg:max-w-2xl space-y-4 sm:space-y-6 pl-1 sm:pl-6 lg:pl-8">
          {/* Tagline: thanh mảnh với điểm nhấn line vàng nghệ thuật cân đối 2 đầu */}
          <div className="inline-flex items-center gap-2 sm:gap-2.5">
            <span className="w-4 sm:w-5 h-[1.5px] bg-[#C58940]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.28em] sm:tracking-[0.32em] text-[#C58940] uppercase">
              CỎ HOMESTAY VŨNG TÀU
            </span>
            <span className="w-4 sm:w-5 h-[1.5px] bg-[#C58940]" />
          </div>

          {/* Artistic Editorial Title (Phong cách thanh lịch, mềm mại, sang trọng) */}
          <h1 className="font-serif text-[30px] xs:text-[34px] sm:text-5xl lg:text-[62px] xl:text-[66px] font-medium sm:font-normal leading-[1.20] sm:leading-[1.16] text-[#143827] tracking-[-0.01em]">
            Một góc nhà
            <br />
            giữa <span className="font-light italic text-[#C58940]">Vũng Tàu.</span>
          </h1>

          <p className="text-[#143827] sm:text-[#3A5343] font-medium sm:font-normal text-[15px] sm:text-[17px] lg:text-[18px] leading-relaxed max-w-lg">
            Không gian ấm cúng, tiện nghi cho những ngày nghỉ thật trọn vẹn và an yên bên người thân yêu.
          </p>

          {/* Action Buttons - Nằm hàng ngang gọn gàng, tinh tế trên mobile */}
          <div className="pt-1.5 sm:pt-2 flex flex-row items-center gap-2.5 sm:gap-4">
            <button
              onClick={() => onOpenBooking?.("Phòng tiêu chuẩn")}
              className="group inline-flex items-center gap-2 sm:gap-3 rounded-full bg-[#1F5C3B] hover:bg-[#27734A] text-white px-5 sm:px-8 py-2.5 sm:py-3.5 text-xs sm:text-[14.5px] font-medium shadow-lg shadow-[#1F5C3B]/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E2C394]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round" />
                <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span>Đặt phòng ngay</span>
              <span className="text-xs sm:text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>

            <a
              href="#phong-nghi"
              onClick={(e) => handleNavClick(e, "phong-nghi")}
              className="inline-flex items-center justify-center rounded-full bg-white/95 hover:bg-white text-[#1C3B29] border border-[#CCDCD1] px-4 sm:px-7 py-2.5 sm:py-3.5 text-xs sm:text-[14.5px] font-medium transition-all duration-300 shadow-sm hover:shadow cursor-pointer whitespace-nowrap"
            >
              Xem phòng
            </a>
          </div>
        </div>
        </Reveal>
      </div>

      {/* ================= VÒM CONG ĐÁY HERO (CONG SẴN NGAY TỪ FRAME ĐẦU TIÊN KHI LOAD / F5) ================= */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[52px] sm:h-[76px] rounded-t-[50%_52px] sm:rounded-t-[50%_76px] bg-[#EAF1EB] pointer-events-none z-10" />
    </section>
  );
}
