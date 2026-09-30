"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import { handleNavClick } from "@/utils/smoothScroll";

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div
        className={`w-full max-w-[1536px] transition-all duration-500 ease-in-out pointer-events-auto ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E2EBE4]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo (tự động co giãn chuẩn trên mobile và desktop) */}
          <div className="flex items-center shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation Links: Lướt chậm rãi mượt mà, căn góc nhìn đẹp nhất & không hiện dấu # */}
          <nav className="relative hidden md:flex items-center gap-7 lg:gap-8 text-[15px] font-semibold tracking-wide text-[#143827]">
            {/* Lớp làm mờ cục bộ CHỈ ngay vị trí cụm text, biên mờ tỏa dần (radial feather) không có khung viền */}
            <div
              className={`absolute -inset-x-7 -inset-y-2 pointer-events-none -z-10 transition-opacity duration-300 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
              style={{
                background: "rgba(234, 241, 235, 0.78)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                maskImage: "radial-gradient(ellipse at center, black 40%, rgba(0,0,0,0.5) 70%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, rgba(0,0,0,0.5) 70%, transparent 100%)",
              }}
            />

            <a
              href="#top"
              onClick={(e) => handleNavClick(e, "top")}
              className="hover:text-[#C58940] transition-colors py-1 [text-shadow:_0_1px_2px_#fff,_0_0_8px_rgba(255,255,255,0.9)] cursor-pointer"
            >
              Trang chủ
            </a>
            <a
              href="#phong-nghi"
              onClick={(e) => handleNavClick(e, "phong-nghi")}
              className="hover:text-[#C58940] transition-colors py-1 [text-shadow:_0_1px_2px_#fff,_0_0_8px_rgba(255,255,255,0.9)] cursor-pointer"
            >
              Phòng nghỉ
            </a>
            <a
              href="#hinh-anh"
              onClick={(e) => handleNavClick(e, "hinh-anh")}
              className="hover:text-[#C58940] transition-colors py-1 [text-shadow:_0_1px_2px_#fff,_0_0_8px_rgba(255,255,255,0.9)] cursor-pointer"
            >
              Hình ảnh
            </a>
            <a
              href="#tien-nghi"
              onClick={(e) => handleNavClick(e, "tien-nghi")}
              className="hover:text-[#C58940] transition-colors py-1 [text-shadow:_0_1px_2px_#fff,_0_0_8px_rgba(255,255,255,0.9)] cursor-pointer"
            >
              Tiện nghi
            </a>
            <a
              href="#vi-tri"
              onClick={(e) => handleNavClick(e, "vi-tri")}
              className="hover:text-[#C58940] transition-colors py-1 [text-shadow:_0_1px_2px_#fff,_0_0_8px_rgba(255,255,255,0.9)] cursor-pointer"
            >
              Vị trí
            </a>
            <a
              href="#lien-he"
              onClick={(e) => handleNavClick(e, "lien-he")}
              className="hover:text-[#C58940] transition-colors py-1 [text-shadow:_0_1px_2px_#fff,_0_0_8px_rgba(255,255,255,0.9)] cursor-pointer"
            >
              Liên hệ
            </a>
          </nav>

          {/* Action Button: Nhỏ gọn trên mobile, không bị rớt dòng chữ */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => onOpenBooking?.("Phòng tiêu chuẩn")}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#1F5C3B] hover:bg-[#27734A] text-white px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full sm:rounded-xl font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-300 shadow-md shadow-[#1F5C3B]/20 hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E2C394] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round" />
                <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span>Đặt phòng</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg text-[#143827] hover:bg-[#143827]/10 focus:outline-none cursor-pointer shrink-0"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown: Cuộn chậm rãi mượt mà, đóng menu sau khi click & xóa # */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#EAF1EB] border-b border-[#D5E3D8] px-6 py-5 space-y-3 shadow-xl pointer-events-auto">
            <a
              href="#top"
              onClick={(e) => handleNavClick(e, "top", () => setMobileMenuOpen(false))}
              className="block font-medium text-[#143827] py-2 border-b border-[#D5E3D8]/40"
            >
              Trang chủ
            </a>
            <a
              href="#phong-nghi"
              onClick={(e) => handleNavClick(e, "phong-nghi", () => setMobileMenuOpen(false))}
              className="block font-medium text-[#143827] py-2 border-b border-[#D5E3D8]/40"
            >
              Phòng nghỉ
            </a>
            <a
              href="#hinh-anh"
              onClick={(e) => handleNavClick(e, "hinh-anh", () => setMobileMenuOpen(false))}
              className="block font-medium text-[#143827] py-2 border-b border-[#EADBCE]/40"
            >
              Hình ảnh
            </a>
            <a
              href="#tien-nghi"
              onClick={(e) => handleNavClick(e, "tien-nghi", () => setMobileMenuOpen(false))}
              className="block font-medium text-[#143827] py-2 border-b border-[#EADBCE]/40"
            >
              Tiện nghi
            </a>
            <a
              href="#vi-tri"
              onClick={(e) => handleNavClick(e, "vi-tri", () => setMobileMenuOpen(false))}
              className="block font-medium text-[#143827] py-2 border-b border-[#EADBCE]/40"
            >
              Vị trí
            </a>
            <a
              href="#lien-he"
              onClick={(e) => handleNavClick(e, "lien-he", () => setMobileMenuOpen(false))}
              className="block font-medium text-[#143827] py-2"
            >
              Liên hệ
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
