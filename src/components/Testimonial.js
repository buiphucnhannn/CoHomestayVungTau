import Image from "next/image";

const defaultAudiences = [
  {
    title: "Cặp đôi",
    image: "/images/audience_couple.jpg",
    desc: "Không gian lãng mạn, riêng tư ngắm hoàng hôn biển",
    // Cặp đôi đứng giữa ảnh, mặt trời ngay sau lưng -> giữ chính giữa
    focus: "object-center",
  },
  {
    title: "Gia đình",
    image: "/images/audience_family.jpg",
    desc: "Ấm cúng như ở nhà với đầy đủ tiện nghi cho trẻ nhỏ & người lớn",
    // 4 người dàn đều, 2 bé ở giữa -> giữ chính giữa để không cắt ai
    focus: "object-center",
  },
  {
    title: "Nhóm bạn",
    image: "/images/audience_friends.jpg",
    desc: "Phòng khách rộng rãi, bàn ăn lớn quây quần chuyện trò thả ga",
    // Mặt trời + nhóm ở giữa khung -> giữ chính giữa
    focus: "object-center",
  },
  {
    title: "Du lịch ngắn ngày",
    image: "/images/audience_trip.jpg",
    desc: "Vị trí thuận tiện dạo biển Bãi Sau, ăn uống hải sản thả ga",
    // Đường đèo uốn lượn lệch phải, biển bên trái -> lệch phải nhẹ để ôm trọn cua đèo
    focus: "object-[62%_50%]",
  },
];

export default function Testimonial({ onOpenBooking, audiences = defaultAudiences }) {
  return (
    <section className="relative bg-[#EAF1EB] pt-8 sm:pt-10 md:pt-12 pb-0 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-10 md:mb-12">
          <span className="text-[11px] sm:text-xs md:text-[13px] tracking-[0.2em] font-semibold text-[#C58940] uppercase">
            DÀNH CHO AI?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#133826] mt-1.5 sm:mt-2">
            Phù hợp cho chuyến đi của bạn
          </h2>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {audiences.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onOpenBooking?.(item.title)}
              className="group relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-[3/4] cursor-pointer shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border-2 border-white/70"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                unoptimized
                className={`object-cover ${item.focus ?? "object-center"} transition-transform duration-700 group-hover:scale-108`}
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Bottom Title & Action Circle Arrow Button */}
              <div className="absolute inset-x-0 bottom-0 p-5 flex items-center justify-between text-white">
                <div>
                  <h3 className="text-lg md:text-xl font-bold font-serif tracking-wide">
                    {item.title}
                  </h3>
                </div>

                <div className="w-9 h-9 rounded-full bg-white/90 group-hover:bg-white text-[#143827] flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
