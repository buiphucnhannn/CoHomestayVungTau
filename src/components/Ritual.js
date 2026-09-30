"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import LeafBranch from "./LeafBranch";

const defaultGallery = [
  {
    src: "/CoHomestayVungTau/homestay_living_room_hd.jpg",
    alt: "Không gian phòng khách và bàn ăn Cỏ Homestay",
    caption: "Phòng khách sang trọng ấm cúng kết nối bàn ăn gia đình",
  },
  {
    src: "/CoHomestayVungTau/810813590_122106536013469874_4095155215251350582_n.jpg",
    alt: "Phòng ngủ tiêu chuẩn Cỏ Homestay",
    caption: "Phòng ngủ êm ái với ghế hoa cúc và gương nghệ thuật",
  },
  {
    src: "/CoHomestayVungTau/812281298_122106536373469874_430409947337975689_n.jpg",
    alt: "Phòng ngủ view biển Cỏ Homestay",
    caption: "Phòng ngủ hướng biển xanh ngát và ghế thư giãn",
  },
  {
    src: "/CoHomestayVungTau/811748313_122106536259469874_1723411098855152586_n.jpg",
    alt: "Bình hoa và góc bàn trang điểm",
    caption: "Góc hoa tươi tinh tế mang năng lượng an yên cho kỳ nghỉ",
  },
];

