"use client";

import { useState } from "react";
import Image from "next/image";
import Wave from "./Wave";

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

export default function Space({ onOpenBooking, rooms = defaultRooms }) {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % rooms.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + rooms.length) % rooms.length);
  };

  return (
    <section id="phong-nghi" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[12px] md:text-[13px] tracking-[0.2em] font-semibold text-[#C58940] uppercase">
            PHÒNG NGHỈ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#133826] mt-2 mb-3">
            Khám phá không gian của bạn
          </h2>
          <div className="w-16 h-[2px] bg-[#C58940] mx-auto rounded-full" />
        </div>

        {/* Room Cards Carousel with Nav Arrows */}
        <div className="relative">
          {/* Left Nav Arrow */}
          <button
            onClick={handlePrev}
            className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white text-[#143827] shadow-xl border border-[#EADBCE] flex items-center justify-center transition-all hover:bg-[#FAF4EB] hover:scale-110 active:scale-95"
            aria-label="Phòng trước"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Nav Arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white text-[#143827] shadow-xl border border-[#EADBCE] flex items-center justify-center transition-all hover:bg-[#FAF4EB] hover:scale-110 active:scale-95"
            aria-label="Phòng tiếp theo"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
            {rooms.map((room, idx) => {
              const isCenter = idx === 1;
              return (
                <div
                  key={room.id}
                  onClick={() => onOpenBooking?.(room.name)}
                  className={`group cursor-pointer rounded-[26px] bg-white border border-[#EADBCE]/80 overflow-hidden transition-all duration-500 flex flex-col ${
                    isCenter
                      ? "shadow-2xl shadow-[#143827]/12 md:-translate-y-3 ring-2 ring-[#C58940]/30"
                      : "shadow-md hover:shadow-xl hover:-translate-y-1"
                  }`}
                >
                  {/* Room Image */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#F3ECE1]">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Room Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#143827] group-hover:text-[#C58940] transition-colors">
                        {room.name}
                      </h3>
                      <p className="mt-1.5 text-[15px] font-semibold text-[#C58940]">
                        {room.price}
                      </p>
                    </div>

                    {/* Info & action button */}
                    <div className="mt-5 pt-4 border-t border-[#F2ECE1] flex items-center justify-between text-xs text-[#5B6A5F]">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1 font-medium">
                          <svg className="w-4 h-4 text-[#A87233]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          {room.capacity}
                        </span>
                        <span className="inline-flex items-center gap-1 font-medium">
                          <svg className="w-4 h-4 text-[#A87233]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 10h18M3 14h18" />
                          </svg>
                          {room.beds}
                        </span>
                      </div>

                      {/* Circular Arrow Button */}
                      <div className="w-9 h-9 rounded-full border border-[#D5C7B5] bg-white group-hover:bg-[#143827] group-hover:border-[#143827] group-hover:text-white flex items-center justify-center transition-all shadow-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Organic curve transition into Ritual */}
      <Wave variant="curve-down" fillColor="#EAF1EB" className="w-full" />
    </section>
  );
}
