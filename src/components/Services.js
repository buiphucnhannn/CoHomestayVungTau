import Image from "next/image";
import Wave from "./Wave";

const defaultAmenities = [
  {
    name: "Wifi",
    icon: (
      <svg className="w-8 h-8 text-[#143827]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
  {
    name: "TV",
    icon: (
      <svg className="w-8 h-8 text-[#143827]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="13" rx="2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M17 2l-5 5-5-5" />
      </svg>
    ),
  },
  {
    name: "Máy lạnh",
    icon: (
      <svg className="w-8 h-8 text-[#143827]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M12 3v18m0-18l3 3m-3-3l-3 3m0 12l3 3m-3-3l-3 3M3 12h18M3 12l3-3m-3 3l3 3m12-6l3 3m-3-3l3-3M6.34 6.34l11.32 11.32m-11.32 0L17.66 6.34" />
      </svg>
    ),
  },
  {
    name: "Tủ lạnh",
    icon: (
      <svg className="w-8 h-8 text-[#143827]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="5" y1="9" x2="19" y2="9" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="8" y1="5.5" x2="8" y2="7.5" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="12.5" x2="8" y2="15.5" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Bếp nấu",
    icon: (
      <svg className="w-8 h-8 text-[#143827]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M4 11h16M6 11V6a2 2 0 012-2h8a2 2 0 012 2v5m-14 0v7a2 2 0 002 2h10a2 2 0 002-2v-7M9 3v2m3-2v2m3-2v2" />
      </svg>
    ),
  },
  {
    name: "Chỗ đỗ xe",
    icon: (
      <svg className="w-8 h-8 text-[#143827]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="3" width="16" height="18" rx="2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 16V8h4.5a2.5 2.5 0 010 5H9" />
      </svg>
    ),
  },
];

export default function Services({ amenities = defaultAmenities }) {
  return (
    <section id="tien-nghi" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[12px] md:text-[13px] tracking-[0.2em] font-semibold text-[#C58940] uppercase">
            TIỆN NGHI
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#133826] mt-2">
            Đáp ứng mọi nhu cầu cơ bản
          </h2>
        </div>

        {/* Content Layout: Icons Bar + Right Decorative Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/70 backdrop-blur-sm rounded-[32px] p-6 md:p-10 border border-[#EADBCE]/80 shadow-md">
          {/* Left/Center Amenities Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 text-center">
              {amenities.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center group p-3 rounded-2xl transition-all duration-300 hover:bg-[#FAF4EB]"
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="mt-3 text-xs sm:text-sm font-medium text-[#233F2E]">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Decorative Corner Photo */}
          <div className="lg:col-span-4 relative rounded-2xl md:rounded-[30px] overflow-hidden shadow-md border-2 border-white aspect-[4/3] w-full">
            <Image
              src="/images/amenity_corner.jpg"
              alt="Góc bếp và bàn ăn tiện nghi Co Homestay"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              unoptimized
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 text-white text-xs font-light">
              Góc bếp ấm cúng & tiện nghi
            </div>
          </div>
        </div>
      </div>

      {/* Organic curve transition into Testimonial */}
      <Wave variant="curve-up" fillColor="#EAF1EB" className="w-full" />
    </section>
  );
}
