"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import LeafBranch from "./LeafBranch";

const defaultRooms = [
  {
    id: "can-ho-2-phong-ngu",
    name: "Căn hộ 2 phòng ngủ",
    price: "Từ 1.200.000đ/đêm",
    image: "/CoHomestayVungTau/810449088_122106531489469874_6486305621321388115_n.jpg",
    capacity: "4 - 6 người",
    beds: "2 phòng ngủ riêng biệt",
    desc: "Không gian phòng khách rộng rãi, bàn ăn ấm cúng, sofa thư giãn, đầy đủ tiện nghi cho cả gia đình hoặc hội bạn quây quần.",
  },
  {
    id: "phong-tieu-chuan",
    name: "Phòng tiêu chuẩn",
    price: "Từ 650.000đ/đêm",
    image: "/CoHomestayVungTau/810813590_122106536013469874_4095155215251350582_n.jpg",
    capacity: "2 người",
    beds: "1 giường lớn",
    featured: true,
    desc: "Phòng ngủ ấm áp với nệm êm ái, ghế lười hoa cúc xinh xắn, gương uốn lượn nghệ thuật cho bạn tha hồ check-in sống ảo.",
  },
  {
    id: "phong-view-bien",
    name: "Phòng view biển",
    price: "Từ 800.000đ/đêm",
    image: "/CoHomestayVungTau/812281298_122106536373469874_430409947337975689_n.jpg",
    capacity: "2 - 3 người",
    beds: "1 giường lớn + ghế tantra",
    desc: "Cửa kính lớn nhìn thẳng ra đại dương xanh ngát và núi non Vũng Tàu, trang bị ghế thư giãn uốn lượn cao cấp cùng bàn trang điểm gỗ.",
  },
];

function PersonIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

function BedIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6M3 18h18M3 18v2m18-2v2M6 10V7a2 2 0 012-2h8a2 2 0 012 2v3"
      />
    </svg>
  );
}

function ArrowIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

// Khoảng hở giữa các card trong track lướt ngang
const GAP_PX = 28;

