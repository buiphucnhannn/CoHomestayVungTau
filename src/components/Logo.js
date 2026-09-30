import Image from "next/image";
import { handleNavClick } from "@/utils/smoothScroll";

export default function Logo({ className = "", isDark = false, width, height }) {
  // Ở footer (nền xanh rừng đậm isDark), dùng bản logo tối ưu với chữ HOMESTAY trắng sáng ánh kim
  // Ở header (nền trắng/sáng), dùng bản logo gốc với chữ HOMESTAY xanh đậm nổi bật
  const logoSrc = isDark
    ? "/CoHomestayVungTau/cohomestay_dark_bg.png"
    : "/CoHomestayVungTau/cohomestay(tachnen).png";

  const isCustomSize = Boolean(width && height);

  return (
    <a
      href="#"
      onClick={(e) => handleNavClick(e, "top")}
      className={`inline-block group cursor-pointer ${className}`}
      aria-label="Về đầu trang Cỏ Homestay"
    >
      <div
        className={`relative ${
          isCustomSize
            ? ""
            : "w-[110px] h-[36px] xs:w-[125px] xs:h-[40px] sm:w-[150px] sm:h-[48px]"
        }`}
        style={isCustomSize ? { width, height } : undefined}
      >
        <Image
          src={logoSrc}
          alt="Cỏ Homestay Logo"
          fill
          sizes="(max-width: 768px) 130px, 160px"
          unoptimized
          className={`object-contain transition-transform duration-300 group-hover:scale-105 ${
            isDark ? "drop-shadow-[0_2px_12px_rgba(255,255,255,0.18)]" : ""
          }`}
          priority
        />
      </div>
    </a>
  );
}
