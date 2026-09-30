import Image from "next/image";
import Logo from "./Logo";
import { handleNavClick } from "@/utils/smoothScroll";

export default function Footer({ onOpenBooking }) {
  return (
    <footer id="lien-he" className="relative w-full overflow-hidden bg-[#0F2D1F] text-white">
      {/* ================= PHẦN TRÊN: ẢNH HOÀNG HÔN & NỘI DUNG CTA ================= */}
      <div className="relative w-full min-h-[280px] sm:min-h-[320px] lg:min-h-[350px] flex items-start overflow-hidden">
        {/* Ảnh nền ban công hoàng hôn nhìn ra biển Vũng Tàu tràn 100% */}
        <Image
          src="/images/vungtau_sunset_cta.jpg"
          alt="Hoàng hôn Vũng Tàu tại Cỏ Homestay"
          fill
          priority={false}
          unoptimized
          className="object-cover object-[center_35%] select-none pointer-events-none"
        />

        {/* Lớp phủ chuyển màu giúp khối chữ và nút bấm bên trái luôn sắc nét, nổi bật */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent pointer-events-none" />

        {/* Nội dung CTA: Hẹn bạn ở Vũng Tàu + Đặt phòng ngay (tinh gọn chiều cao) */}
        <div className="relative z-10 w-full max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-7 sm:pt-9 md:pt-11 pb-18 sm:pb-22 md:pb-24">
          <div className="max-w-xl space-y-2.5 sm:space-y-3 text-center sm:text-left flex flex-col items-center sm:items-start">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-white tracking-tight leading-tight drop-shadow-md">
              Hẹn bạn ở Vũng Tàu
            </h2>

            <p className="text-stone-100/95 text-xs sm:text-sm md:text-base font-light drop-shadow-sm">
              Một căn phòng nhỏ. Một chuyến đi thật đáng nhớ.
            </p>

            <div className="pt-1.5 sm:pt-2">
              <button
                type="button"
                onClick={() => onOpenBooking?.("Phòng tiêu chuẩn")}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#F5EFE6] text-[#0F2D1F] px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Đặt phòng ngay</span>
                <span className="text-sm sm:text-base font-bold transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= ĐƯỜNG LƯỢN SÓNG NỐI LIỀN GOM CTA & FOOTER ================= */}
      {/* Wave đè lên chân ảnh hoàng hôn, dốc nhẹ vừa phải để chiều cao tổng thể gọn gàng */}
      <div className="relative -mt-14 sm:-mt-18 md:-mt-22 w-full pointer-events-none z-10">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20 md:h-26 block"
          aria-hidden="true"
        >
          {/* Mảng xanh rừng đậm của footer */}
          <path
            d="M 0,35 C 320,35 540,110 820,110 C 1080,110 1260,80 1440,28 L 1440,140 L 0,140 Z"
            fill="#0F2D1F"
          />

          {/* Dải ruy băng viền vàng hoàng kim (Gold Ribbon) */}
          <path
            d="M 0,35 C 320,35 540,110 820,110 C 1080,110 1260,80 1440,28"
            fill="none"
            stroke="#CBA858"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
          />
          {/* Viền phụ tạo hiệu ứng ánh kim */}
          <path
            d="M 0,38 C 320,38 540,113 820,113 C 1080,113 1260,83 1440,31"
            fill="none"
            stroke="#EFE1B8"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* ================= PHẦN DƯỚI: THÔNG TIN FOOTER CHÍNH THỨC ================= */}
      <div className="relative z-20 bg-[#0F2D1F] w-full pt-0 pb-6 sm:pb-8">
        <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hàng 1: Logo Cỏ Homestay - Menu điều hướng - Icon mạng xã hội tròn trắng */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 pb-4 sm:pb-5 border-b border-[#204E38]/80">
            {/* Logo bên trái */}
            <div className="flex items-center">
              <Logo width={140} height={48} isDark={true} />
            </div>

            {/* Menu điều hướng ở giữa */}
            <nav className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-6 lg:gap-7 text-xs sm:text-sm font-medium text-[#C8D9CE]">
              <a
                href="#top"
                onClick={(e) => handleNavClick(e, "top")}
                className="hover:text-[#CBA858] transition-colors cursor-pointer"
              >
                Trang chủ
              </a>
              <a
                href="#phong-nghi"
                onClick={(e) => handleNavClick(e, "phong-nghi")}
                className="hover:text-[#CBA858] transition-colors cursor-pointer"
              >
                Phòng nghỉ
              </a>
              <a
                href="#hinh-anh"
                onClick={(e) => handleNavClick(e, "hinh-anh")}
                className="hover:text-[#CBA858] transition-colors cursor-pointer"
              >
                Hình ảnh
              </a>
              <a
                href="#tien-nghi"
                onClick={(e) => handleNavClick(e, "tien-nghi")}
                className="hover:text-[#CBA858] transition-colors cursor-pointer"
              >
                Tiện nghi
              </a>
              <a
                href="#vi-tri"
                onClick={(e) => handleNavClick(e, "vi-tri")}
                className="hover:text-[#CBA858] transition-colors cursor-pointer"
              >
                Vị trí
              </a>
              <a
                href="#lien-he"
                onClick={(e) => handleNavClick(e, "lien-he")}
                className="hover:text-[#CBA858] transition-colors cursor-pointer"
              >
                Liên hệ
              </a>
            </nav>

            {/* Nút mạng xã hội hình tròn nền trắng gọn gàng */}
            <div className="flex items-center gap-2.5">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Cỏ Homestay"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#0F2D1F] hover:bg-[#F2ECE1] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Cỏ Homestay"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#0F2D1F] hover:bg-[#F2ECE1] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Tripadvisor / Đánh giá */}
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tripadvisor Cỏ Homestay"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#0F2D1F] hover:bg-[#F2ECE1] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.524 4.477 10 10 10s10-4.476 10-10c0-5.523-4.477-10-10-10zm0 3.333c1.47 0 2.667 1.196 2.667 2.667 0 .34-.064.664-.18.963 1.12.38 2.05 1.146 2.613 2.137.42-.31.94-.5 1.5-.5 1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5c-.88 0-1.65-.455-2.09-1.145-.98.54-2.11.845-3.31.845h-2.4c-1.2 0-2.33-.305-3.31-.845-.44.69-1.21 1.145-2.09 1.145-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5c.56 0 1.08.19 1.5.5.563-.99 1.493-1.757 2.613-2.137-.116-.299-.18-.623-.18-.963 0-1.47 1.197-2.667 2.667-2.667zM6.6 11.8c-.77 0-1.4.63-1.4 1.4s.63 1.4 1.4 1.4 1.4-.63 1.4-1.4-.63-1.4-1.4-1.4zm10.8 0c-.77 0-1.4.63-1.4 1.4s.63 1.4 1.4 1.4 1.4-.63 1.4-1.4-.63-1.4-1.4-1.4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hàng 2: Bản quyền & Địa chỉ Vũng Tàu */}
          <div className="pt-4 sm:pt-4.5 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-[#8EA898] gap-2">
            <div>
              © 2026 Cỏ Homestay, All rights reserved.
            </div>
            <div className="flex items-center gap-1.5 text-[#A0B9AC]">
              <span className="text-[#CBA858]">📍</span>
              <span>Vũng Tàu, Việt Nam</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