export default function Space({ onOpenBooking, rooms = defaultRooms }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  // Kéo-thả để lướt ngang: offset bám theo tay + trạng thái đang kéo
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const draggingRef = useRef(false);
  const suppressClickRef = useRef(false);
  const trackRef = useRef(null);

  const len = rooms?.length ?? 0;

  const handleNext = useCallback(
    () => setCurrentIndex((p) => (p + 1) % len),
    [len]
  );
  const handlePrev = useCallback(
    () => setCurrentIndex((p) => (p - 1 + len) % len),
    [len]
  );

  if (!rooms?.length) return null;

  // Vị trí tương đối của 1 phòng so với card giữa: 0 = giữa, -1 = trái, +1 = phải
  const getOffset = (roomIdx) => {
    let o = (roomIdx - currentIndex) % len;
    o = ((o % len) + len) % len;
    if (o > len / 2) o -= len;
    return o;
  };

  // --- Nhấn giữ chuột / chạm để kéo lướt ngang (1:1 theo tay) ---
  // Lưu ý: KHÔNG capture pointer ngay lúc pointerdown, vì capture sẽ cướp
  // sự kiện click của nút <> và của card. Chỉ capture khi đã kéo quá ngưỡng.
  const onPointerDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    draggingRef.current = true;
    startXRef.current = e.clientX;
    suppressClickRef.current = false;
  };

  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - startXRef.current;
    // Dưới ngưỡng thì coi như tap thường -> giữ nguyên click native
    if (Math.abs(dx) <= 8) return;
    if (!isDragging) {
      setIsDragging(true);
      try {
        trackRef.current?.setPointerCapture(e.pointerId);
      } catch {
        /* bỏ qua nếu browser không hỗ trợ */
      }
    }
    suppressClickRef.current = true;
    // Chặn biên để không bị vọt, kéo tới đâu card đi tới đó
    setDragOffset(Math.max(-480, Math.min(480, dx)));
  };

  const endDrag = (e) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setIsDragging(false);
    const dx = e.clientX - startXRef.current;
    const threshold = 55;
    if (dx <= -threshold) handleNext();
    else if (dx >= threshold) handlePrev();
    // Trả offset về 0: card tự trượt êm tới vị trí mới nhờ transition transform
    setDragOffset(0);
    setTimeout(() => {
      suppressClickRef.current = false;
    }, 80);
  };

  const handleCardClick = (room, roomIdx, isCenter) => {
    if (suppressClickRef.current) return;
    if (isCenter) onOpenBooking?.(room.name);
    else setCurrentIndex(roomIdx);
  };

  // --- Hỗ trợ lướt touchpad / trackpad 2 ngón trên laptop ---
  const accumulatedDeltaXRef = useRef(0);
  const wheelCooldownRef = useRef(false);
  const wheelTimerRef = useRef(null);

  useEffect(() => {
    const trackEl = trackRef.current;
    if (!trackEl) return;

    const handleWheel = (e) => {
      // Chỉ kích hoạt khi lướt ngang bằng touchpad (quét 2 ngón tay trái/phải)
      // Tuyệt đối không can thiệp nếu người dùng cuộn dọc trang web
      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);

      if (absX < 6 || absX <= absY) {
        return;
      }

      // Ngăn chặn trình duyệt tự nhảy lịch sử trang (Back/Forward) khi vuốt ngang
      e.preventDefault();

      if (wheelCooldownRef.current) return;

      accumulatedDeltaXRef.current += e.deltaX;

      // Di chuyển card nhẹ nhàng theo tay lướt touchpad
      setDragOffset(Math.max(-100, Math.min(100, -accumulatedDeltaXRef.current * 0.6)));

      clearTimeout(wheelTimerRef.current);
      wheelTimerRef.current = setTimeout(() => {
        // Nhả ngón touchpad mà chưa qua ngưỡng đổi phòng -> trả card về vị trí giữa
        setDragOffset(0);
        accumulatedDeltaXRef.current = 0;
      }, 140);

      const threshold = 40;
      if (accumulatedDeltaXRef.current >= threshold) {
        // Vuốt 2 ngón sang trái -> xem phòng kế tiếp
        wheelCooldownRef.current = true;
        setDragOffset(0);
        accumulatedDeltaXRef.current = 0;
        handleNext();
        setTimeout(() => {
          wheelCooldownRef.current = false;
        }, 450);
      } else if (accumulatedDeltaXRef.current <= -threshold) {
        // Vuốt 2 ngón sang phải -> xem phòng trước đó
        wheelCooldownRef.current = true;
        setDragOffset(0);
        accumulatedDeltaXRef.current = 0;
        handlePrev();
        setTimeout(() => {
          wheelCooldownRef.current = false;
        }, 450);
      }
    };

    trackEl.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      trackEl.removeEventListener("wheel", handleWheel);
      clearTimeout(wheelTimerRef.current);
    };
  }, [handleNext, handlePrev]);

  return (
    <section id="phong-nghi" className="relative pt-6 sm:pt-8 md:pt-10 pb-10 sm:pb-12 md:pb-14 overflow-hidden">
      {/* Cỏ 2 bên ngang hàng nhau ở góc trên section — gọn, không đè card/nút */}
      <LeafBranch position="space-left" />
      <LeafBranch position="space-right" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-2 sm:px-4 md:px-6">
        {/* Header gọn, cân đối như mẫu */}
        <div className="text-center max-w-xl mx-auto mb-6 md:mb-8 px-4">
          <span className="text-[11px] md:text-xs tracking-[0.22em] font-bold text-[#C58940] uppercase">
            Phòng nghỉ
          </span>
          <h2 className="font-serif font-semibold text-[#133826] text-[26px] leading-[1.2] sm:text-3xl md:text-[36px] mt-1.5 text-balance">
            Khám phá không gian của bạn
          </h2>
          <div className="w-10 h-[2px] bg-[#C58940]/80 mx-auto mt-3 rounded-full" />
        </div>

        {/* Carousel lướt ngang */}
        <div className="relative px-2 sm:px-4 md:px-6">
          {/* Nút <> mobile: 2 ảnh bên chỉ ló 1 mép nên giữ 2 nút cố định ôm card giữa */}
          <button
            onClick={handlePrev}
            aria-label="Phòng trước"
            className="absolute left-0 top-[42%] -translate-y-1/2 z-30 sm:hidden w-9 h-9 rounded-full bg-white/95 backdrop-blur border border-[#E7DCCB] shadow-[0_8px_24px_-8px_rgba(20,56,39,0.35)] text-[#143827] flex items-center justify-center active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            aria-label="Phòng tiếp theo"
            className="absolute right-0 top-[42%] -translate-y-1/2 z-30 sm:hidden w-9 h-9 rounded-full bg-white/95 backdrop-blur border border-[#E7DCCB] shadow-[0_8px_24px_-8px_rgba(20,56,39,0.35)] text-[#143827] flex items-center justify-center active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Track lướt ngang: mỗi card giữ DOM ổn định, chỉ đổi transform
              nên khi đổi index hay kéo-thả, card trượt ngang thật thay vì swap ảnh */}
          <div
            ref={trackRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onDragStart={(e) => e.preventDefault()}
            className="relative h-[350px] sm:h-[390px] md:h-[450px] lg:h-[480px] cursor-grab active:cursor-grabbing select-none [touch-action:pan-y]"
            style={{ perspective: "1400px" }}
          >
            {rooms.map((room, roomIdx) => {
              const offset = getOffset(roomIdx);
              const abs = Math.abs(offset);
              const isCenter = offset === 0;
              const isSide = abs === 1;
              // Card xa hơn (nếu sau này thêm phòng) thì ẩn hẳn
              const isHidden = abs > 1;

              // Xéo phối cảnh như mẫu: 2 bên nghiêng vào trong
              const tilt = isCenter ? 0 : offset < 0 ? 13 : -13;
              const scale = isCenter ? 1 : 0.88;

              // Vị trí ngang theo card: giữa = -50% (căn giữa), 2 bên = ±(100% + gap).
              // Dùng cộng/trừ tường minh để calc() chạy ổn định mọi browser.
              const baseX =
                offset === 0
                  ? "-50%"
                  : offset < 0
                    ? `calc(-50% - 100% - ${GAP_PX}px)`
                    : `calc(-50% + 100% + ${GAP_PX}px)`;

              return (
                <article
                  key={room.id}
                  onClick={() => handleCardClick(room, roomIdx, isCenter)}
                  style={{
                    transform: `translate(${baseX}, -50%) translateX(${dragOffset}px) rotateY(${tilt}deg) scale(${scale})`,
                    transformOrigin: "center center",
                    zIndex: isCenter ? 20 : 10 - abs,
                    opacity: isHidden ? 0 : 1,
                    filter: isCenter
                      ? "brightness(1)"
                      : "brightness(0.97) saturate(0.96)",
                    pointerEvents: isHidden ? "none" : "auto",
                    transition: isDragging
                      ? "none"
                      : "transform 700ms cubic-bezier(0.22, 1, 0.36, 1), filter 500ms ease, opacity 400ms ease, box-shadow 500ms ease",
                  }}
                  className={`group absolute left-1/2 top-1/2 overflow-hidden rounded-[14px] md:rounded-[18px] bg-[#EDE3D3] will-change-transform h-[320px] sm:h-[360px] md:h-[420px] lg:h-[440px] w-[78vw] sm:w-[380px] md:w-[440px] lg:w-[470px] ${
                    isDragging ? "cursor-grabbing" : "cursor-pointer"
                  } ${
                    isCenter
                      ? "shadow-[0_24px_60px_-18px_rgba(20,56,39,0.4)] ring-1 ring-[#C58940]/25"
                      : "shadow-[0_14px_36px_-16px_rgba(20,56,39,0.35)]"
                  } ${isSide ? "" : ""}`}
                  aria-hidden={!isCenter && !isSide}
                >
                  {/* Ảnh full card */}
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      sizes="(max-width: 640px) 78vw, (max-width: 1024px) 440px, 470px"
                      unoptimized
                      draggable={false}
                      className="object-cover pointer-events-none"
                    />
                    {/* Phủ nhẹ chân ảnh để thẻ info nổi rõ */}
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
                  </div>

                  {/* Thẻ info nổi — nền kem mờ */}
                  <div
                    className={`absolute inset-x-0 flex items-center justify-between gap-2 rounded-[12px] md:rounded-[14px] bg-[#FFFBF2]/95 backdrop-blur-md shadow-[0_8px_24px_-10px_rgba(20,56,39,0.35)] border border-white/60 ${
                      isCenter
                        ? "bottom-2.5 left-2.5 right-2.5 md:bottom-3.5 md:left-3.5 md:right-3.5 px-3.5 py-3 md:px-4"
                        : "bottom-2 left-2 right-2 px-3 py-2.5"
                    }`}
                  >
                    <div className="min-w-0 text-left">
                      <h3
                        className={`font-bold text-[#143827] truncate leading-tight ${
                          isCenter ? "text-[15px] md:text-[17px]" : "text-[12.5px] md:text-[13px]"
                        }`}
                      >
                        {room.name}
                      </h3>
                      <p
                        className={`font-semibold text-[#C07A2E] leading-tight mt-0.5 ${
                          isCenter ? "text-[13px] md:text-[15px]" : "text-[11.5px] md:text-xs"
                        }`}
                      >
                        {room.price}
                      </p>
                      {/* Chỉ card giữa mới show chi tiết sức chứa — gọn như mẫu */}
                      {isCenter && (
                        <div className="mt-1.5 flex items-center gap-3 text-[11.5px] md:text-[13px] text-[#5F6E62] font-medium whitespace-nowrap">
                          <span className="inline-flex items-center gap-1.5">
                            <span className="text-[#B07A2E]">
                              <PersonIcon />
                            </span>
                            {room.capacity}
                          </span>
                          <span className="inline-flex items-center gap-1.5 truncate">
                            <span className="text-[#B07A2E]">
                              <BedIcon />
                            </span>
                            <span className="truncate">{room.beds}</span>
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Nút tròn mũi tên */}
                    <button
                      aria-label={`Đặt ${room.name}`}
                      tabIndex={isHidden ? -1 : 0}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(room, roomIdx, isCenter);
                      }}
                      className={`shrink-0 rounded-full border flex items-center justify-center transition-all ${
                        isCenter
                          ? "w-9 h-9 md:w-11 md:h-11 border-[#143827]/25 bg-white text-[#143827] group-hover:bg-[#143827] group-hover:text-white group-hover:border-[#143827]"
                          : "w-8 h-8 border-[#143827]/15 bg-white/80 text-[#143827]"
                      }`}
                    >
                      <ArrowIcon className={isCenter ? "w-4 h-4" : "w-3.5 h-3.5"} />
                      </button>
                    </div>

                    {/* Nút <> gắn sát rìa ngoài của 2 ảnh bên — đi theo card nên luôn đối xứng */}
                    {offset === -1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!suppressClickRef.current) handlePrev();
                        }}
                        aria-label="Phòng trước"
                        tabIndex={isHidden ? -1 : 0}
                        className="absolute left-2.5 md:left-3.5 top-[36%] -translate-y-1/2 z-20 hidden sm:flex w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/95 backdrop-blur border border-[#E7DCCB] shadow-[0_8px_24px_-8px_rgba(20,56,39,0.35)] text-[#143827] items-center justify-center transition-all hover:scale-105 hover:bg-white active:scale-95"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                    )}
                    {offset === 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!suppressClickRef.current) handleNext();
                        }}
                        aria-label="Phòng tiếp theo"
                        tabIndex={isHidden ? -1 : 0}
                        className="absolute right-2.5 md:right-3.5 top-[36%] -translate-y-1/2 z-20 hidden sm:flex w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/95 backdrop-blur border border-[#E7DCCB] shadow-[0_8px_24px_-8px_rgba(20,56,39,0.35)] text-[#143827] items-center justify-center transition-all hover:scale-105 hover:bg-white active:scale-95"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}
                </article>
              );
            })}
          </div>

          {/* Dots */}
          <div className="mt-4 flex flex-col items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              {rooms.map((r, i) => (
                <button
                  key={r.id}
                  aria-label={`Xem ${r.name}`}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? "w-6 bg-[#C58940]" : "w-1.5 bg-[#143827]/20 hover:bg-[#143827]/35"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
