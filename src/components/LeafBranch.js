import Image from "next/image";

export default function LeafBranch({ position = "top-left", className = "" }) {
  const isAboveFold = position === "top-left" || position === "hero-bottom-left";

  const getStyles = () => {
    switch (position) {
      case "top-left":
        // Tinh gọn góc trên trái, né xa logo, màu xanh tươi tắn rõ nét
        return "-top-14 -left-10 sm:-top-16 sm:-left-12 w-28 sm:w-36 md:w-42 opacity-85 sm:opacity-90 transform -rotate-12 pointer-events-none";
      case "hero-bottom-left":
        // Neo đáy Hero cách xa chữ & nút bấm, màu xanh rõ ràng hài hòa
        return "bottom-14 sm:bottom-18 -left-10 sm:-left-14 w-36 sm:w-44 md:w-52 opacity-85 sm:opacity-90 transform rotate-[22deg] pointer-events-none";
      case "mid-left":
        return "top-[1420px] -left-16 sm:-left-20 w-48 sm:w-60 opacity-75 sm:opacity-80 transform rotate-12 pointer-events-none";
      case "bottom-right":
        return "top-[2350px] -right-16 sm:-right-20 w-48 sm:w-60 opacity-80 sm:opacity-85 transform -rotate-45 pointer-events-none";
      default:
        return "";
    }
  };

  return (
    <div
      className={`pointer-events-none absolute z-[5] mix-blend-multiply select-none ${getStyles()} ${className}`}
    >
      <Image
        src="/images/tropical_leaves.jpg"
        alt="Lá cây trang trí"
        width={500}
        height={500}
        priority={isAboveFold}
        loading={isAboveFold ? "eager" : "lazy"}
        sizes="(max-width: 768px) 260px, 450px"
        className="w-full h-auto object-contain filter contrast-115 saturate-140 brightness-95"
      />
    </div>
  );
}