export default function Ritual({ gallery = defaultGallery }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  // Kéo chuột / vuốt tay để lướt ảnh trong lightbox
  const [lbDragX, setLbDragX] = useState(0);
  const [lbDragging, setLbDragging] = useState(false);
  const lbStartX = useRef(0);
  const lbActive = useRef(false);
  const lbViewRef = useRef(null);

  // Khóa cuộn nền + phím tắt khi xem ảnh full màn hình
  useEffect(() => {
    if (lightboxIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
      else if (e.key === "ArrowRight") setLightboxIndex((i) => (i + 1) % gallery.length);
      else if (e.key === "ArrowLeft") setLightboxIndex((i) => (i - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, gallery.length]);

  return (
    <section id="hinh-anh" className="relative bg-[#EAF1EB] pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-10 md:pb-12 overflow-hidden">
      {/* Cỏ góc dưới-phải section, nằm vùng padding trống nên không đè ảnh */}
      <LeafBranch position="ritual-right" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="text-[11px] sm:text-xs md:text-[13px] tracking-[0.2em] font-semibold text-[#C58940] uppercase">
              HÌNH THỰC TẾ
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-bold text-[#133826] leading-[1.2] lg:leading-[1.15]">
              Những khoảnh khắc
              <br />
              tại Cỏ Homestay
            </h2>

            <div className="w-12 sm:w-14 h-[2px] bg-[#C58940] rounded-full" />

            <div className="pt-1 sm:pt-2">
              <button
                onClick={() => setLightboxIndex(0)}
                className="inline-flex items-center gap-2 bg-[#1F5C3B] hover:bg-[#27734A] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-xs sm:text-sm transition-all shadow-md shadow-[#1F5C3B]/20 hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <span>Xem tất cả hình ảnh</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Photo Grid */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              {/* Large Photo on the Left */}
              <div
                onClick={() => setLightboxIndex(0)}
                className="sm:col-span-6 relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group shadow-md border-2 border-white aspect-[4/3] sm:aspect-[4/5]"
              >
                <Image
                  src={gallery[0].src}
                  alt={gallery[0].alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 40vw"
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 text-[#143827] text-xs font-semibold px-3 py-1.5 rounded-full shadow">
                    Phóng to ảnh
                  </span>
                </div>
              </div>

              {/* Right Column with 3 photos */}
              <div className="sm:col-span-6 flex flex-col gap-4">
                {/* Top Right Photo */}
                <div
                  onClick={() => setLightboxIndex(1)}
                  className="relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group shadow-md border-2 border-white aspect-[16/10]"
                >
                  <Image
                    src={gallery[1].src}
                    alt={gallery[1].alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 text-[#143827] text-xs font-semibold px-3 py-1.5 rounded-full shadow">
                      Phóng to ảnh
                    </span>
                  </div>
                </div>

                {/* Bottom Row: 2 smaller photos */}
                <div className="grid grid-cols-2 gap-4 flex-1">
                  <div
                    onClick={() => setLightboxIndex(2)}
                    className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-md border-2 border-white aspect-square sm:aspect-auto"
                  >
                    <Image
                      src={gallery[2].src}
                      alt={gallery[2].alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 20vw"
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-106"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white/90 text-[#143827] text-[11px] font-semibold px-2 py-1 rounded-full shadow">
                        Xem
                      </span>
                    </div>
                  </div>

                  <div
                    onClick={() => setLightboxIndex(3)}
                    className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-md border-2 border-white aspect-square sm:aspect-auto"
                  >
                    <Image
                      src={gallery[3].src}
                      alt={gallery[3].alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 20vw"
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-106"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white/90 text-[#143827] text-[11px] font-semibold px-2 py-1 rounded-full shadow">
                        Xem
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox full màn hình: portal ra body để thoát stacking context của
          Reveal/section (header không còn đè lên), nền đen đặc để cỏ trang trí
          và mọi thứ phía sau đều không lọt vào */}
      {lightboxIndex !== null &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 z-[100] bg-black flex flex-col pt-14 md:pt-16 px-2 sm:px-4">
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 md:top-5 md:right-5 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-lg z-10 transition-colors"
              aria-label="Đóng"
            >
              ✕
            </button>

            <button
              onClick={() => setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length)}
              className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-xl z-10 transition-colors"
              aria-label="Ảnh trước"
            >
              ‹
            </button>

            <button
              onClick={() => setLightboxIndex((lightboxIndex + 1) % gallery.length)}
              className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-xl z-10 transition-colors"
              aria-label="Ảnh tiếp theo"
            >
              ›
            </button>

            <div
              ref={lbViewRef}
              onPointerDown={(e) => {
                if (e.pointerType === "mouse" && e.button !== 0) return;
                lbActive.current = true;
                lbStartX.current = e.clientX;
              }}
              onPointerMove={(e) => {
                if (!lbActive.current) return;
                const dx = e.clientX - lbStartX.current;
                if (Math.abs(dx) <= 10) return;
                // Chỉ capture khi đã kéo thật để không phá click nút <>/✕
                if (!lbDragging) {
                  setLbDragging(true);
                  try {
                    lbViewRef.current?.setPointerCapture(e.pointerId);
                  } catch {
                    /* bỏ qua nếu browser không hỗ trợ */
                  }
                }
                setLbDragX(Math.max(-400, Math.min(400, dx)));
              }}
              onPointerUp={(e) => {
                if (!lbActive.current) return;
                lbActive.current = false;
                setLbDragging(false);
                const dx = e.clientX - lbStartX.current;
                const threshold = 60;
                if (dx <= -threshold)
                  setLightboxIndex((lightboxIndex + 1) % gallery.length);
                else if (dx >= threshold)
                  setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length);
                setLbDragX(0);
              }}
              onPointerCancel={() => {
                lbActive.current = false;
                setLbDragging(false);
                setLbDragX(0);
              }}
              onDragStart={(e) => e.preventDefault()}
              className="relative flex-1 min-h-0 cursor-grab active:cursor-grabbing select-none [touch-action:pan-y]"
            >
              <div
                className="absolute inset-0"
                style={{
                  transform: `translateX(${lbDragX}px)`,
                  transition: lbDragging ? "none" : "transform 350ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <Image
                  key={gallery[lightboxIndex].src}
                  src={gallery[lightboxIndex].src}
                  alt={gallery[lightboxIndex].alt}
                  fill
                  sizes="100vw"
                  unoptimized
                  draggable={false}
                  className="object-contain pointer-events-none"
                />
              </div>
            </div>
            <p className="py-4 px-12 text-sm text-stone-300 text-center font-light shrink-0">
              {gallery[lightboxIndex].caption} ({lightboxIndex + 1}/{gallery.length})
            </p>
          </div>,
          document.body
        )}

    </section>
  );
}
