import Image from "next/image";
import Wave from "./Wave";

const defaultAudiences = [
  {
    title: "Cặp đôi",
    image: "/images/audience_couple.jpg",
    desc: "Không gian lãng mạn, riêng tư ngắm hoàng hôn biển",
  },
  {
    title: "Gia đình",
    image: "/images/audience_family.jpg",
    desc: "Ấm cúng như ở nhà với đầy đủ tiện nghi cho trẻ nhỏ & người lớn",
  },
  {
    title: "Nhóm bạn",
    image: "/images/audience_friends.jpg",
    desc: "Phòng khách rộng rãi, bàn ăn lớn quây quần chuyện trò thả ga",
  },
  {
    title: "Du lịch ngắn ngày",
    image: "/images/audience_trip.jpg",
    desc: "Vị trí thuận tiện dạo biển Bãi Sau, ăn uống hải sản thả ga",
  },
];

export default function Testimonial({ onOpenBooking, audiences = defaultAudiences }) {
  return (
    <section className="relative bg-[#EAF1EB] pt-14 md:pt-20 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[12px] md:text-[13px] tracking-[0.2em] font-semibold text-[#C58940] uppercase">
            DÀNH CHO AI?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#133826] mt-2">
            Phù hợp cho chuyến đi của bạn
          </h2>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onOpenBooking?.(item.title)}
              className="group relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[3/4] cursor-pointer shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border-2 border-white/70"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-108"
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
