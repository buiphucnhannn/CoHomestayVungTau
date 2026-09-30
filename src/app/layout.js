import "./globals.css";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Cỏ Homestay Vũng Tàu | Dịch vụ cho thuê Homestay Vũng Tàu",
  description: "Cỏ Homestay Vũng Tàu - Không gian ấm cúng, tiện nghi cho những ngày nghỉ thật trọn vẹn. Phòng nghỉ view biển, căn hộ gia đình, giá tốt nhất.",
  keywords: ["Co Homestay", "Cỏ Homestay Vũng Tàu", "Homestay Vũng Tàu", "khách sạn vũng tàu", "thuê phòng vũng tàu"],
  openGraph: {
    title: "Cỏ Homestay Vũng Tàu | Dịch vụ cho thuê Homestay Vũng Tàu",
    description: "Không gian ấm cúng, tiện nghi cho những ngày nghỉ thật trọn vẹn tại Vũng Tàu.",
    images: ["/CoHomestayVungTau/810449088_122106531489469874_6486305621321388115_n.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600;1,700&family=Dancing+Script:wght@500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#EAF1EB] text-[#143827] font-sans antialiased selection:bg-[#C58940]/25 selection:text-[#143827]">
        {children}
      </body>
    </html>
  );
}
