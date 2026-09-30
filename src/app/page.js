"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Space from "@/components/Space";
import Ritual from "@/components/Ritual";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import BodyMap from "@/components/BodyMap";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import Reveal from "@/components/Reveal";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("Phòng tiêu chuẩn");

  const handleOpenBooking = (roomName = "Phòng tiêu chuẩn") => {
    setSelectedRoom(roomName);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#E5EEE7] flex justify-center">
      <div className="relative w-full max-w-[1536px] min-h-screen bg-[#EAF1EB] text-[#143827] overflow-hidden shadow-[0_0_60px_rgba(20,56,39,0.06)] border-x border-[#D5E3D8]/40">
        {/* Decorative leaf branch overlays for lower sections */}
        {/* (Cỏ các section đã chuyển vào trong từng section để không đè nội dung) */}

        {/* Navigation Bar */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Intro Section - Nơi để nghỉ lại (hiển thị tĩnh ngay lập tức, không trễ animation để giữ vòm cong ổn định) */}
        <Intro onOpenBooking={handleOpenBooking} />

        {/* Space Section - Khám phá không gian của bạn (Phòng nghỉ: phóng to nhẹ nhàng) */}
        <Reveal variant="fade-scale" delay={80}>
          <Space onOpenBooking={handleOpenBooking} />
        </Reveal>

        {/* Ritual Section - Những khoảnh khắc tại Cỏ Homestay (Hình ảnh: hiệu ứng tráng phim mờ nét dần) */}
        <Reveal variant="blur-fade" delay={80}>
          <Ritual />
        </Reveal>

        {/* Services Section - Tiện nghi (Dải banner trượt êm từ phải sang) */}
        <Reveal variant="fade-right" className="w-full" delay={80}>
          <Services />
        </Reveal>

        {/* Testimonial Section - Dành cho ai? (Nổi lên nhẹ nhàng từ dưới) */}
        <Reveal variant="fade-up" delay={80}>
          <Testimonial onOpenBooking={handleOpenBooking} />
        </Reveal>

        {/* BodyMap Section - Vị trí Vũng Tàu (Bản đồ và ảnh biển mở rộng tầm nhìn) */}
        <Reveal variant="fade-scale" className="w-full" delay={80}>
          <BodyMap />
        </Reveal>

        {/* Final CTA & Footer Section (Nâng êm ái khi cuộn tới cuối trang) */}
        <Reveal variant="soft-lift" className="w-full">
          <Footer onOpenBooking={handleOpenBooking} />
        </Reveal>

        {/* Booking Modal */}
        <BookingModal
          isOpen={bookingModalOpen}
          onClose={handleCloseBooking}
          initialRoom={selectedRoom}
        />
      </div>
    </div>
  );
}
