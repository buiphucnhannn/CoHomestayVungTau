import Image from "next/image";

const FEATURES = [
  {
    label: "Riêng tư",
    icon: (
      <svg className="w-[26px] h-[26px] text-[#A67332]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M3 10.5L12 3l9 7.5M5 9.5V20a1 1 0 001 1h3v-6h6v6h3a1 1 0 001-1V9.5"
        />
      </svg>
    ),
  },
  {
    label: "Tiện nghi",
    icon: (
      <svg className="w-[26px] h-[26px] text-[#A67332]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    label: "Ấm cúng",
    icon: (
      <svg className="w-[26px] h-[26px] text-[#A67332]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M12 21c-4 0-7-2.8-7-6.5 0-4.5 4.5-8.5 9.5-10.5.6-.2 1.5.3 1.5 1v9c0 3.9-1.6 7-4 7z"
        />
        <path strokeLinecap="round" strokeWidth="1.8" d="M12 21c0-5 1.5-9.5 5.5-12.5" />
      </svg>
    ),
  },
];

export default function Intro({ onOpenBooking }) {
  return (
    <section
      id="noi-nghi-lai"
      className="relative z-10 -mt-[52px] sm:-mt-[76px] w-full overflow-hidden rounded-t-[50%_52px] sm:rounded-t-[50%_76px] bg-[#F2F6F3] text-[#143827] pt-16 sm:pt-24 lg:pt-28 pb-16 sm:pb-24 lg:pb-28 shadow-[0_-12px_30px_rgba(20,56,39,0.06)] border-t border-[#D5E3D8]/80"
    >
      {/* ============ BACKGROUND COASTAL RESORT AMBIENT ============ */}
      {/* Nền phong cảnh biển & vườn nhiệt đới mờ ảo ngập tràn ánh nắng ấm */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/images/vungtau_resort_bg.jpg"
          alt="Không gian ven biển Vũng Tàu"
          fill
          sizes="100vw"
          unoptimized
          className="object-cover object-center opacity-25 filter blur-[1px]"
        />
        {/* Lớp phủ đa tầng giúp toàn bộ chữ và hình nổi bật tuyệt đối, đồng thời giữ cảm giác nắng sớm và gió biển */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F2F6F3]/90 via-[#F2F6F3]/70 to-[#F2F6F3]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2F6F3]/85 via-transparent to-[#F2F6F3]/85" />
      </div>

      {/* ============ NỘI DUNG: MỞ RỘNG CHIỀU NGANG THOÁNG ĐÃNG ============ */}
      <div className="relative z-10 max-w-7xl xl:max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          {/* ============ CỘT TRÁI (6/12): CARD ẢNH PHÒNG NGHỈ NỔI BẬT & SINH ĐỘNG ============ */}
          <div className="lg:col-span-6 relative">
            {/* Lớp viền nền lót lệch nhẹ phía sau tạo chiều sâu kiến trúc resort */}
            <div className="absolute -inset-3 sm:-inset-4 rounded-[36px] sm:rounded-[44px] bg-white/60 backdrop-blur-md border border-[#D5E3D8]/80 shadow-lg shadow-[#143827]/5 -rotate-1 pointer-events-none" />

            {/* Khung ảnh chính sắc nét, tràn ngập ánh sáng tự nhiên */}
            <div className="relative aspect-[16/11] rounded-[30px] sm:rounded-[38px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(20,56,39,0.20)] border-4 border-white bg-white group">
              <Image
                src="/CoHomestayVungTau/812281298_122106536373469874_430409947337975689_n.jpg"
                alt="Phòng nghỉ view biển tại Cỏ Homestay Vũng Tàu"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Tag góc dưới nổi bật thông tin view biển */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-2.5 shadow-lg border border-[#D5E3D8]/80 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#143827] text-[#DDB57D] flex items-center justify-center text-sm font-bold shadow-sm">
                  🌿
                </span>
                <div>
                  <p className="text-xs font-bold text-[#143827]">Phòng view biển & núi Bãi Sau</p>
                  <p className="text-[11px] text-[#4A6453]">Ban công thoáng đãng, đón trọn gió biển</p>
                </div>
              </div>
            </div>
          </div>

          {/* ============ CỘT PHẢI (6/12): NỘI DUNG RỘNG RÃI, CÂN ĐỐI & HÀI HÒA ============ */}
          <div className="lg:col-span-6 w-full text-center lg:text-left space-y-6">
            {/* Tagline cân đối 2 đầu */}
            <div className="inline-flex items-center gap-2.5">
              <span className="w-6 h-[1.5px] bg-[#C58940]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-[#C58940] uppercase">
                CỎ HOMESTAY VŨNG TÀU
              </span>
              <span className="w-6 h-[1.5px] bg-[#C58940]" />
            </div>

            {/* Tiêu đề thanh lịch */}
            <h2 className="font-serif text-[34px] sm:text-[42px] lg:text-[46px] xl:text-[50px] font-bold text-[#143827] leading-[1.16] tracking-[-0.01em]">
              Nơi để nghỉ lại,
              <br />
              <span className="font-normal italic text-[#C58940]">tìm về an yên.</span>
            </h2>

            {/* Mô tả súc tích, vừa vặn */}
            <p className="text-[#3A5343] text-base sm:text-[17px] leading-[1.8] font-normal max-w-xl mx-auto lg:mx-0">
              Không gian nghỉ dưỡng ấm cúng, gần gũi và đầy đủ tiện nghi tại Vũng Tàu, nơi từng góc nhỏ đều được chăm chút cho kỳ nghỉ thật an yên.
            </p>

            {/* 3 badges tròn tông kem ấm nhã nhặn */}
            <div className="flex items-center justify-center lg:justify-start gap-8 sm:gap-11 pt-1 pb-1">
              {FEATURES.map((item) => (
                <div key={item.label} className="flex flex-col items-center text-center group cursor-pointer">
                  <div className="w-[66px] h-[66px] rounded-full bg-[#F7EFE3] group-hover:bg-[#F2E5D3] border border-[#E8D7C0] flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm">
                    {item.icon}
                  </div>
                  <span className="mt-2.5 text-[13px] font-semibold tracking-tight text-[#143827]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Nút hành động */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenBooking?.("Phòng view biển")}
                className="inline-flex items-center gap-2.5 rounded-full bg-[#143827] hover:bg-[#1C4D36] text-white px-8 py-3.5 text-sm font-medium shadow-md shadow-[#143827]/15 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Đặt phòng ngay</span>
                <span className="text-xs">→</span>
              </button>
              <a
                href="#phong-nghi"
                className="inline-flex items-center justify-center rounded-full bg-white/95 hover:bg-white text-[#1C3B29] border border-[#CCDCD1] px-7 py-3.5 text-sm font-medium transition-all shadow-sm hover:shadow"
              >
                Xem chi tiết phòng
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
