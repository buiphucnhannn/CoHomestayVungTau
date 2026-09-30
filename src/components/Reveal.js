"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Component tạo hiệu ứng xuất hiện hai chiều (khi lướt xuống hoặc lướt lên đều kích hoạt)
 * Hỗ trợ đa dạng hiệu ứng độc đáo cho từng section khác nhau, tốc độ mượt mà vừa vặn.
 */
export default function Reveal({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  duration = 850,
  threshold = 0.06,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Kiểm tra tức thì khi vừa mount: nếu phần tử đã nằm trong khung nhìn thì hiển thị ngay
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hiệu ứng hai chiều: cuộn tới (từ trên xuống hay từ dưới lên) đều xuất hiện
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        // Kích hoạt nhạy bén ngay khi chạm vào vùng hiển thị
        rootMargin: "0px 0px -20px 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  // Bộ sưu tập các hiệu ứng xuất hiện độc đáo cho từng section
  const getVariantStyles = () => {
    switch (variant) {
      case "fade-scale":
        // Dành cho Phòng nghỉ & Bản đồ: Nhẹ nhàng phóng to vào tầm nhìn
        return isVisible
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-[0.96] translate-y-5";

      case "blur-fade":
        // Dành cho Hình ảnh: Hiệu ứng nét dần từ lớp mờ nghệ thuật như tráng phim
        return isVisible
          ? "opacity-100 blur-0 translate-y-0 scale-100"
          : "opacity-0 blur-[6px] translate-y-6 scale-[0.98]";

      case "fade-right":
        // Dành cho Tiện nghi: Dải banner lướt êm từ bên phải vào
        return isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-10";

      case "fade-left":
        // Lướt êm từ bên trái vào
        return isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-10";

      case "soft-lift":
        // Dành cho Footer / Intro: Nâng nhẹ nhàng, êm dịu
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4";

      case "fade-up":
      default:
        // Dành cho Testimonial: Nổi lên mượt mà từ dưới lên
        return isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-[0.98]";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transition-all will-change-[transform,opacity] ${getVariantStyles()} ${className}`}
    >
      {children}
    </div>
  );
}
