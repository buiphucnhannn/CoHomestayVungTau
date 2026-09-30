import Image from "next/image";
import { handleNavClick } from "@/utils/smoothScroll";
import Reveal from "./Reveal";

export default function Intro({ onOpenBooking }) {
  return (
    <section
      id="noi-nghi-lai"
      className="relative z-10 -mt-[52px] sm:-mt-[76px] w-full overflow-hidden rounded-t-[50%_52px] sm:rounded-t-[50%_76px] bg-[#EAF1EB] text-[#143827] pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-16 lg:pb-18 shadow-[0_-10px_28px_rgba(20,56,39,0.04)]"
    >
      {/* ============ SVG CLIP PATH DEFINITIONS ============ */}
      {/* Độ phân giải vector vô hạn, mượt mà 100% không vỡ nét trên mọi màn hình */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          {/* Khung hữu cơ uốn lượn tự nhiên cho ảnh phòng ngủ bên trái */}
          <clipPath id="intro-bedroom-blob" clipPathUnits="objectBoundingBox">
            <path d="M 0.06,0.20 C 0.10,0.06 0.28,0.02 0.44,0.06 C 0.58,0.10 0.72,0.02 0.88,0.07 C 0.98,0.11 1.0,0.30 0.98,0.54 C 0.96,0.76 0.91,0.95 0.76,0.98 C 0.60,1.00 0.36,0.97 0.20,0.97 C 0.07,0.97 0.01,0.85 0.01,0.66 C 0.01,0.48 0.03,0.35 0.06,0.20 Z" />
          </clipPath>

          {/* Đường cong uốn lượn cho ảnh biển Vũng Tàu bên phải */}
          <clipPath id="intro-coastal-wave" clipPathUnits="objectBoundingBox">
            <path d="M 0.36,0 C 0.22,0.16 0.15,0.36 0.12,0.58 C 0.09,0.76 0.04,0.90 0,1 L 1,1 L 1,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* ============ LÁ CỌ TRANG TRÍ NÉP SÁT MÉP TRÁI MÀN HÌNH ============ */}
      {/* Neo sát mép trái màn hình, hoàn toàn không chạm/chèn vào ảnh phòng */}
      <div className="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2 w-28 lg:w-32 pointer-events-none select-none z-0 opacity-75">
        <Image
          src="/images/tropical_leaves.png"
          alt="Lá nhiệt đới Cỏ Homestay"
          width={300}
          height={300}
          className="w-full h-auto object-contain -translate-x-8 filter contrast-110 saturate-125"
        />
      </div>

      {/* ============ NỘI DUNG CHÍNH (CÂN ĐỐI, THOÁNG ĐÃNG, KHÔNG ĐÈ NHAU) ============ */}
      <div className="relative z-10 max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 xl:gap-8 items-center min-h-[460px] lg:min-h-[490px]">
          
          {/* ============ CỘT 1 (LG: 5/12): CỤM ẢNH PHÒNG NGHỈ HỮU CƠ + ẢNH GƯƠNG + BANNER ============ */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-start">
            <Reveal variant="fade-scale" delay={50} duration={800} className="w-full flex justify-center lg:justify-start">
              {/* Container ảnh phòng ngủ với khung hữu cơ mềm mại */}
            <div className="relative w-full max-w-[340px] xs:max-w-[390px] sm:max-w-[450px] lg:max-w-[400px] xl:max-w-[440px] aspect-[16/11]">
              
              {/* Lớp bóng đổ mềm phía sau */}
              <div
                className="absolute inset-0 bg-[#143827]/12 blur-xl transform translate-y-3 scale-95 pointer-events-none"
                style={{ clipPath: "url(#intro-bedroom-blob)" }}
              />

              {/* Ảnh phòng ngủ chính sắc nét (HD từ file gốc của homestay) */}
              <div
                className="relative w-full h-full overflow-hidden bg-white shadow-xl transition-transform duration-700 hover:scale-[1.02]"
                style={{ clipPath: "url(#intro-bedroom-blob)" }}
              >
                <Image
                  src="/images/intro_room_hd.jpg"
                  alt="Phòng nghỉ ấm cúng tại Cỏ Homestay Vũng Tàu"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>

              {/* ẢNH CARD NHỎ: Góc bàn trang điểm + bình hoa ấm cúng (Đè góc trái dưới) */}
              <div className="absolute -bottom-2.5 sm:-bottom-4 -left-1 sm:-left-3 w-24 xs:w-28 sm:w-36 lg:w-34 xl:w-40 aspect-[4/3] rounded-[14px] sm:rounded-[20px] border-[2.5px] sm:border-[3.5px] border-white shadow-[0_15px_35px_rgba(20,56,39,0.18)] overflow-hidden z-20 -rotate-2 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/images/intro_vanity_hd.jpg"
                  alt="Góc bàn trang điểm ấm cúng"
                  fill
                  sizes="180px"
                  className="object-cover object-center"
                />
              </div>

              {/* BANNER THƯ PHÁP 1: "Không gian ấm cúng" (Dùng font web, vector-sharp 100%) */}
              <div className="absolute -bottom-5 sm:-bottom-7 left-18 xs:left-22 sm:left-30 lg:left-26 xl:left-32 z-30 -rotate-1 select-none filter drop-shadow-[0_8px_16px_rgba(20,56,39,0.12)]">
                <div className="relative px-3.5 xs:px-5 sm:px-6 py-1.5 sm:py-3 bg-[#F8F4EC] rounded-sm border border-[#E2D6C3]/80 shadow-sm">
                  {/* Họa tiết răng cưa giả mép giấy xé tinh tế 2 đầu */}
                  <span className="absolute -left-2 top-0 bottom-0 w-2.5 bg-gradient-to-r from-transparent to-[#F8F4EC]" />
                  <span className="absolute -right-2 top-0 bottom-0 w-2.5 bg-gradient-to-l from-transparent to-[#F8F4EC]" />
                  
                  <div className="font-script text-[18px] xs:text-[22px] sm:text-[28px] font-bold text-[#1B3B2B] leading-none tracking-wide text-center">
                    Không gian
                  </div>
                  <div className="font-script text-[13px] xs:text-[16px] sm:text-[20px] font-semibold text-[#2D523C] leading-tight text-center mt-0.5">
                    ấm cúng
                  </div>
                </div>
              </div>
            </div>
            </Reveal>
          </div>

          {/* ============ CỘT 2 (LG: 4/12): NỘI DUNG CHỮ THOÁNG ĐÃNG + NÚT TRÒN ============ */}
          <div className="lg:col-span-4 relative text-center lg:text-left flex flex-col justify-center items-center lg:items-start pl-0 lg:pl-12 xl:pl-14">
            <Reveal variant="fade-up" delay={150} duration={850} className="w-full flex flex-col items-center lg:items-start relative">
              {/* Nhánh lá nét vẽ thanh mảnh nằm bên trái, lùi xa có khoảng hở thoáng đãng, tuyệt đối không chạm chữ */}
              <div className="hidden lg:block absolute -left-8 xl:-left-9 top-1 w-7 xl:w-8 pointer-events-none select-none z-10 text-[#768472] opacity-75">
                <svg viewBox="0 0 100 240" fill="none" stroke="currentColor" className="w-full h-auto">
                  <path d="M 68 230 Q 55 165 38 100 T 26 15" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M 62 180 C 88 168 85 140 80 134 C 73 146 62 168 62 180 Z" strokeWidth="1.3" />
                  <path d="M 62 180 Q 73 154 80 134" strokeWidth="0.9" strokeLinecap="round" />
                  <path d="M 46 130 C 22 114 18 88 22 80 C 31 92 42 116 46 130 Z" strokeWidth="1.3" />
                  <path d="M 46 130 Q 31 104 22 80" strokeWidth="0.9" strokeLinecap="round" />
                  <path d="M 38 90 C 70 74 70 45 65 39 C 56 52 42 75 38 90 Z" strokeWidth="1.3" />
                  <path d="M 38 90 Q 54 64 65 39" strokeWidth="0.9" strokeLinecap="round" />
                  <path d="M 28 32 C 12 14 16 -1 24 2 C 27 14 27 26 28 32 Z" strokeWidth="1.3" />
                  <path d="M 28 32 C 46 14 42 -1 34 2 C 31 14 28 26 28 32 Z" strokeWidth="1.3" />
                </svg>
              </div>

              {/* Tagline thương hiệu: điểm nhấn line vàng nghệ thuật cân đối 2 đầu giống Hero */}
              <div className="inline-flex items-center gap-2 sm:gap-2.5">
                <span className="w-4 sm:w-5 h-[1.5px] bg-[#C58940]" />
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.28em] sm:tracking-[0.32em] text-[#C58940] uppercase">
                  CỎ HOMESTAY VŨNG TÀU
                </span>
                <span className="w-4 sm:w-5 h-[1.5px] bg-[#C58940]" />
              </div>

              {/* Tiêu đề thanh lịch (font serif sang trọng) */}
              <h2 className="font-serif text-[30px] sm:text-[36px] xl:text-[40px] font-bold text-[#143827] leading-[1.16] tracking-[-0.01em] mt-2 sm:mt-2.5">
                Một không gian
                <br />
                để nghỉ lại
              </h2>

              {/* Thanh gạch nối vàng nhỏ nhắn */}
              <div className="w-10 sm:w-12 h-[2.5px] bg-[#C58940] rounded-full my-3 sm:my-3.5" />

              {/* Đoạn mô tả tinh tế, căn lề chuẩn */}
              <p className="text-[#3E5244] text-[14px] sm:text-[15px] leading-[1.7] font-normal max-w-sm mx-auto lg:mx-0">
                Mang đến sự thoải mái, riêng tư và tiện nghi cho những ngày nghỉ ngơi tại thành phố biển Vũng Tàu.
              </p>

              {/* Nút tròn mũi tên tinh xảo (click điều hướng xuống phòng nghỉ) */}
              <div className="pt-4 sm:pt-5">
                <a
                  href="#phong-nghi"
                  onClick={(e) => handleNavClick(e, "phong-nghi")}
                  aria-label="Xem chi tiết các phòng"
                  className="group inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#D5BE97] bg-white hover:bg-[#C58940] text-[#C58940] hover:text-white transition-all duration-300 shadow-sm hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 transform transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </Reveal>
          </div>

          {/* ============ CỘT 3 (LG: 3/12): VÒM CUNG BIỂN VŨNG TÀU + BANNER ============ */}
          <div className="lg:col-span-3 relative flex items-center justify-center lg:justify-end">
            <Reveal variant="fade-scale" delay={250} duration={800} className="w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[270px] xs:max-w-[300px] sm:max-w-[340px] lg:max-w-[280px] xl:max-w-[320px] aspect-[9/11]">
                
                {/* Lớp khung ảnh biển Vũng Tàu cắt vòm cong uốn lượn sắc nét */}
                <div
                  className="relative w-full h-full overflow-hidden bg-white shadow-xl"
                  style={{ clipPath: "url(#intro-coastal-wave)" }}
                >
                  <Image
                    src="/images/intro_vungtau_hd.jpg"
                    alt="Toàn cảnh thành phố biển Vũng Tàu"
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover object-left-top transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Viền đôi màu vàng kim chạy dọc theo đường cong vòm cung bên trái */}
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                >
                  <path
                    d="M 36,0 C 22,16 15,36 12,58 C 9,76 4,90 0,100"
                    fill="none"
                    stroke="#C58940"
                    strokeWidth="1.8"
                    vectorEffect="non-scaling-stroke"
                    opacity="0.9"
                  />
                  <path
                    d="M 38,0 C 24,16 17,36 14,58 C 11,76 6,90 2,100"
                    fill="none"
                    stroke="#E8DCBE"
                    strokeWidth="1.2"
                    vectorEffect="non-scaling-stroke"
                    opacity="0.75"
                  />
                </svg>

                {/* BANNER THƯ PHÁP 2: "Vũng Tàu đang chờ bạn" (Dùng font web, vector-sharp 100%) */}
                <div className="absolute -bottom-4 sm:-bottom-5 right-0 sm:-right-4 z-20 -rotate-6 select-none filter drop-shadow-[0_8px_16px_rgba(20,56,39,0.14)]">
                  <div className="relative px-3.5 xs:px-5 sm:px-6 py-1.5 sm:py-3 bg-[#F8F4EC] rounded-sm border border-[#E2D6C3]/80 shadow-sm">
                    {/* Họa tiết răng cưa mép giấy xé 2 đầu */}
                    <span className="absolute -left-2 top-0 bottom-0 w-2.5 bg-gradient-to-r from-transparent to-[#F8F4EC]" />
                    <span className="absolute -right-2 top-0 bottom-0 w-2.5 bg-gradient-to-l from-transparent to-[#F8F4EC]" />

                    <div className="font-script text-[20px] xs:text-[24px] sm:text-[30px] font-bold text-[#1F3E30] leading-none tracking-wide text-center">
                      Vũng Tàu
                    </div>
                    <div className="font-script text-[13px] xs:text-[16px] sm:text-[20px] font-semibold text-[#274737] leading-tight text-center mt-0.5">
                      đang chờ bạn
                    </div>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
