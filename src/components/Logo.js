import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "", width = 160, height = 54, isDark = false }) {
  return (
    <Link href="/" className={`inline-block group ${className}`}>
      <div className="relative" style={{ width, height }}>
        <Image
          src="/CoHomestayVungTau/cohomestay(tachnen).png"
          alt="Cỏ Homestay Logo"
          fill
          sizes="(max-width: 768px) 130px, 160px"
          unoptimized
          className={`object-contain transition-transform duration-300 group-hover:scale-105 ${
            isDark ? "brightness-110 drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]" : ""
          }`}
          priority
        />
      </div>
    </Link>
  );
}
