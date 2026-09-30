"use client";

import { useState } from "react";
import Image from "next/image";
import Wave from "./Wave";

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

  return (
    <section id="hinh-anh" className="relative bg-[#EAF1EB] pt-14 md:pt-20 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Content */}
          <div className="lg:col-span-4 space-y-5">
            <span className="text-[12px] md:text-[13px] tracking-[0.2em] font-semibold text-[#C58940] uppercase">
              HÌNH THỰC TẾ
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-serif font-bold text-[#133826] leading-tight">
              Những khoảnh khắc<br />
              tại Cỏ Homestay
            </h2>

            <div className="w-14 h-[2px] bg-[#C58940] rounded-full" />

            <div className="pt-2">
              <button
                onClick={() => setLightboxIndex(0)}
                className="inline-flex items-center gap-2 bg-[#143827] hover:bg-[#1C4D36] text-white px-6 py-3 rounded-full font-medium text-sm transition-all shadow-md shadow-[#143827]/15 hover:shadow-lg active:scale-95"
              >
                <span>Xem tất cả hình ảnh</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Photo Grid */}
          <div className="lg:col-span-8">
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

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-lg z-50 transition-colors"
            aria-label="Đóng"
          >
            ✕
          </button>

          <button
            onClick={() => setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-xl z-50 transition-colors"
            aria-label="Ảnh trước"
          >
            ‹
          </button>

          <button
            onClick={() => setLightboxIndex((lightboxIndex + 1) % gallery.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-xl z-50 transition-colors"
            aria-label="Ảnh tiếp theo"
          >
            ›
          </button>

          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative w-full aspect-[16/10] max-h-[75vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={gallery[lightboxIndex].src}
                alt={gallery[lightboxIndex].alt}
                fill
                sizes="100vw"
                unoptimized
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-sm text-stone-300 text-center font-light">
              {gallery[lightboxIndex].caption} ({lightboxIndex + 1}/{gallery.length})
            </p>
          </div>
        </div>
      )}

    </section>
  );
}
