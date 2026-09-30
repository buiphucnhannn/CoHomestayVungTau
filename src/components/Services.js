import Image from "next/image";

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
    <section
      id="tien-nghi"
      className="relative w-full overflow-hidden bg-[#FAF7F2] border-y border-[#EADBCE]/80 shadow-[0_4px_25px_rgba(20,56,39,0.03)] text-[#143827] py-14 md:py-20 flex items-center"
    >
      {/* SVG clip-path definition for organic curve */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="amenity-organic-curve" clipPathUnits="objectBoundingBox">
            <path d="M 0.16,0 C 0.06,0.12 0.03,0.24 0.05,0.36 C 0.07,0.50 0.15,0.58 0.13,0.72 C 0.11,0.85 0.03,0.94 0,1 L 1,1 L 1,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* CỘT NỘI DUNG: Nằm trong grid chuẩn max-w-7xl của trang, canh giữa trong vùng bên trái */}
      <div className="w-full max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center">
        <div className="w-full lg:w-[60%] xl:w-[62%] py-2 sm:py-4 flex flex-col justify-center items-center text-center">
          {/* Header: Tagline & Tiêu đề */}
          <div className="mb-6 sm:mb-7">
            <span className="text-[11px] sm:text-xs tracking-[0.25em] font-semibold text-[#C58940] uppercase">
              TIỆN NGHI
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-[#143827] mt-1.5 tracking-[-0.01em]">
              Đáp ứng mọi nhu cầu cơ bản
            </h2>
          </div>

          {/* Dãy 6 tiện ích dàn hàng ngang có vạch chia mảnh tinh tế đúng mẫu */}
          <div className="w-full max-w-2xl mx-auto">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-y-4 sm:gap-y-0 sm:divide-x divide-[#E5DEC9]/80 border-y sm:border-0 border-[#E5DEC9]/60 py-4 sm:py-0">
              {amenities.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center py-2 sm:py-1 px-1 sm:px-2 group cursor-default transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center text-[#143827] group-hover:text-[#1F5C3B] transition-transform duration-300 group-hover:scale-115">
                    {item.icon}
                  </div>
                  <span className="mt-1.5 sm:mt-2 text-[11.5px] sm:text-[13px] font-medium text-[#2A4736] group-hover:text-[#143827] transition-colors whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CỘT ẢNH GÓC BẾP & BÌNH HOA: Tràn sát mép phải màn hình 100%, cắt vòm cong hữu cơ */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[40%] xl:w-[38%] overflow-hidden">
        <div
          className="relative w-full h-full overflow-hidden"
          style={{ clipPath: "url(#amenity-organic-curve)" }}
        >
          <Image
            src="/images/amenity_banner_hd.jpg"
            alt="Góc tiện nghi Cỏ Homestay Vũng Tàu"
            fill
            priority={false}
            unoptimized
            className="object-cover object-[82%_45%] brightness-[1.03] transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Viền đôi màu trắng & vàng cát chạy dọc đường cong uốn lượn sắc nét */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          aria-hidden="true"
        >
          <path
            d="M 16,0 C 6,12 3,24 5,36 C 7,50 15,58 13,72 C 11,85 3,94 0,100"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
            opacity="0.95"
          />
          <path
            d="M 17,0 C 7,12 4,24 6,36 C 8,50 16,58 14,72 C 12,85 4,94 1,100"
            fill="none"
            stroke="#E5DEC9"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
            opacity="0.8"
          />
        </svg>
      </div>
    </section>
  );
}
