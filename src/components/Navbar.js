"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

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
            ? "bg-[#EAF1EB]/95 backdrop-blur-md shadow-sm border-b border-[#D5E3D8]/70"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Logo width={150} height={50} />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[14.5px] font-medium tracking-wide text-[#233F2E]">
          <a href="#" className="hover:text-[#C58940] transition-colors py-1">Trang chủ</a>
          <a href="#phong-nghi" className="hover:text-[#C58940] transition-colors py-1">Phòng nghỉ</a>
          <a href="#tien-nghi" className="hover:text-[#C58940] transition-colors py-1">Tiện nghi</a>
          <a href="#hinh-anh" className="hover:text-[#C58940] transition-colors py-1">Hình ảnh</a>
          <a href="#vi-tri" className="hover:text-[#C58940] transition-colors py-1">Vị trí</a>
          <a href="#lien-he" className="hover:text-[#C58940] transition-colors py-1">Liên hệ</a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenBooking?.("Phòng tiêu chuẩn")}
            className="inline-flex items-center gap-2 bg-[#143827] hover:bg-[#1A4833] text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 shadow-md shadow-[#143827]/15 hover:shadow-lg hover:shadow-[#143827]/25 active:scale-95"
          >
            <svg className="w-4 h-4 text-[#DDB57D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round" />
              <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round" />
              <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span>Đặt phòng ngay</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#143827] hover:bg-[#EADBCE]/50 focus:outline-none"
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

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#EAF1EB] border-b border-[#D5E3D8] px-6 py-5 space-y-3 shadow-xl pointer-events-auto">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-medium text-[#143827] py-2 border-b border-[#D5E3D8]/40"
          >
            Trang chủ
          </a>
          <a
            href="#phong-nghi"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-medium text-[#143827] py-2 border-b border-[#D5E3D8]/40"
          >
            Phòng nghỉ
          </a>
          <a
            href="#tien-nghi"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-medium text-[#143827] py-2 border-b border-[#EADBCE]/40"
          >
            Tiện nghi
          </a>
          <a
            href="#hinh-anh"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-medium text-[#143827] py-2 border-b border-[#EADBCE]/40"
          >
            Hình ảnh
          </a>
          <a
            href="#vi-tri"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-medium text-[#143827] py-2 border-b border-[#EADBCE]/40"
          >
            Vị trí
          </a>
          <a
            href="#lien-he"
            onClick={() => setMobileMenuOpen(false)}
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
