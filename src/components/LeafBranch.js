import Image from "next/image";

export default function LeafBranch({ position = "top-left", className = "" }) {
  const isAboveFold = position === "top-left" || position === "hero-bottom-left";

  const getStyles = () => {
    switch (position) {
      case "top-left":
        // Ẩn trên mobile để thanh header thoáng đãng tuyệt đối không che logo; hiển thị từ sm trở lên
        return "-top-16 -left-12 w-36 md:w-42 opacity-85 transform -rotate-12 pointer-events-none hidden sm:block";
      case "hero-bottom-left":
        // Ẩn trên mobile để phần nút bấm và đáy màn hình thông thoáng; hiển thị từ sm trở lên
        return "bottom-12 md:bottom-18 -left-10 sm:-left-14 w-36 sm:w-44 md:w-52 opacity-80 sm:opacity-90 transform rotate-[22deg] pointer-events-none hidden sm:block";
      case "mid-left":
        return "top-[1420px] -left-16 sm:-left-20 w-48 sm:w-60 opacity-75 sm:opacity-80 transform rotate-12 pointer-events-none";
      case "space-left":
        // Cỏ trái section Phòng nghỉ: neo góc trên-trái, ngang hàng + cùng size với cỏ phải
        return "top-0 sm:top-2 -left-6 sm:-left-8 md:-left-10 w-24 sm:w-32 md:w-40 opacity-60 sm:opacity-70 md:opacity-75 rotate-[-14deg] pointer-events-none";
      case "space-right":
        // Đối xứng với cỏ trái ở section Phòng nghỉ: neo góc trên-phải của section,
        // cùng size + lật gương để không đè lên tiêu đề, card hay nút <>
        return "top-0 sm:top-2 -right-6 sm:-right-8 md:-right-10 w-24 sm:w-32 md:w-40 opacity-60 sm:opacity-70 md:opacity-75 -scale-x-100 rotate-[14deg] pointer-events-none";
      case "ritual-right":
        // Cỏ phải section Hình ảnh: neo góc dưới-phải của section (vùng padding
        // trống dưới cụm ảnh), size nhỏ + lật gương để không đè lên hình ảnh
        return "bottom-0 -right-8 sm:-right-10 w-24 sm:w-28 md:w-32 opacity-60 sm:opacity-70 -scale-x-100 -rotate-[18deg] pointer-events-none hidden md:block";
      case "bottom-right":
        return "top-[2350px] -right-16 sm:-right-20 w-48 sm:w-60 opacity-80 sm:opacity-85 transform -rotate-45 pointer-events-none";
      default:
        return "";
    }
  };

  return (
    <div
      className={`pointer-events-none absolute z-[5] select-none ${getStyles()} ${className}`}
    >
      <Image
        src="/images/tropical_leaves.png"
        alt="Lá cây trang trí"
        width={500}
        height={500}
        priority={isAboveFold}
        loading={isAboveFold ? "eager" : "lazy"}
        sizes="(max-width: 768px) 260px, 450px"
        className="w-full h-auto object-contain filter contrast-110 saturate-125"
      />
    </div>
  );
}
